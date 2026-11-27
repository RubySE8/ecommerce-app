
import type {
  CartItem as CartItemEntity
} from "../../domain/entities/CartItem";

import { CartItem } from "./CartItem";

interface CartProps {
  cart: CartItemEntity[];
  total: number;
  onRemove: (productId: number) => void;
  onUpdateQuantity: (
    productId: number,
    quantity: number
  ) => void;
}

export function Cart({
  cart,
  total,
  onRemove,
  onUpdateQuantity
}: CartProps) {
  return (
    <aside className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                onRemove={onRemove}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </aside>
  );
}
