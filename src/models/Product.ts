export interface Size {
  available: boolean;
  size: string;
  sku: string;
}

export interface Product {
  id: number;
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: Size[];
  selectedQuantity?: number;
  selectedSize?: string;
}
