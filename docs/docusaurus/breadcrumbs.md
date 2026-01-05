## 1️⃣ What are Breadcrumbs in Docusaurus?

**Breadcrumbs** show the **current page’s location** in the documentation hierarchy.

Example:

```

Docs / Guides / Routing / Nested Routes

```

They help users:

- Understand where they are

- Navigate back to parent sections

- Reduce confusion in large docs

## 2️⃣ How Breadcrumbs Work in Docusaurus

Breadcrumbs are generated **automatically** from:

1. **Sidebar structure** (`sidebars.js`)

2. **Folder hierarchy**

3. **Front matter metadata**

📌 **Important**:
Breadcrumbs depend on the **sidebar**, not just file paths.

## 3️⃣ Where Breadcrumbs Appear

- Only on **Docs pages**

- Displayed **below the navbar**, above content

- Not shown on:

    - Blog pages (by default)

    - Custom React pages (unless added manually)

## 4️⃣ Enable / Disable Breadcrumbs

### Global Control

In `docusaurus.config.js`:

```js

themeConfig: {
  docs: {
    breadcrumbs: true, // default
  },
},

```

```js

Disable globally:

```

### Per Page Control (Front Matter)

```md

---
title: Advanced Routing
hide_breadcrumbs: true
---

```

✔ Useful for landing pages

## 5️⃣ Breadcrumb Structure (How It’s Built)

Given this sidebar:

```js

module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Routing',
          items: [
            'routing/basic',
            'routing/advanced',
          ],
        },
      ],
    },
  ],
};

```

Breadcrumb for `routing/advanced.md`:

```js

Docs / Guides / Routing / Advanced

```

## 6️⃣ Customizing Breadcrumb Labels

### Using Front Matter

```md

---
title: Advanced Routing
sidebar_label: Routing Pro
---

```

Breadcrumb will use `Routing Pro`.

### Category Metadata (_category_.json)

```json

{
  "label": "API Guides",
  "position": 2,
  "collapsible": true
}

```

This label appears in breadcrumbs.


## 7️⃣ Can We Customize Breadcrumb UI?

🔹 Yes

You can swizzle the breadcrumb component:

```bash

npx docusaurus swizzle @docusaurus/theme-classic DocBreadcrumbs

```

You can:

- Change separators (> → /)

- Add icons

- Add home icon

- Modify styling

## 8️⃣ Styling Breadcrumbs (CSS)

```css

.theme-doc-breadcrumbs {
  font-size: 14px;
}

.theme-doc-breadcrumbs a {
  color: var(--ifm-color-primary);
}

```

## 9️⃣ Common Mistakes

- ❌ Expecting breadcrumbs from folder path

- ❌ Forgetting sidebar config

- ❌ Over-customizing breadcrumbs unnecessarily

- ❌ Using breadcrumbs instead of sidebar