export interface Product {
  slug: string;
  name: string;
  price: number;
  material: string;
  description: string;
  fabric: string;
  care: string;
  category: string;
  sizes: string[];
  featured?: boolean;
}

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  content: string[];
  pullQuote?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageIndex: number;
}
