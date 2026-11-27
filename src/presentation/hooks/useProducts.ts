import { useState, useEffect, useMemo } from "react";

import type { Product } from "../../domain/entities/Product";
import type { ProductFilters } from "../../application/use-cases/products/FilterProducts";

import { getProducts, filterProducts } from "../../composition/dependencies";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<ProductFilters>({
    search: "",
    category: "all",
    sortOrder: "none",
  });

  useEffect(() => {
    let active = true;

    const loadProducts = async () => {
      try {
        const data = await getProducts.execute();

        if (active) {
          setProducts(data);
        }
      } catch {
        if (active) {
          setError("Failed to load products");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      active = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    return filterProducts.execute(products, filters);
  }, [products, filters]);

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))].sort();
  }, [products]);

  return {
    products: filteredProducts,
    categories,
    loading,
    error,
    filters,
    setFilters,
  };
}
