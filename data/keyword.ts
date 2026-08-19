export interface SEOPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  index: boolean;
  follow: boolean;
}
