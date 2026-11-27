
import type {
  CartItem as CartItemEntity
} from "../../domain/entities/CartItem";

interface CartItemProps {
  item: CartItemEntity;
  onRemove: (productId: number) => void;
  onUpdateQuantity: (
    productId: number,
    quantity: number
  ) => void;
}

export function CartItem({
  item,
  onRemove,
  onUpdateQuantity
}: CartItemProps) {

  const { product, quantity } = item;

  const subtotal = product.price * quantity;

  return (
    <article className="cart-item">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="cart-item-image"
      />

      <div className="cart-item-info">
        <h3>{product.title}</h3>

        <p>${product.price.toFixed(2)}</p>

        <div className="quantity-controls">
          <button
            type="button"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
            onClick={() =>
              onUpdateQuantity(
                product.id,
                quantity - 1
              )
            }
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() =>
              onUpdateQuantity(
                product.id,
                quantity + 1
              )
            }
          >
            +
          </button>
        </div>

        <p className="cart-item-subtotal">
          Subtotal: ${subtotal.toFixed(2)}
        </p>

        <button
          type="button"
          className="remove-button"
          onClick={() => onRemove(product.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}
