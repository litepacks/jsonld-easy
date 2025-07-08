import { toScriptTag } from '../src/toScriptTag';
describe('toScriptTag', () => {
    it('should convert a JSON-LD object into a script tag', () => {
        const jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'John Doe',
            url: 'https://example.com',
        };
        const expected = `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"John Doe","url":"https://example.com"}</script>`;
        expect(toScriptTag(jsonLd)).toBe(expected);
    });
    it('should handle an empty object', () => {
        const jsonLd = {};
        const expected = `<script type="application/ld+json">{}</script>`;
        expect(toScriptTag(jsonLd)).toBe(expected);
    });
});
