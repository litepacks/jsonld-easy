export interface PostalAddress {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
}

export interface GeoCoordinates {
  latitude: string;
  longitude: string;
}

export interface OpeningHoursSpecification {
  opens: string;
  closes: string;
  dayOfWeek: string | string[];
}

export interface LocalBusinessInput {
  type?: string;
  name: string;
  image: string;
  url: string;
  telephone: string;
  address: PostalAddress;
  geo?: GeoCoordinates;
  openingHoursSpecification?: OpeningHoursSpecification[];
}

export function localBusiness(input: LocalBusinessInput) {
  const j: any = {
    '@context': 'https://schema.org',
    '@type': input.type ?? 'LocalBusiness',
    name: input.name,
    image: input.image,
    url: input.url,
    telephone: input.telephone,
    address: {
      '@type': 'PostalAddress',
      ...input.address,
    },
    ...(input.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        ...input.geo,
      },
    }),
    ...(input.openingHoursSpecification && {
      openingHoursSpecification: input.openingHoursSpecification.map(spec => ({
        '@type': 'OpeningHoursSpecification',
        ...spec,
      })),
    }),
  };
  return j;
} 