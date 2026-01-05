# Media in Docusaurus

## 1. What is Media in Docusaurus?

Media in Docusaurus refers to **images, GIFs, videos, and other static assets** used inside documentation pages to improve understanding and user experience.

---

## 2. Where to Store Media Files

Docusaurus supports two main locations for media files:

### 2.1 Docs Folder (Doc-specific media)

```bash

docs/
├── intro.md
├── img/
│ └── overview.png

```


Use when media is **used only in docs**.

---

### 2.2 Static Folder (Global media)


```bash

static/
├── img/
├── video/
├── files/

```


Use when media is **shared across the site**.

---

## 3. Images in Docusaurus

### 3.1 Adding Images in Markdown

```md
![Alt text](./img/example.png)

```

### 3.2 Images from Static Folder

```md

![Alt text](/img/example.png)

```

## 4. GIFs

GIFs work the same as images.

```md

![Demo GIF](./img/demo.gif)

```

Best for:

- Feature demos

- UI interactions

- Short animations

## 5. Videos in Docusaurus

Markdown does not support video natively.
Use **HTML inside Markdown**.

### 5.1 Video from Static Folder

```md

<video controls width="600">
  <source src="/video/demo.mp4" type="video/mp4" />
</video>

```

## 6. Embedding YouTube / External Videos

```md

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video"
  frameborder="0"
  allowfullscreen>
</iframe>


```

## 7. Media in MDX Files

MDX allows React components.

```mdx

import VideoPlayer from '../components/VideoPlayer';

<VideoPlayer />

```

## 8. Using Captions and Descriptions

```md

![Architecture Diagram](./img/architecture.png)

*Figure: System Architecture Overview*

```

## 9. Common Mistakes

- Using absolute file system paths

- Storing large videos in docs folder

- Forgetting alt text

- Overusing GIFs