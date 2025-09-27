import React from 'react';
import { useCart } from './CartContext';
import { useLocation } from 'react-router-dom';

const products = [
  {
    id: 7,
    name: "Pedigree Adult Dog Dry Food (Chicken and Vegetables)",
    weight: "1kg",
    price: 232,
    oldPrice: 249,
    discount: "7% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/0a27b202-9f8e-4374-b0cd-b5d013d801f1.png",
    inStock: false, // Out of stock
  },
  {
    id: 8,
    name: "Pedigree Adult Dog Dry Food (Chicken and Vegetables)",
    weight: "2.8kg",
    price: 610,
    oldPrice: 655,
    discount: "7% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/0a27b202-9f8e-4374-b0cd-b5d013d801f1.png",
    inStock: true,
  },
  {
    id: 9,
    name: "Pedigree Puppy Dog Dry Food (Chicken and Milk)",
    weight: "1 kg",
    price: 270,
    oldPrice: 290,
    discount: "7% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5fd12876-6de4-46eb-a53a-e17887b2a6a5.png",
    inStock: true,
  },
  {
    id: 10,
    name: "Drools Adult (Chicken and Vegetables)",
    weight: "3kg",
    price: 605,
    oldPrice: 650,
    discount: "7% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9d4592ce-fcf8-4438-b0c7-4fa7c1a59141.png",
    inStock: true,
  },
  {
    id: 11,
    name: "Pedigree Adult Wet Food (Chicken & Liver)",
    weight: "70g (30pcs)",
    price: 1350,
    oldPrice: 1500,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/7269b332-e28f-4dcc-8fd2-f9de5eb55214.png",
    inStock: false, // Out of stock
  },
  {
    id: 12,
    name: "Pedigree Adult (Chicken and Vegetables)",
    weight: "370 g",
    price: 105,
    oldPrice: 110,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/0a27b202-9f8e-4374-b0cd-b5d013d801f1.png",
    inStock: true,
  },
  // ... (remaining products unchanged, assuming inStock: true for brevity)
  {
    id: 13,
    name: "Pedigree Puppy (Chicken and Milk)",
    weight: "370 g",
    price: 105,
    oldPrice: 110,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5fd12876-6de4-46eb-a53a-e17887b2a6a5.png",
    inStock: true,
  },
  {
    id: 14,
    name: "Drools Puppy (Chicken and Eggs)",
    weight: "5kg",
    price: 950,
    oldPrice: 999,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63acc207-13a7-49cd-8592-1ddebc2a965d.png",
    inStock: true,
  },
  {
    id: 15,
    name: "Pedigree Puppy Wet Food (Chicken Chunks)",
    weight: "70g (30pcs)",
    price: 1080,
    oldPrice: 1200,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f1e3246e-c27a-47d1-9c90-d8b3ead8a218.png",
    inStock: true,
  },
  {
    id: 16,
    name: "Whiskas Adult Dry Cat Food- Ocean Fish Flavour",
    weight: "480g",
    price: 224,
    oldPrice: 235,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/da/cms-assets/cms/product/85b37723-4247-4400-9efd-3ef4f4f648a1.jpg",
    inStock: true,
  },
  {
    id: 17,
    name: "Pedigree Puppy Wet Food (Chicken Chunks)",
    weight: "70 g",
    price: 37,
    oldPrice: 40,
    discount: "7% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/32c9a37c-d670-4cf6-a4bb-c6d82101482d.png",
    inStock: true,
  },
  {
    id: 18,
    name: "Pedigree Adult Wet Food (Chicken & Liver)",
    weight: "70 g",
    price: 47,
    oldPrice: 50,
    discount: "7% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3d3ce5f4-e555-47d1-b193-c56ad228411d.png",
    inStock: true,
  },
  {
    id: 19,
    name: "Whiskas Wet Kitten Food- Chicken in Gravy",
    weight: "80 g (5pcs)",
    price: 235,
    oldPrice: 250,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b49fd384-a0a6-447a-bf2c-3f093f7d8d67.png",
    inStock: true,
  },
  {
    id: 20,
    name: "Whiskas Wet Kitten Food- Tuna in Jelly",
    weight: "80 g (5pcs)",
    price: 235,
    oldPrice: 250,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4cc3596d-233e-4ada-b934-4cb8ee8522be.png",
    inStock: true,
  },
  {
    id: 21,
    name: "Whiskas Adult Dry Cat Food- Chicken Flavour",
    weight: "1.2kg",
    price: 415,
    oldPrice: 450,
    discount: "8% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b945f4df-7a96-4880-a3ba-6640d02b8931.png",
    inStock: true,
  },
  {
    id: 22,
    name: "Whiskas Adult Dry Cat Food- Tuna Flavour",
    weight: "3kg",
    price: 1120,
    oldPrice: 1030,
    discount: "8% OFF",
    image: "https://cdn.grofers.com/da/cms-assets/cms/product_videos_thumbnails/570e2fbd-7d05-48ab-8e96-14e6c94f5197.jpg",
    inStock: true,
  },
  {
    id: 23,
    name: "Whiskas Wet Kitten Food- Chicken in Gravy",
    weight: "80 g",
    price: 47,
    oldPrice: 50,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/96ad42aa-e5b8-42c2-87ad-a4fb10b1fe9f.png",
    inStock: true,
  },
  {
    id: 24,
    name: "Whiskas Wet Kitten Food- Tuna in Jelly",
    weight: "80 g",
    price: 47,
    oldPrice: 50,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66d4a9c5-cf2a-49e5-a99f-cbf4b5e83076.png",
    inStock: true,
  },
  {
    id: 25,
    name: "Drools Adult (Chicken and Egg)",
    weight: "3kg",
    price: 605,
    oldPrice: 650,
    discount: "7% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9d4592ce-fcf8-4438-b0c7-4fa7c1a59141.png",
    inStock: true,
  },
  {
    id: 26,
    name: "Drools Adult (Meat and Rice)",
    weight: "3kg",
    price: 605,
    oldPrice: 650,
    discount: "7% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9d4592ce-fcf8-4438-b0c7-4fa7c1a59141.png",
    inStock: true,
  },
  {
    id: 27,
    name: "Drools Adult (Chicken and Egg)",
    weight: "1kg",
    price: 240,
    oldPrice: 260,
    discount: "7% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9d4592ce-fcf8-4438-b0c7-4fa7c1a59141.png",
    inStock: true,
  },
  {
    id: 28,
    name: "Whiskas Adult Dry Cat Food- Chicken Flavour",
    weight: "3kg",
    price: 1120,
    oldPrice: 1030,
    discount: "8% OFF",
    image: "https://cdn.grofers.com/da/cms-assets/cms/product_videos_thumbnails/f04bd8f4-31fd-41b2-9961-3bb88b0f32c6.jpg",
    inStock: false,
  },
];

