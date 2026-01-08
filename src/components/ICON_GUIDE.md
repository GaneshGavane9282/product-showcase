# Icon Component Usage Guide

## Overview
A centralized, reusable Icon component for consistent SVG icon usage across the application.

## Import
```tsx
import Icon from '@/components/Icon';
```

## Available Icons

### Basic Icons
- `logo` - ShopHub logo (P)
- `search` - Search/magnifying glass
- `close` - Close/X icon
- `menu` - Menu/hamburger icon

### Action Icons
- `heart` - Heart outline (for favorites)
- `heart-filled` - Filled heart (active favorites)
- `shopping-cart` - Shopping cart
- `briefcase` - Briefcase (seller icon)
- `user` - User profile icon

### Navigation Icons
- `chevron-left` - Left arrow
- `chevron-right` - Right arrow

### Utility Icons
- `grid` - Grid/category icon
- `star` - Star outline
- `star-filled` - Filled star

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | required | The icon identifier |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the icon |
| `className` | `string` | `''` | Additional CSS classes |
| `filled` | `boolean` | `false` | Whether to fill the icon |
| `viewBox` | `string` | varies | Custom SVG viewBox |

## Size Mapping
- `xs` - 16px
- `sm` - 18px
- `md` - 20px
- `lg` - 24px
- `xl` - 32px

## Usage Examples

### Basic Usage
```tsx
<Icon name="search" size="md" />
```

### With Active State
```tsx
<Icon 
  name={isActive ? 'heart-filled' : 'heart'} 
  size="lg"
/>
```

### With Custom Classes
```tsx
<Icon 
  name="chevron-right" 
  className="my-custom-class"
  size="sm"
/>
```

### In Navigation
```tsx
<button>
  <Icon name="user" size="lg" />
  <span>Login</span>
</button>
```

## Styled Icon Spacing
The Icon component automatically handles sizing and spacing. Each icon is wrapped in a span with inline styles:
- Display: `inline-flex`
- Width & Height: Based on size prop
- Flex Shrink: 0 (prevents scaling)

## Adding New Icons

1. Add the icon name to the `IconName` type in `Icon.tsx`
2. Add the SVG implementation in the `icons` object
3. Use consistent viewBox dimensions (24x24 recommended)

Example:
```tsx
'new-icon': ({ viewBox = '0 0 24 24' }) => (
  <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2">
    {/* SVG path here */}
  </svg>
),
```

## Components Using Icon
- `Navbar.tsx` - Logo, search, user actions, categories
- `ProductCard.tsx` - Heart (favorites), stars (rating)
- `Pagination.tsx` - Navigation arrows
