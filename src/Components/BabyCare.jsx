// import React from 'react';
// import { useCart } from './CartContext';
// import { useLocation } from 'react-router-dom';

// const products = [
//   {
//     id: 31,
//     name: "Pampers Diapers",
//     weight: "10 units",
//     price: 694,
//     oldPrice: 730,
//     discount: "5% OFF",
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/3e44ce9c-ce6a-409f-af15-aaf6dc96508e.png",
//     inStock: false,
//   },
//   {
//     id: 25,
//     name: "Pampers Diapers",
//     weight: "10 units",
//     price: 694,
//     oldPrice: 730,
//     discount: "5% OFF",
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/3e44ce9c-ce6a-409f-af15-aaf6dc96508e.png",
//   },
//   {
//     id: 26,
//     name: "Nestlé Baby Milk",
//     weight: "400 g",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/52f8ea87-0506-47d1-9c67-7dd7c08df646.png",
//   },
//   {
//     id: 27,
//     name: "Himalaya Baby Powder",
//     weight: "200 g",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/11691d7d-e6fb-4c89-bd0c-be2f74e76feb.png",
//   },
//   {
//     id: 28,
//     name: "Johnson's Baby Shampoo",
//     weight: "200 ml",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8455c6fe-510c-4b21-803a-14305d535ff0.png",
//   },
//   {
//     id: 29,
//     name: "Baby Wipes",
//     weight: "80 units",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cf812ba3-5d1d-4320-8170-1f1502d4db65.png",
//   },
//   {
//     id: 30,
//     name: "Cerelac Baby Cereal",
//     weight: "300 g",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2f322fe4-19d9-40de-816c-435352963d23.png",
//   },
//   {
//     id: 31,
//     name: "Baby Lotion",
//     weight: "200 ml",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/6e0d9082-16ac-4825-8727-648597e187fc.jpg?dpr_multiplier=3.00",
//   },
//   {
//     id: 32,
//     name: "Baby Oil",
//     weight: "200 ml",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3f2dfe46-8bce-4026-ba56-d07f18886460.png",
//   },
//   {
//     id: 33,
//     name: "MamyPoko Pants",
//     weight: "12 units",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d9ff9270-eede-4c2d-8064-bb94ab6bd062.png",
//   },
//   {
//     id: 34,
//     name: "Baby Soap",
//     weight: "100 g",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/56aaaa66-3592-4f99-a533-251f7f227fc7.png",
//   },
//   {
//     id: 35,
//     name: "Baby Cream",
//     weight: "50 g",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d5a61191-fa0e-4ec6-9cab-b5f8d6c183ec.png",
//   },
//   {
//     id: 36,
//     name: "Baby Bottle",
//     weight: "250 ml",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d5a61191-fa0e-4ec6-9cab-b5f8d6c183ec.png",
//   },
//   {
//     id: 37,
//     name: "Baby Bib",
//     weight: "1 unit",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e3bbfc78-fd1f-4431-81aa-2aff005e2187.png",
//   },
//   {
//     id: 38,
//     name: "Baby Rash Cream",
//     weight: "50 g",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4cc3596d-233e-4ada-b934-4cb8ee8522be.png",
//   },
//   {
//     id: 39,
//     name: "Baby Pacifier",
//     weight: "1 unit",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: null,
//   },
//   {
//     id: 40,
//     name: "Baby Blanket",
//     weight: "1 unit",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: null,
//   },
//   {
//     id: 41,
//     name: "Baby Wash",
//     weight: "200 ml",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: null,
//   },
//   {
//     id: 42,
//     name: "Baby Food",
//     weight: "300 g",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image: null,
//   },
// ];

// const ProductCard = ({ product }) => {
//   const { cart, addToCart, removeFromCart } = useCart();
//   const qty = cart[product.id] || 0;
//   const fallbackImage = "https://via.placeholder.com/150?text=No+Image";

//   // Dynamic styles based on screen width
//   const isSmallScreen = window.innerWidth < 480;
//   const isTablet = window.innerWidth >= 480 && window.innerWidth < 768;
//   const isDesktop = window.innerWidth >= 768;

//   const cardStyle = {
//     border: '1px solid #ddd',
//     borderRadius: '12px',
//     padding: isSmallScreen ? '10px' : isTablet ? '12px' : '15px',
//     background: '#fff',
//     textAlign: 'center',
//     position: 'relative',
//     transition: 'box-shadow 0.3s ease',
//     width: '100%',
//     boxSizing: 'border-box',
//   };

//   const imageStyle = {
//     height: isSmallScreen ? '120px' : isTablet ? '140px' : '150px',
//     width: '100%',
//     objectFit: 'contain',
//     marginBottom: isSmallScreen ? '8px' : '10px',
//   };

//   const nameStyle = {
//     fontSize: isSmallScreen ? '12px' : isTablet ? '13px' : '14px',
//     fontWeight: '600',
//     color: '#333',
//     margin: '5px 0',
//   };

//   const weightStyle = {
//     fontSize: isSmallScreen ? '11px' : isTablet ? '11px' : '12px',
//     color: '#777',
//     margin: '5px 0',
//   };

