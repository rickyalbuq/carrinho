export interface Item {
  sku: string;
  amount: number;
  product: Product;
}

export interface Product {
  sku: string;
  name: string;
  imageUrl: string;
  availability?: {
    price: number;
  };
  subcategory?: {
    name: string;
    category: {
      name: string;
    };
  };
  brand?: {
    name: string;
  };
  vendor?: {
    name: string;
  };
  skuFeatures?: {
    name: string;
    value: string;
  }[];
}
