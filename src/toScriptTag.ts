export function toScriptTag(jsonLd: object): string {
  return `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}