export interface MenuItem {
  id: string;
  name: string;
  category: 'sundaes' | 'scoops' | 'gelato' | 'shakes';
  price: number;
  description: string;
  flavorNotes: string[];
  butterfat: string;
  chillTemp: string;
  popular?: boolean;
  accentColor: string;
  dripFlavor: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedTopping?: string;
  cupOrCone?: 'Artisan Waffle Cone' | 'Frosty Tech Cup' | 'Chocolate Dipped Cone';
}

export interface SweetMoment {
  id: string;
  author: string;
  location: string;
  date: string;
  title: string;
  story: string;
  likes: number;
  tags: string[];
  gradient: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  favoriteFlavor: string;
  comment: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  gradient: string;
}
