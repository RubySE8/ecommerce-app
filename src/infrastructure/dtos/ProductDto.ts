export interface ProductDto {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
}

export interface ProductResponseDto {
  products: ProductDto[];
  total: number;
  skip: number;
  limit: number;
}
