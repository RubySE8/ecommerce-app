import { GetProducts } from "../application/use-cases/products/GetProducts";
import { FilterProducts } from "../application/use-cases/products/FilterProducts";

import { AddToCart } from "../application/use-cases/cart/AddToCart";
import { RemoveFromCart } from "../application/use-cases/cart/RemoveFromCart";
import { UpdateQuantity } from "../application/use-cases/cart/UpdateQuantity";
import { CalculateTotal } from "../application/use-cases/cart/CalculateTotal";

import { DummyJsonProductRepository } from "../infrastructure/repositories/DummyJsonProductRepository";

const productRepository = new DummyJsonProductRepository();

export const getProducts = new GetProducts(productRepository);
export const filterProducts = new FilterProducts();

export const addToCart = new AddToCart();
export const removeFromCart = new RemoveFromCart();
export const updateQuantity = new UpdateQuantity();
export const calculateTotal = new CalculateTotal();
