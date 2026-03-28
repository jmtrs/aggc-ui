#!/usr/bin/env bash
# PostToolUse hook: blocks Claude if @styled/css is imported inside a .vue file.
# Receives a JSON payload on stdin describing the tool call.

INPUT=$(cat)

FILE=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('file_path', ''))
except Exception:
    print('')
" 2>/dev/null || echo "")

# Only check .vue files that actually exist on disk
[[ "$FILE" != *.vue ]] && exit 0
[[ ! -f "$FILE" ]] && exit 0

if grep -qE "from ['\"]@styled/css['\"]" "$FILE" 2>/dev/null; then
  BASENAME=$(basename "$FILE")
  STYLES="${BASENAME%.vue}.styles.ts"
  echo ""
  echo "ARCHITECTURAL VIOLATION: @styled/css imported in $BASENAME"
  echo "  → Move css()/cva() calls to $STYLES"
  echo "  → Import the class constants from $STYLES into $BASENAME instead"
  echo "  See: src/styles/README.md"
  exit 2
fi

exit 0
