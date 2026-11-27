import type { CartItem } from "../../../domain/entities/CartItem";

export class RemoveFromCart {
  execute(cart: CartItem[], producId: number): CartItem[] {
    return cart.filter((item) => item.product.id !== producId);
  }
}
