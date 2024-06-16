export interface Product {
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  description: string;
  brand: string;
  image: string;
  category: string;
}
[];
export interface Item {
  _id: number;
  title: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  brand: string;
  category: string;
}
export interface StoreProduct {
  _id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  brand: string;
  category: string;
  quantity: number;
  oldPrice: number;
}

export interface UserInfo {
  _id: number;
  name: string;
  email: string;
}
