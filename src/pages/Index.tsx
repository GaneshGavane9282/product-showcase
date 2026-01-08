import { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import '../styles/app.scss';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  rating: number;
}

const PRODUCTS_PER_PAGE = 8;
const FAVORITES_KEY = 'product_favorites';

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (err) {
      console.error('Error loading favorites:', err);
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (err) {
      console.error('Error saving favorites:', err);
    }
  }, [favorites]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Product[]>('/data/products.json');
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    return uniqueCategories.sort();
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Show only favorites if enabled
    if (showFavorites) {
      result = result.filter((p) => favorites.includes(p.id));
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by rating
    if (selectedRating > 0) {
      result = result.filter((p) => p.rating >= selectedRating);
    }

    // Sort by price
    if (sortOrder) {
      result.sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      });
    }

    return result;
  }, [products, selectedCategory, selectedRating, sortOrder, showFavorites, favorites]);

  // Toggle favorites view
  const handleToggleFavoritesView = useCallback(() => {
    setShowFavorites((prev) => !prev);
    setCurrentPage(1);
  }, []);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedRating, sortOrder]);

  // Toggle favorite
  const handleToggleFavorite = useCallback((productId: number) => {
    setFavorites((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  }, []);

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (loading) {
    return (
      <div className="app">
        <Navbar
          favorites={favorites}
          onShowFavorites={handleToggleFavoritesView}
          showingFavorites={showFavorites}
        />
        <main className="main-content">
          <div className="no-products">
            <div className="no-products-icon">⏳</div>
            <h3>Loading products...</h3>
            <p>Please wait while we fetch the latest products for you.</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Navbar
          favorites={favorites}
          onShowFavorites={handleToggleFavoritesView}
          showingFavorites={showFavorites}
        />
        <main className="main-content">
          <div className="no-products">
            <div className="no-products-icon">⚠️</div>
            <h3>Oops! Something went wrong</h3>
            <p>{error}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar
        favorites={favorites}
        onShowFavorites={handleToggleFavoritesView}
        showingFavorites={showFavorites}
      />

      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedRating={selectedRating}
        onRatingChange={setSelectedRating}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        totalProducts={products.length}
        filteredCount={filteredProducts.length}
      />


      <main className="main-content">

        {paginatedProducts.length > 0 ? (
          <section className="products-grid">
            {paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </section>
        ) : (
          <div className="no-products">
            <div className="no-products-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
};

export default Index;
