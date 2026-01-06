---
sidebar_position: 1
slug: /
hide_edit_button: true
---
# Markdown
## What is Markdown?

**Markdown** is a **lightweight markup language** used to write content in **plain text**, which can be converted into **HTML / websites / PDFs**.

👉 You write simple text
👉 Tools convert it into styled web pages

Example: 
```md
# Hello World
This is **bold** text.
```
➡️ Renders as:

import IosBrowserFrame from '@site/src/components/IOSBrowserFrame';

<IosBrowserFrame url="https://docs.ingenero.com">
  # Hello World
  This is **bold** text.
</IosBrowserFrame>

---

## What is an `.md` file?

An **`.md` file** is a **Markdown file** — a plain text file that uses simple symbols to format content like:

- Headings
- Lists
- Links
- Images
- Code blocks
- Tables

👉 Widely used in **documentation**, **GitHub READMEs**, **Docusaurus**, **blogs**, and **notes**.

---

## Markdown playground

You can test Markdown code using any online Markdown playground. You can use the playgrounds listed below to test the code from this document.

- [https://markdownlivepreview.com](https://markdownlivepreview.com/)

---


## Basic Rules of Markdown
### ✔ Rule 1: Plain Text

Markdown is just text

No HTML required (HTML is optional)

### ✔ Rule 2: Symbols define formatting

\# → headings

* or - → lists

\``` → code blocks

### ✔ Rule 3: One line = one block

New line usually means new paragraph

### ✔ Rule 4: Spaces matter

A **space** after symbols is required.

✅ # Heading

❌ #Heading

---

## Headings Rules (H1–H6)

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```
📌 Rule

Only **one** # **H1** per page is recommended (especially in docs)

---

## Paragraphs & Line Breaks

```md
This is a paragraph.

This is another paragraph.
```

Line break (same paragraph):

```md
This is first line.  
This is second line.
```

(two spaces at the end 👆)

---

## Bold, Italic, Strikethrough

\*\***Bold text**\*\*

\**Italic text*\*

\*\*\****Bold & Italic***\*\*\*

\~\~~~Strikethrough~~\~\~

---

## Lists Rules

**Unordered List**

```md
- Item 1
- Item 2
  - Sub Item
  - Sub Item
```

**Ordered List**

```md
1. First
2. Second
3. Third
```

### Nested List

```md
- Item
  - Nested Item
  - Nested Item
```

📌 **Rule**

- Indentation (**2 spaces**) is important for nested lists

---

## Links

```md
[Google](https://www.google.com)
```

### Internal Link (same doc)

```md
[Go to Heading](#heading-2)
```

---

## Images

```md
![Alt text](./images/logo.png)
```

```md
![Alt text](./images/logo.png "Logo Image")
```

---

## Code Blocks (VERY IMPORTANT)

### Inline Code

```md
Use `npm install` to install packages.
```

### Multi-line Code Block

```js
```js
function hello() {
  console.log("Hello Markdown");
}
```

Note :- In above example we also need closing code blocks **```**

---

## Blockquote

```md
> This is a blockquote
```

Renders as:

> This is a blockquote

### Multi-line Blockquote

Each line must start with >:

```md
> This is line one
> This is line two
> This is line three
```

Renders as:

> This is line one
> This is line two
> This is line three

### Nested Blockquotes

Use multiple `>` symbols:

```md
> Level 1
>> Level 2
>>> Level 3
```

> Level 1
>> Level 2
>>> Level 3

---

## Tables

```md
| Name | Role | Experience |
|-----|------|------------|
| Viki | Dev | 5 Years |
| Ram  | QA  | 3 Years |
```

Renders as:
| Name | Role | Experience |
|-----|------|------------|
| Viki | Dev | 6 Years |
| Ram  | QA  | 3 Years |

---

## Horizontal Line

```md
---
```

or

```md
***
```

***

## Checkboxes (Task Lists)

```md
- [x] Install Node.js
- [ ] Learn Markdown
- [ ] Learn Docusaurus
```

---

## Escaping Markdown Characters

```md
\# This is not a heading
\* This is not italic
```

---

## File Naming Rules

✅ Good:

```md
getting-started.md
react-hooks.md
api-authentication.md
```

❌ Avoid:

```md
Getting Started!!.md
React Hooks (Final).md
```

## Markdown vs Docusaurus Markdown (Preview)

```md
---
id: intro
title: Introduction
sidebar_position: 1
---

```

📌 **Frontmatter** (---) is NOT standard Markdown, but **Docusaurus-specific**

## Best Practices

✔ One topic per file

✔ Clear headings

✔ Use code blocks instead of screenshots

✔ Avoid very long files

✔ Prefer .md unless React components needed (.mdx)

## When to use .md vs .mdx

| Use case           | File  |
|-------------------|-------|
| Simple docs        | `.md` |
| React components   | `.mdx`|
| Static content     | `.md` |
| Interactive docs   | `.mdx`|
