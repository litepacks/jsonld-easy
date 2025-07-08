export interface ArticleInput {
  type?: 'Article' | 'BlogPosting' | 'NewsArticle';
  headline: string;
  image: string | string[];
  authorName: string;
  authorUrl?: string;
  datePublished: string;
  dateModified?: string;
  publisherName?: string;
  publisherLogo?: string;
  description?: string;
  url?: string;
}

export function article(input: ArticleInput) {
  const j: any = {
    "@context": "https://schema.org",
    "@type": input.type ?? "Article",
    headline: input.headline,
    image: Array.isArray(input.image) ? input.image : [input.image],
    author: {
      "@type": "Person",
      name: input.authorName,
      ...(input.authorUrl ? { url: input.authorUrl } : {})
    },
    datePublished: input.datePublished,
    ...(input.dateModified && { dateModified: input.dateModified }),
    ...(input.publisherName && {
      publisher: {
        "@type": "Organization",
        name: input.publisherName,
        ...(input.publisherLogo && { logo: { "@type": "ImageObject", url: input.publisherLogo } })
      }
    }),
    ...(input.description && { description: input.description }),
    ...(input.url && { mainEntityOfPage: input.url })
  };
  return j;
}