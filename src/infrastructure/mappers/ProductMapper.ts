import type { Product } from "../../domain/entities/Product";
import type { ProductDto } from "../dtos/ProductDto";


export class ProductMapper{
    static toDomain(dto:ProductDto): Product{
        return{
            id: dto.id,
            title: dto.title,
            description: dto.description,
            category: dto.category,
            price : dto.price,
            rating: dto.rating,
            thumbnail: dto.thumbnail
        };
    }
}