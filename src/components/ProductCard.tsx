import { memo } from 'react';
import Icon from './Icon';
import '../styles/product.scss';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const ProductCard = memo(({ product, isFavorite, onToggleFavorite }: ProductCardProps) => {
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilled = i < fullStars || (i === fullStars && hasHalfStar);
      stars.push(
        <Icon
          key={i}
          name={isFilled ? 'star-filled' : 'star'}
          className="product-card__star"
          size="md"
        />
      );
    }
    return stars;
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN');
  };

  return (
    <article className={`product-card ${isFavorite ? 'product-card--favorite' : ''}`}>
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        <span className="product-card__category">{product.category}</span>
        <button
          className={`product-card__favorite-btn ${isFavorite ? 'product-card__favorite-btn--active' : ''}`}
          onClick={() => onToggleFavorite(product.id)}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Icon
            name={isFavorite ? 'heart-filled' : 'heart'}
            size="lg"
          />
        </button>
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__rating">
          <div className="product-card__stars">{renderStars()}</div>
          <span className="product-card__rating-value">({product.rating})</span>
        </div>
        <p className="product-card__price">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
