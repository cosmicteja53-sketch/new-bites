export interface MenuItem {
  name: string;
  price: string;
  isVeg?: boolean;
  image?: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  isVeg: boolean;
  items: MenuItem[];
  icon?: string;
  imagePlaceholder?: string;
}

export interface FeaturedItem {
  id: string;
  name: string;
  price: string;
  type: 'veg' | 'non-veg';
  imagePlaceholder: string;
  image?: string;
}

export interface PromoItem {
  title: string;
  subtitle: string;
  imagePlaceholder: string;
  image?: string;
  color: string; // Tailwind class part for bg
  textColor: string;
}