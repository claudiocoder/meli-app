export interface Products {
  autor: Author;
  categories: Array<string>;
  items: Array<Product>;
}

export interface Author {
  name: string;
  lastName: string;
}

export interface Product {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface Price {
  currency: string;
  amount: number;
  decimlas: string;
}

export interface DetailProduct {
  author: Author;
  item: ItemDetail;
}

export interface ItemDetail {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}
