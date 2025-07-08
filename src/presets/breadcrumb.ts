export interface BreadcrumbListItem {
  name: string;
  item: string;
}

export function breadcrumb(items: BreadcrumbListItem[]) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.item,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
} 