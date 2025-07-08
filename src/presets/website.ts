export interface WebSiteSearchAction {
  target: string;
  queryInput: string;
}

export interface WebSiteInput {
  name: string;
  url: string;
  searchAction?: WebSiteSearchAction;
}

export function website(input: WebSiteInput) {
  const j: any = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: input.name,
    url: input.url,
    ...(input.searchAction && {
      potentialAction: {
        '@type': 'SearchAction',
        target: `${input.searchAction.target}{${input.searchAction.queryInput}}`,
        'query-input': `required name=${input.searchAction.queryInput}`,
      },
    }),
  };
  return j;
} 