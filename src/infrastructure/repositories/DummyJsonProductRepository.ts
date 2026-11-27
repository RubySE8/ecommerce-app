import type { Product } from "../../domain/entities/Product";
import type { ProductRepository } from "../../domain/repositories/ProductRepository";
import type { ProductResponseDto } from "../dtos/ProductDto";
import { ProductMapper } from "../mappers/ProductMapper";

export class DummyJsonProductRepository implements ProductRepository {
  private readonly baseUrl = "https://dummyjson.com/products?limit=0";

  async getAll(): Promise<Product[]> {
    const response = await fetch(this.baseUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data: ProductResponseDto = await response.json();
    return data.products.map((dto) => ProductMapper.toDomain(dto));
  }
}
