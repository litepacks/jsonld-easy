interface FAQItem {
  question: string;
  answer: string;
}
export interface FAQPageInput {
  items: FAQItem[];
}

export function faqPage(input: FAQPageInput) {
  const questions = input.items.map(q => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer
    }
  }));
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions
  };
}