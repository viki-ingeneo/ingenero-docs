# Docusaurus Markdown

This document explains the **core rules and features of Markdown used in Docusaurus**, focusing on what is important for writing maintainable and scalable documentation.

---

## Fornt Matter

Fornt Matter is a **YAML block at the top of a Markdown file** used to define page metadata such as title, sidebar label, routing, and ordering.

**Why to use:**  
Fornt Matter controls how a document appears, is ordered, and is navigated inside Docusaurus without touching configuration files.

### Common use cases
- Set page title and description
- Control sidebar position
- Customize URL paths
- Enable or disable Table of Contents

### Example
```md
---
title: Installation
sidebar_position: 2
description: Steps to install the application
---
```

## Section Rule

For best practices in Docusaurus documentation, every page should be divided into well-structured sections and subsections.
The main content sections must use H2 (##) headings, and their child subsections should be written using H3 (###) headings.

This structure helps Docusaurus automatically organize content section-wise, improves readability, enables better sidebar navigation, and allows features like table of contents (TOC) and breadcrumbs to work effectively.

## File Naming Rules

Docusaurus follows **standard Markdown file naming conventions** to generate clean URLs and predictable routing.

Rules

Use **kebab-case** (lowercase with hyphens)

Avoid spaces and special characters

Keep names meaningful and short

**Examples**

```text
✅ getting-started.md
✅ api-reference.md
❌ Getting Started.md
❌ install@guide.md
```

## Folder Structure Rules

To maintain **clean documentation**, **clear navigation**, and **long-term scalability**, the following folder structure rules and best practices should be followed.

### Rules

- All Markdown files (`.md` / `.mdx`) **must be placed inside the `docs` folder**.
- Each main topic should be placed at the **top level** inside the `docs` folder.
- When a topic becomes large or contains multiple subtopics, **split the content into separate files** instead of keeping everything in a single file.
- Group related documentation using **folders**, not excessively long Markdown files.
- Use **meaningful and consistent file names** that reflect the topic clearly.
- Avoid deep folder nesting; keep the structure **simple and easy to navigate**.
- Prefer `.md` files for content-only documentation and use `.mdx` only when React components are required.

### Best Practices

- Keep one primary concept per file to improve readability and maintenance.
- Maintain a logical order of files to match the learning flow.
- Review and update folder structure when new topics are added.
- Ensure links between documents are updated when files are moved or renamed.
- Follow a consistent naming convention across all documentation files.

> **Note:**  
> Sidebar configuration is managed in the `sidebar.js` file located in the project root.  
> This file is created by default when the Docusaurus CLI initializes the project and should be updated whenever documentation structure changes.


for more details of markdown [click here](../markdown.md)