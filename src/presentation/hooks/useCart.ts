import { useState, useMemo } from "react";

import type { Product } from "../../domain/entities/Product";
import type { CartItem } from "../../domain/entities/CartItem";

import {
  addToCart,
  removeFromCart,
  updateQuantity,
  calculateTotal,
} from "../../composition/dependencies";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((previousCart) => addToCart.execute(previousCart, product));
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((previousCart) => removeFromCart.execute(previousCart, productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCart((previousCart) =>
      updateQuantity.execute(previousCart, productId, quantity),
    );
  };

  const total = useMemo(() => {
    return calculateTotal.execute(cart);
  }, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  return {
    cart,
    total,
    totalItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity,
  };
}
