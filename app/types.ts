export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface Stats {
  total: number;
  inStock: number;
  lowStock: number;
  outOfStock: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  category?: Category;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode?: string;
    qrCode?: string;
  };
  images: string[];
  thumbnail: string;
}

export interface PrismaProduct {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  category?: Category;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  width?: number;
  height?: number;
  depth?: number;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Review[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  createdAt: Date;
  updatedAt: Date;
  barcode?: string;
  qrCode?: string;
  images: string[];
  thumbnail: string;
}

export interface Review {
  id: number;
  product?: PrismaProduct;
  productId?: number;
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductsResponse {
  products: PrismaProduct[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
