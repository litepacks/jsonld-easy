import { localBusiness } from '../src/presets/localBusiness';
describe('localBusiness', () => {
    it('should generate a complete local business schema', () => {
        const input = {
            type: 'Restaurant',
            name: 'The Awesome Restaurant',
            image: 'https://example.com/photo.jpg',
            url: 'https://example.com',
            telephone: '+123456789',
            address: {
                streetAddress: '123 Example St',
                addressLocality: 'Cityville',
                postalCode: '12345',
                addressCountry: 'US',
            },
            geo: {
                latitude: '37.4220',
                longitude: '-122.0841',
            },
            openingHoursSpecification: [
                {
                    opens: '09:00',
                    closes: '17:00',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                },
                {
                    opens: '10:00',
                    closes: '16:00',
                    dayOfWeek: 'Saturday',
                },
            ],
        };
        const expected = {
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'The Awesome Restaurant',
            image: 'https://example.com/photo.jpg',
            url: 'https://example.com',
            telephone: '+123456789',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Example St',
                addressLocality: 'Cityville',
                postalCode: '12345',
                addressCountry: 'US',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '37.4220',
                longitude: '-122.0841',
            },
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    opens: '09:00',
                    closes: '17:00',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                },
                {
                    '@type': 'OpeningHoursSpecification',
                    opens: '10:00',
                    closes: '16:00',
                    dayOfWeek: 'Saturday',
                },
            ],
        };
        expect(localBusiness(input)).toEqual(expected);
    });
});
