# Links in Docusaurus

## 1. What are Links in Docusaurus?

Links in Docusaurus are used to **navigate between documentation pages**, **sections**, and **external resources**.  
Docusaurus extends standard Markdown links with **smart routing and validation**.

---

## 2. Types of Links in Docusaurus

Docusaurus supports multiple kinds of links:

1. Internal document links  
2. Section (anchor) links  
3. Relative file links  
4. External links  

---

## 3. Internal Document Links

Use relative paths to link between documentation files.

```md
[Getting Started](./intro.md)
[Routing Guide](../guides/routing.md)

```

**Rules**

- Always use relative paths

- Docusaurus converts .md to routes automatically

- Works across versions

## 4. Linking to a Document by ID

You can link using the document ID.

```md

[Introduction](/docs/intro)

```

Best for:

- Stable links

- Versioned docs

## 5. Section (Anchor) Links

Headings automatically generate IDs.

``` md
## Installation Steps

```

Link to it like this:

```md

[Go to Installation](#installation-steps)

```

Cross-page anchor link:

```md

[Install](./setup.md#installation-steps)

```

## 6. External Links

Use standard Markdown syntax.

```md 

[GitHub](https://github.com)

```

**Behavior**

- Opens in a new tab

- Automatically adds `rel="noopener noreferrer"`

## 7. Linking Images

```md

![Docusaurus Logo](./img/logo.png)

```

Images should be placed inside:

```bash

docs/img/

```

## 8. Linking to Static Assets

```md
[Download PDF](/files/guide.pdf)

```

Assets must be placed inside:

```cp

static/

```

## 9. Common Mistakes

- Using absolute URLs for internal docs

- Linking to `.html` files manually

- Breaking links during versioning

- Using file system paths incorrectly