//   const priceContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '8px',
//     margin: '8px 0',
//     alignItems: 'center',
//   };

//   const priceStyle = {
//     fontSize: isSmallScreen ? '14px' : isTablet ? '15px' : '16px',
//     fontWeight: 'bold',
//     color: '#000',
//   };

//   const oldPriceStyle = {
//     fontSize: isSmallScreen ? '12px' : isTablet ? '13px' : '14px',
//     color: '#888',
//     textDecoration: 'line-through',
//   };

//   const discountStyle = {
//     position: 'absolute',
//     top: '10px',
//     left: '10px',
//     background: '#007bff',
//     color: 'white',
//     fontSize: isSmallScreen ? '10px' : '12px',
//     padding: isSmallScreen ? '2px 4px' : '2px 6px',
//     borderRadius: '6px',
//   };

//   const addButtonStyle = {
//     background: '#28a745',
//     color: 'white',
//     border: 'none',
//     padding: isSmallScreen ? '5px 10px' : isTablet ? '6px 12px' : '6px 14px',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'background 0.2s',
//     fontSize: isSmallScreen ? '12px' : isTablet ? '13px' : '14px',
//     minWidth: isSmallScreen ? '60px' : '70px',
//   };

//   const quantityControlsStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: isSmallScreen ? '6px' : '8px',
//   };

//   const quantityButtonStyle = {
//     background: '#28a745',
//     color: 'white',
//     border: 'none',
//     width: isSmallScreen ? '24px' : isTablet ? '26px' : '28px',
//     height: isSmallScreen ? '24px' : isTablet ? '26px' : '28px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     fontSize: isSmallScreen ? '16px' : isTablet ? '16px' : '18px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'background 0.2s',
//   };

//   const quantityStyle = {
//     fontSize: isSmallScreen ? '12px' : isTablet ? '13px' : '14px',
//     fontWeight: 'bold',
//     minWidth: '20px',
//     textAlign: 'center',
//   };

//   const handleAddToCart = () => {
//     addToCart(product.id);
//   };

//   const handleRemoveFromCart = () => {
//     if (qty > 0) {
//       removeFromCart(product.id);
//     }
//   };

//   return (
//     <div
//       style={cardStyle}
//       onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'}
//       onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
//     >
//       {product.discount && (
//         <span style={discountStyle}>{product.discount}</span>
//       )}
//       <img
//         src={product.image || fallbackImage}
//         alt={product.name}
//         style={imageStyle}
//       />
//       <h2 style={nameStyle}>{product.name}</h2>
//       <p style={weightStyle}>{product.weight}</p>
//       <div style={priceContainerStyle}>
//         <span style={priceStyle}>₹{product.price}</span>
//         {product.oldPrice && (
//           <span style={oldPriceStyle}>₹{product.oldPrice}</span>
//         )}
//       </div>
//       {qty === 0 ? (
//         <button
//           onClick={handleAddToCart}
//           style={addButtonStyle}
//           onMouseOver={(e) => e.target.style.background = '#218838'}
//           onMouseOut={(e) => e.target.style.background = '#28a745'}
//         >
//           ADD
//         </button>
//       ) : (
//         <div style={quantityControlsStyle}>
//           <button
//             onClick={handleRemoveFromCart}
//             style={quantityButtonStyle}
//             onMouseOver={(e) => e.target.style.background = '#218838'}
//             onMouseOut={(e) => e.target.style.background = '#28a745'}
//           >
//             -
//           </button>
//           <span style={quantityStyle}>{qty}</span>
//           <button
//             onClick={handleAddToCart}
//             style={quantityButtonStyle}
//             onMouseOver={(e) => e.target.style.background = '#218838'}
//             onMouseOut={(e) => e.target.style.background = '#28a745'}
//           >
//             +
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// const BabyCare = () => {
//   const isSmallScreen = window.innerWidth < 480;
//   const isTablet = window.innerWidth >= 480 && window.innerWidth < 768;
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const searchQuery = queryParams.get('search')?.toLowerCase() || '';

//   // Filter products based on search query
//   const filteredProducts = searchQuery
//     ? products.filter(product =>
//         product.name.toLowerCase().includes(searchQuery)
//       )
//     : products;

//   const containerStyle = {
//     padding: isSmallScreen ? '12px' : isTablet ? '16px' : '20px',
//     maxWidth: '1280px',
//     margin: '0 auto',
//   };

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: isSmallScreen
//       ? 'repeat(auto-fill, minmax(140px, 1fr))'
//       : isTablet
//       ? 'repeat(auto-fill, minmax(160px, 1fr))'
//       : 'repeat(auto-fill, minmax(220px, 1fr))',
//     gap: isSmallScreen ? '12px' : isTablet ? '16px' : '20px',
//   };

//   return (
//     <div style={containerStyle}>
//       {searchQuery && filteredProducts.length === 0 ? (
//         <p>No products found for "{searchQuery}".</p>
//       ) : (
//         <div style={gridStyle}>
//           {filteredProducts.map((item) => (
//             <ProductCard key={item.id} product={item} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BabyCare;


