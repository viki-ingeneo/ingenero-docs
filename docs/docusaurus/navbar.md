# Navbar
## 1️⃣ What is Navbar in Docusaurus?
The **Navbar** is the **top navigation bar** of a Docusaurus site.

It is:

Global (visible on all pages)

Configured **only in** docusaurus.config.js

Not written in Markdown

👉 Think of it as **site-level navigation**, not page-level.

## 2️⃣ Where is Navbar Configured?

📍 `docusaurus.config.js`

```js

themeConfig: {
  navbar: {
    title: 'My Docs',
    logo: {
      alt: 'My Logo',
      src: 'img/logo.svg',
    },
    items: [],
  },
}

```

## 3️⃣ Types of Navbar Navigation Items

Docusaurus provides **multiple item types**.

### 1. Docs Link (Sidebar-based navigation)

Links to documentation pages.

```js

{
  type: 'doc',
  docId: 'intro',
  position: 'left',
  label: 'Docs',
}

```

✔ Uses sidebar

✔ Auto-updates when docs change

✔ Best practice

### 2. Sidebar Category Dropdown

Shows doc **categories as a dropdown**.

```js

{
  type: 'docSidebar',
  sidebarId: 'tutorialSidebar',
  position: 'left',
  label: 'Tutorial',
}

```

✔ Great for large docs

✔ Common in React / Vue docs

### 3. Internal Page Link

```js

{
  to: '/docs/intro',
  label: 'Getting Started',
  position: 'left',
}

```

✔ Direct routing

❌ No sidebar awareness

### 4. External Link

```js

{
  href: 'https://github.com/facebook/docusaurus',
  label: 'GitHub',
  position: 'right',
}

```

### 5. Dropdown Menu

```js

{
  label: 'Community',
  position: 'right',
  items: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Discord', href: 'https://discord.com' },
  ],
}

```

### 6. Version Dropdown (for versioned docs)

```js

{
  type: 'docsVersionDropdown',
  position: 'right',
}


```

<a id="navbar-search"></a>

### 7. Search Bar

```js

{
  type: 'search',
  position: 'right',
}


```

### 8. Locale / Language Switcher

```js

{
  type: 'localeDropdown',
  position: 'right',
}


```

## 4️⃣ Can Navbar Be Written in Markdown?

❌ No

Navbar:

- ❌ Not in `.md` or `.mdx`

- ✅ Only in `docusaurus.config.js`

But navbar items can **link to markdown pages**.

## 5️⃣ Custom Navbar (Advanced)

🔹 **Custom React Navbar Item**

```bash

npx docusaurus swizzle @docusaurus/theme-classic NavbarItem

```

You can build:

- Custom buttons

- Login / Logout

- Profile menu

## 6️⃣ Best Practices

✔ Keep navbar items ≤ 6

✔ Use dropdowns for grouping

✔ Prefer type: 'doc' over to:

✔ Put GitHub & Search on right

✔ Use sidebar for deep navigation

## 7️⃣ Common Mistakes

❌ Putting many links in navbar

❌ Linking directly instead of using sidebar

❌ Managing navbar from markdown

❌ Duplicating sidebar logic in navbar

