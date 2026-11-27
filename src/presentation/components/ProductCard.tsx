import type { Product } from "../../domain/entities/Product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
        loading="lazy"
      />

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <h2>{product.title}</h2>

        <p className="product-description">{product.description}</p>

        <p className="product-rating">★ {product.rating.toFixed(1)}</p>

        <p className="product-price">${product.price.toFixed(2)}</p>

        <button
          type="button"
          className="add-to-cart-button"
          onClick={() => onAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}

