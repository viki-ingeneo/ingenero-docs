# Search in Docusaurus

## 1. What is Search in Docusaurus?

Search in Docusaurus allows users to **quickly find documentation content** using keywords.  
It indexes:
- Page titles
- Headings
- Content inside markdown files

Search is essential for **large documentation websites**.

---

## 2. Types of Search Supported in Docusaurus

Docusaurus supports **two main search options**:

1. **Local Search (Built-in)**
2. **Algolia DocSearch (Recommended for production)**

---

## 3. Local Search (Built-in Search)

Local search works **without any external service**.

### Advantages
- No setup required
- Works offline
- Easy to use for small docs

### Limitations
- Slower for large documentation
- Limited ranking & relevance
- No analytics

### Enable Local Search

```js

themeConfig: {
  navbar: {
    items: [
      {
        type: 'search',
        position: 'right',
      },
    ],
  },
}

```

## 4. Algolia DocSearch (Recommended)

Algolia DocSearch provides **fast, accurate, production-grade search**.

### Advantages

- Fast and scalable

- Accurate ranking

- Keyboard shortcuts

- Search analytics

- Used by React, Vue, Next.js docs

### Requirements

- Algolia App ID

- API Key

- Index Name

### Configuration Example

```js

themeConfig: {
  algolia: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_SEARCH_API_KEY',
    indexName: 'YOUR_INDEX_NAME',
  },
}

```

## 5. Adding Search to Navbar

Search appears in the navbar only.

```js

{
  type: 'search',
  position: 'right',
}

```

you can refer this at [navbar section](./navbar.md#7-search-bar)

## 6. What Content is Searchable?

Search indexes:

- Page titles

- Headings (#, ##, ###)

- Paragraph text

- Code blocks (partially)

Search does NOT index:

- Hidden pages

- Pages with draft: true

- Pages excluded from sidebar

## 7. Search Behavior Rules

- Case-insensitive

- Matches partial words

- Prioritizes headings

- Sidebar structure improves ranking

## 8. Customizing Search UI

You can customize:

- Placeholder text

- Position in navbar

- Theme (dark/light)

- Search result styling (advanced)

Example:

```js

algolia: {
  placeholder: 'Search docs...',
}

```

## 9. When to Use Which Search?

| Docs Size | Recommended Search |
|-----------|--------------------|
| Small     | Local Search       |
| Medium    | Algolia            |
| Large / Enterprise | Algolia   |


## 10. Common Mistakes

- Forgetting to add search to navbar

- Expecting search on custom pages automatically

- Using local search for very large docs

- Not configuring Algolia indexing properly

