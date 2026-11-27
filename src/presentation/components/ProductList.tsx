
import type { Product } from "../../domain/entities/Product";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductList({
  products,
  onAddToCart
}: ProductListProps) {

  if (products.length === 0) {
    return (
      <p className="empty-products">
        No products found.
      </p>
    );
  }

  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}
