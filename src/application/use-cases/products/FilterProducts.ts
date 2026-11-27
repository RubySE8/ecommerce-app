import type { Product } from "../../../domain/entities/Product";

export type SortOrder = "none" | "asc" | "desc";

export interface ProductFilters {
  search: string;
  category: string;
  sortOrder: SortOrder;
}

export class FilterProducts {
  execute(products: Product[], filters: ProductFilters): Product[] {
    const search = filters.search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(search);

      const matchesCategory =
        filters.category === "all" || product.category === filters.category;

      return matchesSearch && matchesCategory;
    });

    if (filters.sortOrder === "asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (filters.sortOrder === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }
}
