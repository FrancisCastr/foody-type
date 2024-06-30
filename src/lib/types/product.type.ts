export interface IProductContent {
  id: string;
  name: string;
  image: string;
  image_public_id: string;
  tag: string;
  price: number;
  desc: string;
  inventory: number;
  category: string;
  brand: string;
  shippingFee: boolean;
  freeShipping: boolean;
  exclusive: boolean;
  bestOffer: boolean;
  averageRating: number;
  numberOfReviews: number;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  content: IProductContent[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
