# jsonld-easy

A lightweight, zero-dependency TypeScript library to effortlessly generate JSON-LD structured data for SEO purposes.

## What is it?

`jsonld-easy` simplifies the process of creating `schema.org` compliant JSON-LD markup. Instead of manually crafting complex JSON objects, you can use simple helper functions to generate the structured data your website needs to improve its search engine visibility.

## Installation

```bash
npm install jsonld-easy
# or
yarn add jsonld-easy
# or
pnpm add jsonld-easy
```

## Usage

The library provides preset functions for common schema types.

1.  **Import a preset function** (e.g., `article`) and the `toScriptTag` helper.
2.  **Call the preset function** with your data to generate the JSON-LD object.
3.  **Use `toScriptTag`** to wrap the object in a `<script>` tag, ready to be injected into your HTML.

### Example: Article

```typescript
import { article, toScriptTag } from 'jsonld-easy';

const articleData = {
  headline: 'My Awesome Article',
  image: 'https://example.com/image.jpg',
  authorName: 'John Doe',
  datePublished: '2025-01-20',
  publisherName: 'My Awesome Website',
};

const articleJsonLd = article(articleData);

// To get the raw JSON-LD object:
console.log(articleJsonLd);

// To get the full <script> tag:
const scriptTag = toScriptTag(articleJsonLd);
console.log(scriptTag);
/*
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article",...}</script>
*/
```

### Available Presets

-   `article(input: ArticleInput)`
-   `breadcrumb(items: BreadcrumbListItem[])`
-   `faqPage(input: FAQPageInput)`
-   `image(input: ImageObjectInput)`
-   `localBusiness(input: LocalBusinessInput)`
-   `product(input: ProductInput)`
-   `website(input: WebSiteInput)`

You can inspect the function signatures or the `src/presets` directory for details on the required input for each preset.

## Building from Source

To build the project locally, clone the repository and run:

```bash
npm install
npm run build
```

This will compile the TypeScript source into the `dist` directory.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request. 