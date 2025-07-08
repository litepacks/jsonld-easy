import { website } from '../src/presets/website';
describe('website', () => {
    it('should generate a basic website schema', () => {
        const input = {
            name: 'My Awesome Site',
            url: 'https://example.com',
        };
        const expected = {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'My Awesome Site',
            url: 'https://example.com',
        };
        expect(website(input)).toEqual(expected);
    });
    it('should generate a website schema with a search action', () => {
        const input = {
            name: 'My Awesome Site',
            url: 'https://example.com',
            searchAction: {
                target: 'https://example.com/search?q=',
                queryInput: 'search_term_string',
            },
        };
        const expected = {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'My Awesome Site',
            url: 'https://example.com',
            potentialAction: {
                '@type': 'SearchAction',
                target: 'https://example.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
            },
        };
        expect(website(input)).toEqual(expected);
    });
});
