# Version Management in Docusaurus

## 1. What is Version Management?

Version management in Docusaurus allows you to **maintain multiple versions of documentation** for the same product, such as:

- v1.0
- v2.0
- Latest (current)

Each version has its **own content, sidebar, and routes**, while sharing the same site UI.

---

## 2. Why Versioning is Important

Versioning is useful when:
- Your product evolves over time
- APIs change between releases
- You must support older users
- You want stable docs for released versions

> Versioning ensures users read documentation that matches their product version.

---

## 3. How Docusaurus Handles Versions

Docusaurus uses:
- A **current (unversioned)** docs folder
- A **versioned docs snapshot**

Structure after versioning:

```text
docs/                 → Current (latest) docs
versioned_docs/
 ├── version-1.0/
 └── version-2.0/

versioned_sidebars/
 ├── version-1.0-sidebars.json
 └── version-2.0-sidebars.json

```

## 4. Creating a New Version

Run the version command:

```bash

npx docusaurus docs:version 1.0


```

This will:

- Copy current docs into versioned_docs/version-1.0

- Freeze content for that version

- Create a version-specific sidebar

## 5. Versioned Routes

Each version gets its own URL.

| Version | URL |
|--------|-----|
| Latest | `/docs/intro` |
| v1.0   | `/docs/1.0/intro` |
| v2.0   | `/docs/2.0/intro` |


## 6. Version Dropdown in Navbar

To allow users to switch versions, enable the version dropdown.

```js

navbar: {
  items: [
    {
      type: 'docsVersionDropdown',
      position: 'right',
    },
  ],
}

```

## 7. Managing Sidebars per Version

Each version has its own sidebar file.

```text

versioned_sidebars/version-1.0-sidebars.json

```

This allows:

- Different navigation per version

- Removed or added pages safely

## 8. Editing Versioned Docs

Edit **latest docs** in `docs/`

Edit **older versions** in `versioned_docs/`

Changes to latest docs do NOT affect old versions

## 9. Setting Default Version

In `docusaurus.config.js`:

```js

docs: {
  lastVersion: 'current',
}

```

Options:

`current` → Latest docs

`1.0` → Specific version

## 10. Hiding Old Versions

```js
docs: {
  versions: {
    '1.0': {
      banner: 'unmaintained',
    },
  },
}

```

Banner options:

- unmaintained

- unsupported

- none

## 11. Versioning Best Practices

- Version only when breaking changes occur

- Keep latest docs clean and updated

- Do not frequently edit old versions

- Clearly mark deprecated versions

- Use semantic versioning (1.0, 1.1, 2.0)


## 12. Common Mistakes

- Editing versioned docs instead of latest

- Forgetting to add version dropdown

- Versioning too frequently

- Removing old versions without notice