// Split query into individual words for partial matching
const getSearchTerms = (query) => {
  return query.toLowerCase().trim().split(/\s+/);
};

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const qty = cart[product.id] || 0;
  const fallbackImage = "https://via.placeholder.com/150?text=No+Image";

  // Dynamic styles based on screen width
  const isSmallScreen = window.innerWidth < 480;
  const isTablet = window.innerWidth >= 480 && window.innerWidth < 768;

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: isSmallScreen ? '10px' : isTablet ? '12px' : '15px',
    background: '#fff',
    textAlign: 'center',
    position: 'relative',
    transition: 'box-shadow 0.3s ease',
    width: '100%',
    boxSizing: 'border-box',
  };

  const imageStyle = {
    height: isSmallScreen ? '120px' : isTablet ? '140px' : '150px',
    width: '100%',
    objectFit: 'contain',
    marginBottom: isSmallScreen ? '8px' : '10px',
  };

  const nameStyle = {
    fontSize: isSmallScreen ? '12px' : isTablet ? '13px' : '14px',
    fontWeight: '600',
    color: '#333',
    margin: '5px 0',
  };

  const weightStyle = {
    fontSize: isSmallScreen ? '11px' : isTablet ? '11px' : '12px',
    color: '#777',
    margin: '5px 0',
  };

  const priceContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    margin: '8px 0',
    alignItems: 'center',
  };

  const priceStyle = {
    fontSize: isSmallScreen ? '14px' : isTablet ? '15px' : '16px',
    fontWeight: 'bold',
    color: '#000',
  };

  const oldPriceStyle = {
    fontSize: isSmallScreen ? '12px' : isTablet ? '13px' : '14px',
    color: '#888',
    textDecoration: 'line-through',
  };

  const discountStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: '#007bff',
    color: 'white',
    fontSize: isSmallScreen ? '10px' : '12px',
    padding: isSmallScreen ? '2px 4px' : '2px 6px',
    borderRadius: '6px',
  };

  const outOfStockStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#dc3545',
    color: 'white',
    fontSize: isSmallScreen ? '10px' : '12px',
    padding: isSmallScreen ? '2px 4px' : '2px 6px',
    borderRadius: '6px',
  };

  const addButtonStyle = {
    background: product.inStock ? '#28a745' : '#6c757d',
    color: 'white',
    border: 'none',
    padding: isSmallScreen ? '5px 10px' : isTablet ? '6px 12px' : '6px 14px',
    borderRadius: '6px',
    cursor: product.inStock ? 'pointer' : 'not-allowed',
    transition: 'background 0.2s',
    fontSize: isSmallScreen ? '12px' : isTablet ? '13px' : '14px',
    minWidth: isSmallScreen ? '60px' : '70px',
  };

  const quantityControlsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: isSmallScreen ? '6px' : '8px',
  };

  const quantityButtonStyle = {
    background: product.inStock ? '#28a745' : '#6c757d',
    color: 'white',
    border: 'none',
    width: isSmallScreen ? '24px' : isTablet ? '26px' : '28px',
    height: isSmallScreen ? '24px' : isTablet ? '26px' : '28px',
    borderRadius: '50%',
    cursor: product.inStock ? 'pointer' : 'not-allowed',
    fontSize: isSmallScreen ? '16px' : isTablet ? '16px' : '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
  };

  const quantityStyle = {
    fontSize: isSmallScreen ? '12px' : isTablet ? '13px' : '14px',
    fontWeight: 'bold',
    minWidth: '20px',
    textAlign: 'center',
  };

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product.id);
    } else {
      alert('This product is out of stock and cannot be added to the cart.');
    }
  };

  const handleRemoveFromCart = () => {
    if (qty > 0 && product.inStock) {
      removeFromCart(product.id);
    }
  };

  return (
    <div
      style={cardStyle}
      onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'}
      onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
    >
      {product.discount && (
        <span style={discountStyle}>{product.discount}</span>
      )}
      {!product.inStock && (
        <span style={outOfStockStyle}>Out of Stock</span>
      )}
      <img
        src={product.image || fallbackImage}
        alt={product.name}
        style={imageStyle}
      />
      <h2 style={nameStyle}>{product.name}</h2>
      <p style={weightStyle}>{product.weight}</p>
      <div style={priceContainerStyle}>
        <span style={priceStyle}>₹{product.price}</span>
        {product.oldPrice && (
          <span style={oldPriceStyle}>₹{product.oldPrice}</span>
        )}
      </div>
      {qty === 0 ? (
        <button
          onClick={handleAddToCart}
          style={addButtonStyle}
          disabled={!product.inStock}
          onMouseOver={(e) => product.inStock && (e.target.style.background = '#218838')}
          onMouseOut={(e) => product.inStock && (e.target.style.background = '#28a745')}
        >
          ADD
        </button>
      ) : (
        <div style={quantityControlsStyle}>
          <button
            onClick={handleRemoveFromCart}
            style={quantityButtonStyle}
            disabled={!product.inStock}
            onMouseOver={(e) => product.inStock && (e.target.style.background = '#218838')}
            onMouseOut={(e) => product.inStock && (e.target.style.background = '#28a745')}
          >
            -
          </button>
          <span style={quantityStyle}>{qty}</span>
          <button
            onClick={handleAddToCart}
            style={quantityButtonStyle}
            disabled={!product.inStock}
            onMouseOver={(e) => product.inStock && (e.target.style.background = '#218838')}
            onMouseOut={(e) => product.inStock && (e.target.style.background = '#28a745')}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

const PetCare = () => {
  const isSmallScreen = window.innerWidth < 480;
  const isTablet = window.innerWidth >= 480 && window.innerWidth < 768;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search')?.toLowerCase() || '';

  // Filter products based on search query
  const filteredProducts = searchQuery
    ? products.filter((product) => {
        const searchTerms = getSearchTerms(searchQuery);
        const productName = product.name.toLowerCase();
        return searchTerms.some((term) => productName.includes(term));
      })
    : products;

  const containerStyle = {
    padding: isSmallScreen ? '12px' : isTablet ? '16px' : '20px',
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isSmallScreen
      ? 'repeat(auto-fill, minmax(140px, 1fr))'
      : isTablet
      ? 'repeat(auto-fill, minmax(160px, 1fr))'
      : 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: isSmallScreen ? '12px' : isTablet ? '16px' : '20px',
  };

  return (
    <div style={containerStyle}>
      {searchQuery && filteredProducts.length === 0 ? (
        <p>No products found for "{searchQuery}".</p>
      ) : (
        <div style={gridStyle}>
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PetCare;