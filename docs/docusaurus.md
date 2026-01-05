# Docusarus Guidence

## Prerequisites (Must Know Before Installing)

🔹 Required

| Tool | Why it’s needed |
|------|----------------|
| **Node.js (LTS)** | Docusaurus runs on Node |
| **npm / yarn / pnpm** | Package manager |

---

## Official Way to Install Docusaurus (Best Practice)

✅ Create a new docs site

```bash

npx create-docusaurus@latest my-company-docs classic

```

You’ll be prompted:

```text

✔ TypeScript? → Yes (recommended)
✔ Install dependencies → Yes

```

📌 Why Classic template?

- Docs

- Blog

- Versioning

- Search-ready

- Stable for enterprise use

---

## Folder Structure (IMPORTANT for Teams)

After install:

```text

my-company-docs/
├── docs/               # All documentation lives here
├── blog/               # Optional (can disable)
├── src/
│   ├── css/
│   │   └── custom.css  # Theme overrides
│   └── components/     # Reusable React components
├── static/
│   ├── img/            # Images, logos, diagrams
│   └── video/
├── docusaurus.config.ts
├── sidebars.ts
└── package.json

```

> Never put docs outside `/docs`

---

## Start the Local Server

```bash

cd my-company-docs
npm start

```

📍 App runs at:

```arduino

http://localhost:3000

```

Hot reload is enabled.

---

## Important Configuration Files (Must Know)

- `docusaurus.config.ts`

Controls:

- Company name

- Logo

- [Navbar](./docusaurus/navbar.md)

- Footer

- Theme

- [Search](./docusaurus/search.md)

- Base URL

```ts

export default {
  title: 'Company Documentation',
  tagline: 'Internal Engineering Docs',
  url: 'https://docs.company.com',
  baseUrl: '/',
};

```

📌 **This is the heart of the project.**

---

## Docs Writing Basics (What Employees Will Do)

**Create a doc**

```text

docs/
 ├── intro.md
 ├── installation.md

```

Example `installation.md`:

```md

---
title: Installation
sidebar_position: 2
---

## Requirements
- Node.js
- npm

## Steps
```bash
npm install

```

**Disable versioning initially**

```ts

docs: {
  routeBasePath: '/',
}

```

---

## Document Writter Best Practices

✔ Keep docs simple [`.md`](./docusaurus/types.md) first

✔ Add [`.mdx`](./docusaurus/types.md) only when needed

✔ Enforce folder structure

✔ Review docs via PRs

---
