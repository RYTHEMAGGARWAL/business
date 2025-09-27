import React from 'react';
import { useCart } from './CartContext';
import { useLocation } from 'react-router-dom';

const products = [
  {
    id: 46,
    name: "Amul Milk (FullCream)",
    weight: "500 ml",
    price: 35,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/628c97e0-5ed4-425d-a667-1d3bfa6f0bde.png",
    inStock:true,
  },
  {
    id: 47,
    name: "Amul Milk (Toned)",
    weight: "500 ml",
    price: 29,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png",
    inStock:true,
  },
  {
    id: 48,
    name: "Amul Cow Milk",
    weight: "500 ml",
    price: 30,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/ae29e828-f5d9-4f8b-89b6-8c6d6919df7b.png",
    inStock:true,
  },
  {
    id: 49,
    name: "MotherDairy Cow Milk",
    weight: "500 ml",
    price: 30,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/60065a08-2486-4f67-b2ae-e03670b2c8f3.png",
    inStock:true,
  },
  {
    id: 50,
    name: "MotherDairy Milk (FullCream)",
    weight: "500 ml",
    price: 35,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/c1d65f38-031a-4028-8bf6-a5fc2f0e288d.png",
      inStock:true,
  },
  {
    id: 51,
    name: "Amul Masti Curd (Dahi)",
    weight: "500 ml",
    price: 35,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/2107cdc3-8d54-41fb-a7ee-89d8573b9f06.jpg?dpr_multiplier=3.00",
      inStock:true,
  },{
    id: 52,
    name: "MotherDairy Curd (Dahi)",
    weight: "500 ml",
    price: 35,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/2b146201-870b-4bb8-aee7-8ef0377cbe2b.png",
      inStock:true,
  },
  {
    id: 53,
    name: "Amul Butter",
    weight: "100 gm",
    price: 62,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png",
      inStock:true,
  },{
  id: 54,
    name: "Amul Butter",
    weight: "500 gm",
    price: 295,
    oldPrice: 305,
    discount: "3% OFF",
    image: "https://tse2.mm.bing.net/th/id/OIP.sRga9Of05-eQKbJLBtGbswHaHa?pid=Api&P=0&h=180",
      inStock:true,
  },{
    id: 55,
   name: "Amul Butter",
    weight: "200 gm",
    price: 128,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/03af3633-5fa5-438f-bece-145ed114d279.png",
     inStock:true,  
  },
  
  {
    id: 56,
    name: "Delicious Butter",
    weight: "100 gm",
    price: 22,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/8a565e7f-22dc-4146-ac66-b099f5110293.jpg?dpr_multiplier=3.00",
      inStock:true,
  },{
  id: 57,
    name: "Delicious Butter",
    weight: "500 gm",
    price: 105,
    oldPrice: null,
    discount: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.NbU9NdF84R9X2FMM-_LMyQHaHa?pid=Api&P=0&h=180",
      inStock:true,
  },{
    id: 58,
   name: "Amul Mozrilla Cheese Diced",
    weight: "200 gm",
    price: 129,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/0bd593b2-6433-4a3e-a71d-8964618c5074.jpg?dpr_multiplier=3.00",
    inStock:true,
  },
  {
    id: 59,
    name: "Amul Cheese Slice",
    weight: "10pcs",
    price: 149,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/a501e65f-194b-4db2-abc9-6b7bb515349c.png",
      inStock:true,
  },{
  id: 60,
    name: "Amul Cheese Cube",
    weight: "1 pack (8pcs)",
    price: 135,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/52377f0e-2ee1-4d3f-a0d6-f34934b71f0f.png",
      inStock:true,
  },{
    id: 61,
   name: "Amul Cheese Slice",
    weight: "5 pcs",
    price: 85,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/a501e65f-194b-4db2-abc9-6b7bb515349c.png",
     inStock:true,
  },
  {
    id: 62,
   name: "Amul Cream",
    weight: "200ml",
    price: 70,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/assets/products/sliding_images/jpeg/740347d8-80b9-40eb-8de4-72b283acb7bc.jpg?dpr_multiplier=3.00",
     inStock:true,
  },{
    id: 63,
   name: "Amul Cream",
    weight: "1 Litre",
    price: 230,
    oldPrice: null,
    discount: null,
    image: "https://m.media-amazon.com/images/I/51pn7p9gnfL.jpg",
     inStock:true,
  },
  {
    id: 64,
    name: "Ananda Paneer",
    weight: "200 g",
    price: 90,
    oldPrice: 95,
    discount: "5% OFF",
    image: "https://tse1.mm.bing.net/th/id/OIP.YlYniI_xVLWB1HuuHKki9gHaEP?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 65,
    name: "Amul Cheese Spread",
    weight: "200 g",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/d8ee0b72-3ada-4218-a1df-10efd53a11b4.png",
     inStock:true,
  },
  {
    id: 66,
    name: "English Oven Brown Bread",
    weight: "450g",
    price: 55,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/0b267148-c2c6-4eae-9ecd-1e9a83569e3a.png",
    inStock:true,
   
  },
  {
    id: 67,
    name: "English Oven Milk Bread",
    weight: "400 g",
    price: 40,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/9f363c60-8b58-4e1a-8c20-9647247b7227.png",
    inStock:true,
  },
  {
    id: 68,
    name: "English Oven White Bread",
    weight: "600 g",
    price: 55,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/04cb3d03-fa41-4229-82d1-67beb4d4cd7d.png",
    inStock:true,
  },
  {
    id: 69,
    name: "English Oven MultiGrain Bread",
    weight: "500 g",
    price: 70,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/ff8853fd-1be8-48cf-893a-3f1616af322c.png",
    inStock:true,
  },
  {
    id:70,
    name: "English Oven Fruit Bun",
    weight: "2 pcs",
    price: 20,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/f4418ade-78c5-4405-9973-02c6c6db3289.png",
    inStock:true,
  },
  {
    id: 71,
    name: "English Oven Sandwich Bread",
    weight: "400 g",
    price: 40,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/fb337791-9328-4c38-a2ee-bc3bb20d204a.png",
    inStock:true,
  },
  {
    id: 72,
    name: "English Oven Burger",
    weight: "6pcs",
    price: 60,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/b232b090-361c-49ee-99a9-617eeac57aef.png",
    inStock:true,
  },
  {
    id: 73,
    name: "English Oven Pav",
    weight: "400 g",
    price: 45,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/951eaf30-2c8f-4032-bca6-51885222aa99.png",
    inStock:true,
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
  const isDesktop = window.innerWidth >= 768;

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

  const addButtonStyle = {
    background: '#28a745',
    color: 'white',
    border: 'none',
    padding: isSmallScreen ? '5px 10px' : isTablet ? '6px 12px' : '6px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
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
    background: '#28a745',
    color: 'white',
    border: 'none',
    width: isSmallScreen ? '24px' : isTablet ? '26px' : '28px',
    height: isSmallScreen ? '24px' : isTablet ? '26px' : '28px',
    borderRadius: '50%',
    cursor: 'pointer',
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
    addToCart(product.id);
  };

  const handleRemoveFromCart = () => {
    if (qty > 0) {
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
          onMouseOver={(e) => e.target.style.background = '#218838'}
          onMouseOut={(e) => e.target.style.background = '#28a745'}
        >
          ADD
        </button>
      ) : (
        <div style={quantityControlsStyle}>
          <button
            onClick={handleRemoveFromCart}
            style={quantityButtonStyle}
            onMouseOver={(e) => e.target.style.background = '#218838'}
            onMouseOut={(e) => e.target.style.background = '#28a745'}
          >
            -
          </button>
          <span style={quantityStyle}>{qty}</span>
          <button
            onClick={handleAddToCart}
            style={quantityButtonStyle}
            onMouseOver={(e) => e.target.style.background = '#218838'}
            onMouseOut={(e) => e.target.style.background = '#28a745'}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

const DairyBreadEggs = () => {
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

export default DairyBreadEggs;