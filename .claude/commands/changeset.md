Create a changeset for the current changes in @aggc/ui.

$ARGUMENTS

Steps:
1. Run `git diff HEAD` and `git status` to understand what changed.
2. Classify the change:
   - `patch` — bug fix, accessibility fix, internal refactor with no API change
   - `minor` — new component, new prop on existing component, new style export
   - `major` — breaking change to component API, removed export, changed prop types incompatibly
3. Write a clear one-sentence summary of the change from a consumer's perspective (what changed and why it matters to them, not implementation details).
4. Run: `npx changeset`
   - Select `@aggc/ui`
   - Choose the bump type from step 2
   - Enter the summary from step 3
5. Confirm the generated file in `.changeset/` looks correct.
6. Remind: commit the changeset file alongside the code changes. Do NOT run `npm run version-packages` manually — CI handles that.
