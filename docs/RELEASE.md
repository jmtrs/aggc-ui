# Release process

This repo uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing.
The process is fully automated via GitHub Actions once a PR is merged to `main`.

## Day-to-day workflow

### 1. Create a feature branch

```bash
git checkout -b feat/your-change
```

### 2. Make your changes

### 3. Record the change with a changeset

```bash
npm run changeset
```

The CLI will ask:
- Which packages are affected (only `@aggc/ui` here)
- The bump type: `patch` (bug fix), `minor` (new feature, backward-compatible), `major` (breaking change)
- A short description of what changed

This creates a `.changeset/<random-name>.md` file. Commit it alongside your code changes.

### 4. Push and open a PR

```bash
git push -u origin feat/your-change
gh pr create
```

CI will run `typecheck`, `test`, `build`, and visual regression checks.

### 5. Merge the PR

After approval and green CI, merge to `main`.

---

## What happens automatically after merge

The `release.yml` GitHub Action runs on every push to `main` using `changesets/action`:

**If there are pending changesets on `main`:**
The action opens (or updates) a PR titled **"Version Packages"** that:
- Bumps `package.json` version according to the changeset type
- Generates `CHANGELOG.md` entries with GitHub PR links
- Deletes the consumed `.changeset/*.md` files

**When the "Version Packages" PR is merged:**
The action runs `npm run release` which publishes the new version to npm.

```
feature PR merged → "Version Packages" PR created automatically
                  ↓
"Version Packages" PR merged → npm publish runs automatically
```

---

## Required secrets

The `release.yml` workflow needs one secret configured in GitHub repo settings:

| Secret | Value |
|--------|-------|
| `NPM_TOKEN` | An npm Automation token with publish access to `@aggc/ui` |

Set it at: **Settings → Secrets and variables → Actions → New repository secret**

---

## Bump type guide

| What changed | Bump type |
|---|---|
| Bug fix, visual tweak, internal refactor | `patch` |
| New recipe variant, new component, new token, new export | `minor` |
| Removed export, renamed prop, changed token value | `major` |

---

## Manual release (emergency only)

If the GitHub Action fails after a "Version Packages" merge:

```bash
git pull origin main
npm ci
npm run build
npm run release
```

Do not run `npm run version-packages` manually on `main` outside of this emergency scenario.
It is intended to be run only by the GitHub Action.
