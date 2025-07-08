import { image } from '../src/presets/image';

describe('image', () => {
  it('should generate a basic image object schema', () => {
    const input = {
      url: 'https://example.com/image.jpg',
      width: 800,
      height: 600,
    };

    const expected = {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: 'https://example.com/image.jpg',
      width: '800',
      height: '600',
    };

    expect(image(input)).toEqual(expected);
  });

  it('should generate an image object schema with optional fields', () => {
    const input = {
      url: 'https://example.com/photo.png',
      width: 1200,
      height: 900,
      caption: 'A beautiful sunset.',
      name: 'Sunset Photo',
      datePublished: '2024-05-21',
      thumbnailUrl: 'https://example.com/photo-thumb.png',
    };

    const expected = {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: 'https://example.com/photo.png',
      width: '1200',
      height: '900',
      caption: 'A beautiful sunset.',
      name: 'Sunset Photo',
      datePublished: '2024-05-21',
      thumbnailUrl: 'https://example.com/photo-thumb.png',
    };

    expect(image(input)).toEqual(expected);
  });
}); 