import React from 'react';
import { useCart } from './CartContext';
import { useLocation } from 'react-router-dom';

const products = [
  {
    id: 29,
    name: "Mamy Poko Pants (XL)",
    weight: "22 pants",
    price: 320,
    oldPrice: 399,
    discount: "20% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/3e44ce9c-ce6a-409f-af15-aaf6dc96508e.png",
    inStock: true,
  },
  {
    id: 30,
    name: "Mamy Poko Pants (NB)",
    weight: "42 pants",
    price: 320,
    oldPrice: 390,
    discount: "20% OFF",
    image: "https://m.media-amazon.com/images/I/61NkERTWYeL._SY450_.jpg",
    inStock:true,
  },
  {
    id: 31,
    name: "Mamy Poko Pants (L)",
    weight: "28 Pants",
    price: 320,
    oldPrice: 390,
    discount: "20% OFF",
    image: "https://cdn.fcglcdn.com/brainbees/images/products/135x164/18060687a.webp",
    inStock:true,
  },
  {
    id: 32,
     name: "Mamy Poko Pants (XXL)",
    weight: "17 Pants",
    price: 320,
    oldPrice: 390,
    discount: "20% OFF",
    image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19205952a.webp",
    inStock:true,
  },
  {
    id: 33,
    name: "Mamy Poko Pants (S)",
    weight: "38 Pants",
    price: 320,
    oldPrice: 390,
    discount: "20% OFF",
    image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18060685a.webp",
    inStock:true,
  },
  {
    id: 34,
    name: "Mamy Poko Pants (M)",
    weight: "38 Pants",
    price: 320,
    oldPrice: 390,
    discount: "20% OFF",
    image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18060686a.webp",
    inStock:true,
  },
  {
    id: 35,
    name: "Mamy Poko Pants (M)",
    weight: "16 Pants",
    price: 190,
    oldPrice: 210,
    discount: "10% OFF",
    image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18060686a.webp",
    inStock:true,
  },
  {
    id: 36,
    name: "Mamy Poko Pants (XL)",
    weight: "11 Pants",
    price: 190,
    oldPrice: 210,
    discount: "10% OFF",
   image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/3e44ce9c-ce6a-409f-af15-aaf6dc96508e.png",
    inStock:true,
  },
  {
    id: 37,
    name: "Mamy Poko Pants (L)",
    weight: "14 Pants",
    price: 190,
    oldPrice: 210,
    discount: "10% OFF",
      image: "https://cdn.fcglcdn.com/brainbees/images/products/135x164/18060687a.webp",
    inStock:true,
  },
  {
    id: 38,
    name: "Mamy Poko Pants (S)",
    weight: "20 Pants",
    price: 190,
    oldPrice: 210,
    discount: "10% OFF",
    image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18060685a.webp",
    inStock:true,
  },
  {
    id: 39,
    name: "StayFree Secure Cotton Soft Sanitary pads(Regular)",
    weight: "18 units",
    price: 99,
    oldPrice: 105,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9a16dbba-d8d2-4e00-a270-32e2c6b20e56.png",
    inStock: true,
  },
  {
    id: 40,
    name: "Whisper Skin Love Soft (Ultra)",
    weight: "XL+ (6 pads)",
    price: 80,
    oldPrice: 85,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/6e0d9082-16ac-4825-8727-648597e187fc.jpg?dpr_multiplier=3.00",
    inStock:true,
  },
  {
    id: 41,
    name: "Whisper Bindazz Nights (XXXL)",
    weight: "XXXL+ (10 pads)",
    price: 315,
    oldPrice: 350,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/4576bdc5-b8f5-4ff4-951d-e245e8c536ea.png",
    inStock:true,
  },
  {
    id: 42,
    name: "Whisper Choice (XL)",
    weight: "XL (18 pads)",
    price: 114,
    oldPrice: 120,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d9ff9270-eede-4c2d-8064-bb94ab6bd062.png",
    inStock:true,
  },
  {
    id: 43,
   name: "StayFree Secure (XL)",
    weight: "XL (18 pads)",
    price: 118,
    oldPrice: 124,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/b114d676-9bba-44db-8b6d-a0a84ef08fc4.jpg?dpr_multiplier=3.00",
    inStock:true,
  },
  {
    id: 44,
    name: "StayFree Secure (XL)",
    weight: "XL (12 pads)",
    price: 80,
    oldPrice: 84,
    discount: "5% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/8455c6fe-510c-4b21-803a-14305d535ff0.png",
    inStock:true,
  },
  {
   
    id: 45,
    name: "Whisper Bindazz NIghts (XXL+)",
    weight: "XXL+ (5 pads)",
    price: 150,
    oldPrice: null,
    discount: null,
    image: "https://cdn.grofers.com/da/cms-assets/cms/product/9803f479-5596-450f-8f5b-260fc1ee07ca.jpg",
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

const BabyCare = () => {
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

export default BabyCare;