
import { Header } from "../components/Header";  
import { ProductFilters } from "../components/ProductFilters"; 
import { ProductList } from "../components/ProductList";
import { Cart } from "../components/Cart"; 

import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";

export function HomePage() {
  const {
    products,
    categories,
    loading,
    error,
    filters,
    setFilters
  } = useProducts();

  const {
    cart,
    total,
    totalItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity
  } = useCart();

  return (
    <div className="home-page">
      <Header totalItems={totalItems} />

      <main className="main-content">
        <section className="catalog">
          <h2>Products</h2>

          <ProductFilters
            filters={filters}
            categories={categories}
            onFiltersChange={setFilters}
          />

          {loading && (
            <p>Loading products...</p>
          )}

          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}

          {!loading && !error && (
            <ProductList
              products={products}
              onAddToCart={handleAddToCart}
            />
          )}
        </section>

        <Cart
          cart={cart}
          total={total}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </main>
    </div>
  );
}
