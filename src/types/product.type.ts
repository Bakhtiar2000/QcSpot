// Get all products - response structure
export interface IProduct {
  _id: string;
  name: string;
  productCode: string;
  price: number;
  inStock: number;
  storeName: string;
  shippingTime: number;
  weight: number;
  dimensions: string;
  isDeleted: boolean;
  onTrend: boolean;
  totalView: number;
  totalPhoto: number;
  searchField: string[];
  thumbnailImg: string[];
  variants: string[];
  createdAt: string;
  updatedAt: string;
  lastUpdatedAt: number;
  __v: number;
}

// Add A Product - Body Structure
export type ProductForm = {
  name: string;
  price: number;
  weight: number;
  shippingTime: number;
  dimensions: string;
  storeName: "taobao" | "weidian" | "1688";
  productCode: string;
  quantity: number;
};

export type ProductVariant = {
  key: string;
  value: string;
};

export type ProductImage = {
  file: File;
  preview: string;
};

// Query
export interface ProductQueryParams {
  Storefront?: string;
  MinPrice?: number;
  MaxPrice?: number;
}
