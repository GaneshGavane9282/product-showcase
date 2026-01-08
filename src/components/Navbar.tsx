import { useState } from "react";
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
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="navbar-logo">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="8" fill="currentColor" />
              <text
                x="50%"
                y="62%"
                text-anchor="middle"
                fill="white"
                font-size="22"
                font-weight="700"
                font-family="Arial, sans-serif"
              >
                P
              </text>
            </svg>
          </div>
          <span className="navbar-title">ShopHub</span>
        </div>

        <div className="navbar-actions">
          <button
            className={`navbar-favorites ${showingFavorites ? "active" : ""}`}
            onClick={onShowFavorites}
            title="Liked Products"
          >
            <svg
              viewBox="0 0 24 24"
              fill={showingFavorites ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {favorites.length > 0 && (
              <span className="favorites-badge">{favorites.length}</span>
            )}
            <span className="favorites-label">Liked</span>
          </button>

          <div className="navbar-profile">
            <button className="profile-button">
              <div className="profile-avatar">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="profile-name">Guest User</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
