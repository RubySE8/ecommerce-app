
import type {
  ProductFilters as Filters,
  SortOrder
} from "../../application/use-cases/products/FilterProducts";

interface ProductFiltersProps {
  filters: Filters;
  categories: string[];
  onFiltersChange: (filters: Filters) => void;
}

export function ProductFilters({
  filters,
  categories,
  onFiltersChange
}: ProductFiltersProps) {
  return (
    <section className="product-filters">
      <input
        type="search"
        placeholder="Search products..."
        aria-label="Search products"
        value={filters.search}
        onChange={(event) =>
          onFiltersChange({
            ...filters,
            search: event.target.value
          })
        }
      />

      <select
        aria-label="Category"
        value={filters.category}
        onChange={(event) =>
          onFiltersChange({
            ...filters,
            category: event.target.value
          })
        }
      >
        <option value="all">All categories</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        aria-label="Sort by price"
        value={filters.sortOrder}
        onChange={(event) =>
          onFiltersChange({
            ...filters,
            sortOrder: event.target.value as SortOrder
          })
        }
      >
        <option value="none">Default order</option>
        <option value="asc">Price: Low to high</option>
        <option value="desc">Price: High to low</option>
      </select>

      <button
        type="button"
        onClick={() =>
          onFiltersChange({
            search: "",
            category: "all",
            sortOrder: "none"
          })
        }
      >
        Clear filters
      </button>
    </section>
  );
}
