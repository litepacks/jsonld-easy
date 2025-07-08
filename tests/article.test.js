import { article } from '../src/presets/article';
describe('article', () => {
    it('should generate a basic article schema', () => {
        const input = {
            headline: 'Test Headline',
            image: 'https://example.com/test.jpg',
            authorName: 'John Doe',
            datePublished: '2023-01-01',
        };
        const expected = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Test Headline',
            image: ['https://example.com/test.jpg'],
            author: {
                '@type': 'Person',
                name: 'John Doe',
            },
            datePublished: '2023-01-01',
        };
        expect(article(input)).toEqual(expected);
    });
    it('should handle optional fields', () => {
        const input = {
            type: 'BlogPosting',
            headline: 'Test Headline',
            image: 'https://example.com/test.jpg',
            authorName: 'John Doe',
            authorUrl: 'https://example.com/author',
            datePublished: '2023-01-01',
            dateModified: '2023-01-02',
            publisherName: 'Test Publisher',
            publisherLogo: 'https://example.com/logo.jpg',
            description: 'Test description.',
            url: 'https://example.com/article',
        };
        const expected = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'Test Headline',
            image: ['https://example.com/test.jpg'],
            author: {
                '@type': 'Person',
                name: 'John Doe',
                url: 'https://example.com/author',
            },
            datePublished: '2023-01-01',
            dateModified: '2023-01-02',
            publisher: {
                '@type': 'Organization',
                name: 'Test Publisher',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://example.com/logo.jpg',
                },
            },
            description: 'Test description.',
            mainEntityOfPage: 'https://example.com/article',
        };
        expect(article(input)).toEqual(expected);
    });
    it('should handle an array of images', () => {
        const input = {
            headline: 'Test Headline',
            image: ['https://example.com/test1.jpg', 'https://example.com/test2.jpg'],
            authorName: 'John Doe',
            datePublished: '2023-01-01',
        };
        const jsonld = article(input);
        expect(jsonld.image).toEqual(['https://example.com/test1.jpg', 'https://example.com/test2.jpg']);
    });
});
