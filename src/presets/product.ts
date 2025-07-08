interface OfferInput {
  price: string;
  priceCurrency: string;
  availability?: string;
  url?: string;
}
interface ReviewInput {
  authorName: string;
  datePublished: string;
  reviewBody: string;
  ratingValue?: number;
}
export interface ProductInput {
  name: string;
  image: string | string[];
  description: string;
  offers: OfferInput;
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
  review?: ReviewInput;
}

export function product(input: ProductInput) {
  const j: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    image: Array.isArray(input.image) ? input.image : [input.image],
    description: input.description,
    offers: {
      "@type": "Offer",
      price: input.offers.price,
      priceCurrency: input.offers.priceCurrency,
      ...(input.offers.availability && { availability: input.offers.availability }),
      ...(input.offers.url && { url: input.offers.url })
    },
    ...(input.aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: input.aggregateRating.ratingValue,
        ratingCount: input.aggregateRating.ratingCount
      }
    }),
    ...(input.review && {
      review: {
        "@type": "Review",
        author: { "@type": "Person", name: input.review.authorName },
        datePublished: input.review.datePublished,
        reviewBody: input.review.reviewBody,
        ...(input.review.ratingValue && {
          reviewRating: {
            "@type": "Rating",
            ratingValue: input.review.ratingValue
          }
        })
      }
    })
  };
  return j;
}