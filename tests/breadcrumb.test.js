import { breadcrumb } from '../src/presets/breadcrumb';
describe('breadcrumb', () => {
    it('should generate a breadcrumb list schema from a simple array', () => {
        const items = [
            { name: 'Home', item: 'https://example.com' },
            { name: 'Category', item: 'https://example.com/category' },
            { name: 'Current Page', item: 'https://example.com/category/page' },
        ];
        const expected = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://example.com',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Category',
                    item: 'https://example.com/category',
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Current Page',
                    item: 'https://example.com/category/page',
                },
            ],
        };
        expect(breadcrumb(items)).toEqual(expected);
    });
});
