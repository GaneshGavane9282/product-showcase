import { memo } from 'react';

type IconName =
  | 'logo'
  | 'search'
  | 'close'
  | 'heart'
  | 'heart-filled'
  | 'star'
  | 'star-filled'
  | 'user'
  | 'briefcase'
  | 'shopping-cart'
  | 'chevron-left'
  | 'chevron-right'
  | 'grid'
  | 'menu';

interface IconProps {
  name: IconName;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  filled?: boolean;
  viewBox?: string;
}

const iconSizes = {
  xs: '16px',
  sm: '18px',
  md: '20px',
  lg: '24px',
  xl: '32px',
};

const icons: Record<IconName, (props: any) => JSX.Element> = {
  logo: ({ viewBox = '0 0 40 40' }) => (
    <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="currentColor" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="24"
        fontWeight="700"
        fontFamily="Poppins, Arial, sans-serif"
      >
        P
      </text>
    </svg>
  ),

  search: ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),

  close: ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),

  heart: ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),

  'heart-filled': ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="currentColor" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),

  star: ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 10.26 23.77 11.27 17.88 17.14 19.54 25.75 12 21.77 4.46 25.75 6.12 17.14 0.23 11.27 8.91 10.26 12 2" />
    </svg>
  ),

  'star-filled': ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),

  user: ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),

  briefcase: ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="13 2 13 9 20 9" />
    </svg>
  ),

  'shopping-cart': ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),

  'chevron-left': ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),

  'chevron-right': ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),

  grid: ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),

  menu: ({ viewBox = '0 0 24 24' }) => (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
};

const Icon = memo(
  ({ name, className = '', size = 'md', filled = false, viewBox }: IconProps) => {
    const IconComponent = icons[name];
    const sizeValue = iconSizes[size];

    if (!IconComponent) {
      console.warn(`Icon "${name}" not found`);
      return null;
    }

    return (
      <span
        className={`icon icon--${name} ${className}`}
        style={{
          display: 'inline-flex',
          width: sizeValue,
          height: sizeValue,
          flexShrink: 0,
        }}
      >
        <IconComponent viewBox={viewBox} filled={filled} />
      </span>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
