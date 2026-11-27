import type { CartItem } from "../../../domain/entities/CartItem";

export class UpdateQuantity {
  execute(cart: CartItem[], productId: number, quantity: number): CartItem[] {
    if (!Number.isInteger(quantity) || quantity < 1) {
      return cart;
    }

    return cart.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item,
    );
  }
}
