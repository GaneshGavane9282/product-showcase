import { useState } from "react";
import Icon from "./Icon";
import "../styles/navbar.scss";

interface NavbarProps {
  favorites: number[];
  onShowFavorites: () => void;
  showingFavorites: boolean;
}

const Navbar = ({
  favorites,
  onShowFavorites,
  showingFavorites,
}: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = ["Electronics", "Fashion", "Home", "Sports", "Books"];

  return (
    <nav className="flipkart-navbar">
      {/* Top Bar */}
      <div className="navbar-top">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-brand">
            <div className="navbar-logo">
              <Icon name="logo" size="lg" />
            </div>
            <div className="navbar-branding">
              <span className="brand-name">ShopHub</span>
              <span className="brand-tagline">Explore Plus</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className={`search-container ${isSearchFocused ? "focused" : ""}`}>
            <Icon name="search" className="search-icon" size="md" />
            <input
              type="text"
              placeholder="Search for products, brands, and more"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery("")}
              >
                <Icon name="close" size="md" />
              </button>
            )}
          </div>

          {/* Right Actions */}
          <div className="navbar-actions">
            <button className="login-btn">
              <Icon name="user" size="lg" />
              <span>Login</span>
            </button>

            <button className="seller-btn">
              <Icon name="briefcase" size="lg" />
              <span>Become a Seller</span>
            </button>

            <button
              className={`cart-btn ${showingFavorites ? "active" : ""}`}
              onClick={onShowFavorites}
              title="Wishlist"
            >
              <Icon 
                name={showingFavorites ? "heart-filled" : "heart"} 
                size="lg" 
              />
              {favorites.length > 0 && (
                <span className="cart-badge">{favorites.length}</span>
              )}
            </button>

            <button className="cart-btn">
              <Icon name="shopping-cart" size="lg" />
              <span className="cart-label">Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Bar */}
      <div className="navbar-bottom">
        <div className="navbar-container">
          <div className="categories-menu">
            {categories.map((category) => (
              <button key={category} className="category-item">
                <Icon name="grid" className="category-icon" size="lg" />
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
