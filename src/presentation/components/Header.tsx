
interface HeaderProps {
  totalItems: number;
}

export function Header({ totalItems }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-brand">
        <h1>Ecommerce Store</h1>

        <p>Find your favorite products</p>
      </div>

      <div className="header-cart">
        <span aria-hidden="true">🛒</span>

        <span>Cart</span>

        <span className="cart-count">
          {totalItems}
        </span>
      </div>
    </header>
  );
}
