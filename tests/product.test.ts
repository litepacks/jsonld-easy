import { product } from '../src/presets/product';

describe('product', () => {
  it('should generate a basic product schema', () => {
    const input = {
      name: 'Awesome T-Shirt',
      image: 'https://example.com/tshirt.jpg',
      description: 'A really awesome T-Shirt.',
      offers: {
        price: '29.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://example.com/product/awesome-t-shirt',
      },
    };

    const expected = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Awesome T-Shirt',
      image: ['https://example.com/tshirt.jpg'],
      description: 'A really awesome T-Shirt.',
      offers: {
        '@type': 'Offer',
        price: '29.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://example.com/product/awesome-t-shirt',
      },
    };

    expect(product(input)).toEqual(expected);
  });

  it('should generate a product schema with all optional fields', () => {
    const input = {
      name: 'Super Pro Gadget',
      image: ['https://example.com/gadget1.jpg', 'https://example.com/gadget2.jpg'],
      description: 'The best gadget ever.',
      offers: {
        price: '999.00',
        priceCurrency: 'EUR',
      },
      aggregateRating: {
        ratingValue: 4.8,
        ratingCount: 1250,
      },
      review: {
        authorName: 'Jane Doe',
        datePublished: '2024-05-20',
        reviewBody: 'This gadget changed my life!',
        ratingValue: 5,
      },
    };

    const expected = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Super Pro Gadget',
      image: ['https://example.com/gadget1.jpg', 'https://example.com/gadget2.jpg'],
      description: 'The best gadget ever.',
      offers: {
        '@type': 'Offer',
        price: '999.00',
        priceCurrency: 'EUR',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 4.8,
        ratingCount: 1250,
      },
      review: {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jane Doe' },
        datePublished: '2024-05-20',
        reviewBody: 'This gadget changed my life!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
        },
      },
    };

    expect(product(input)).toEqual(expected);
  });
}); 