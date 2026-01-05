---
title: Markdown (.md) and MDX (.mdx) Files
sidebar_position: 2
description: Understand the difference between .md and .mdx files in Docusaurus and how to use them effectively.
---

# Markdown (.md) and MDX (.mdx) Files

Docusaurus supports two documentation file types:

- **Markdown (`.md`)**
- **MDX (`.mdx`)**

Understanding when and how to use each is critical for building **scalable, maintainable, and performant documentation** for an organization.

---

## 1. What is a `.md` File?

A `.md` file is a **standard Markdown file** used to write documentation content.

### Use cases
- Text-based documentation
- Guides and tutorials
- API explanations
- Internal company docs
- Architecture explanations

### Supported features
- Headings
- Lists
- Tables
- Code blocks
- Images
- Links
- Admonitions (notes, tips, warnings)

### Example `.md` file
```md
---
title: Installation
---

## Requirements
- Node.js
- npm

```


### Important rule
> `.md` files **DO NOT support React components or JSX**

---

## 2. What is a `.mdx` File?

An `.mdx` file is **Markdown + JSX (React)**.

It allows you to embed **React components directly inside documentation**.

### Use cases
- Tabs
- Interactive examples
- Custom UI components
- Buttons, cards, diagrams
- Advanced documentation UI

### Example `.mdx` file

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API Usage

<Tabs>
    // react child
</Tabs>
```

***

## 3. Key Differences Between .md and .mdx

| Feature | `.md` | `.mdx` |
|--------|-------|--------|
| Standard Markdown | ✅ | ✅ |
| Front Matter | ✅ | ✅ |
| Admonitions (`:::tip`) | ✅ | ✅ |
| React Components | ❌ | ✅ |
| JSX Syntax | ❌ | ✅ |
| Imports | ❌ | ✅ |
| Performance | ⭐ Fast | ⚠ Slightly slower |

---

## 4. Admonitions (Works in BOTH)

Admonitions are **not React components** and work in both `.md` and `.mdx`.

```md

:::
This is a helpful tip
:::

:::
This is a warning
:::

```

---

## 5 Best Practices

✅ **Use** `.md` when:

- Content is text-heavy

- No interactivity is required

- Performance matters

- Large documentation pages

✅ **Use** `.mdx` when:

- UI interaction is required

- Tabs or dynamic views are needed

- You want reusable components

- Creating developer-focused docs

> **Rule**: Default to `.md`, upgrade to `.mdx` only when required.

---

## Summary

- `.md` = Content-first documentation

- `.mdx` = Content + React UI

- Prefer .md for most documentation

- Use .mdx selectively for interactivity

