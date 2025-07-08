export interface ImageObjectInput {
  url: string;
  width: number;
  height: number;
  caption?: string;
  name?: string;
  datePublished?: string;
  thumbnailUrl?: string;
}

export function image(input: ImageObjectInput) {
  const j: any = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: input.url,
    width: String(input.width),
    height: String(input.height),
    ...(input.caption && { caption: input.caption }),
    ...(input.name && { name: input.name }),
    ...(input.datePublished && { datePublished: input.datePublished }),
    ...(input.thumbnailUrl && { thumbnailUrl: input.thumbnailUrl }),
  };
  return j;
} 