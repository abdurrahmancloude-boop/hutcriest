export type MenuCategory =
  | 'All'
  | 'Popular'
  | 'Starters'
  | 'Classic Pizza'
  | 'Special Pizza'
  | 'Sandwiches'
  | 'Pasta'
  | 'Fried Items'
  | 'Fries & Sides'
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: string;
  numericPrice: number;
  description: string;
  image: string;
  isPopular?: boolean;
  badge?: string;
  spicyLevel?: number;
}

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}
