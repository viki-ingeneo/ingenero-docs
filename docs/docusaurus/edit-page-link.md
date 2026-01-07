# Edit Page Link (Docusaurus)

import EditThisPage from '@site/src/theme/EditThisPage';
import IosBrowserFrame from '@site/src/components/IOSBrowserFrame';
import CodeEditorUI from '@site/src/components/CodeEditorUI';

The **EditThisPage** component in Docusaurus displays an “Edit this page” link at the bottom of a documentation page.

## Visual Example:- 

<IosBrowserFrame>
    <div>
        <br />
        <EditThisPage />
    </div>
</IosBrowserFrame>

## What Is `EditThisPage`?

`EditThisPage` is a `theme component` provided by Docusaurus that:

- Reads the configured editUrl

- Automatically generates an edit link for the current document

- Appears near the pagination section at the bottom of the page

## How It Works Internally

Docusaurus automatically:

- Reads the current document path

- Appends it to the configured editUrl

- Renders the **EditThisPage** component


<CodeEditorUI fileName="docusaurus.config.js">
{`themeConfig: {
    docs: {
        editUrl: 'https://github.com/org/repo/edit/main/',
    },
}`}
</CodeEditorUI>

## How to hide [this](#visual-example-) edit button  

### Using Fornt Matter

<CodeEditorUI fileName="some-file.md" withLineCount withCopyButton>
{`---
hide_edit_button: true
---`}
</CodeEditorUI>

To see fornt matter in detailed click [here](./markdown.md#fornt-matter)

## Customizing the Component

To customize text, style, or logic:

```bash
npx docusaurus swizzle @docusaurus/theme-classic EditThisPage

```

> Note:- This command will produced below similar code for customization.

<CodeEditorUI fileName="EditThisPage.js" withLineCount>
{`
export default function EditThisPage({ editUrl }) {
    return (
        <a href={editUrl} className="custom-edit-link">
        ✏️ Edit this page
        </a>
    );
}
`}
</CodeEditorUI>
