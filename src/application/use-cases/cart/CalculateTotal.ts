import type { CartItem } from "../../../domain/entities/CartItem";

export class CalculateTotal {
  execute(cart: CartItem[]): number {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  }
}
