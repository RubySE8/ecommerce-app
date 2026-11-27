
import type { CartItem } from "../../../domain/entities/CartItem";
import type { Product } from "../../../domain/entities/Product";

export class AddToCart {
  execute(cart: CartItem[], product: Product): CartItem[] {

    const existingItem = cart.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      return cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...cart, { product, quantity: 1 }];
  }
}
