// /* import React, { createContext, useContext, useState } from 'react';
// import { Search, ShoppingCart, User, MapPin, ChevronDown, X, Clock, Truck, Package, Info } from 'lucide-react';

// // Cart Context
// const CartContext = createContext();

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// // Product data for cart items
// const productData = {
//   1: {
//     id: 1,
//     name: "Nestle Munch Choco Fills Cereal",
//     weight: "100 g",
//     price: 64,
//     image: "🍫"
//   },
//   2: {
//     id: 2,
//     name: "Kellogg's Corn Flakes with Immuno...",
//     weight: "250 g",
//     price: 125,
//     image: "🥣"
//   },
//   3: {
//     id: 3,
//     name: "Kellogg's Double Chocolaty Fills",
//     weight: "250 g",
//     price: 177,
//     image: "🍫"
//   },
//   4: {
//     id: 4,
//     name: "Kellogg's Real Almond Honey Corn...",
//     weight: "1 kg",
//     price: 369,
//     image: "🥣"
//   }
// };

// // Cart Provider Component
// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({});

//   const addToCart = (productId) => {
//     setCart(prevCart => ({
//       ...prevCart,
//       [productId]: (prevCart[productId] || 0) + 1
//     }));
//   };

//   const removeFromCart = (productId) => {
//     setCart(prevCart => {
//       const newCart = { ...prevCart };
//       if (newCart[productId] > 1) {
//         newCart[productId] = newCart[productId] - 1;
//       } else {
//         delete newCart[productId];
//       }
//       return newCart;
//     });
//   };

//   const updateQuantity = (productId, quantity) => {
//     if (quantity <= 0) {
//       setCart(prevCart => {
//         const newCart = { ...prevCart };
//         delete newCart[productId];
//         return newCart;
//       });
//     } else {
//       setCart(prevCart => ({
//         ...prevCart,
//         [productId]: quantity
//       }));
//     }
//   };

//   const getCartItems = () => {
//     return Object.entries(cart).map(([productId, quantity]) => ({
//       ...productData[productId],
//       quantity
//     }));
//   };

//   const getTotalItems = () => {
//     return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
//   };

//   const getCartTotal = () => {
//     return Object.entries(cart).reduce((sum, [productId, quantity]) => {
//       const product = productData[productId];
//       return sum + (product ? product.price * quantity : 0);
//     }, 0);
//   };

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     getCartItems,
//     getTotalItems,
//     getCartTotal
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Navbar Component
// const Navbar = ({ onCartClick }) => {
//   const [searchValue, setSearchValue] = useState('');
//   const { getTotalItems } = useCart();
//   const totalItems = getTotalItems();

//   const headerStyle = {
//     background: 'linear-gradient(135deg, #52488b 0%, #4da91f 100%)',
//     color: 'black',
//     padding: '12px 0',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//     position: 'sticky',
//     top: 0,
//     zIndex: 1000
//   };

//   const containerStyle = {
//     color: '#333',
//     margin: '0 auto',
//     padding: '0 16px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '24px'
//   };

//   return (
//     <div style={headerStyle}>
//       <div style={containerStyle}>
//         {/* Logo Section */}
//         <div style={{ flexShrink: 0, marginLeft: '40px', height: '50px' }}>
//           <span style={{
//             fontSize: '28px',
//             fontWeight: '900',
//             color: 'white',
//             fontFamily: 'Arial, sans-serif',
//             letterSpacing: '-0.5px',
//             textDecoration: 'none'
//           }}>
//             JagatStore
//           </span>
//         </div>

//         {/* Delivery Info Section */}
//         <div style={{
//           flexShrink: 0,
//           marginLeft: '20px',
//           width: '250px'
//         }}>
//           <h3 style={{
//             color: 'white',
//             fontSize: '18px',
//             fontWeight: '600',
//             marginBottom: '4px',
//             fontFamily: 'Arial, sans-serif'
//           }}>
//             Delivery in 40 minutes
//           </h3>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px',
//             cursor: 'pointer',
//             padding: '2px 0',
//             borderRadius: '4px',
//             transition: 'background-color 0.2s ease'
//           }}>
//             <MapPin style={{ color: 'white', flexShrink: 0 }} size={16} />
//             <span style={{
//               color: 'rgba(255, 255, 255, 0.9)',
//               fontSize: '14px',
//               fontWeight: '500',
//               whiteSpace: 'nowrap',
//               overflow: 'hidden',
//               textOverflow: 'ellipsis'
//             }}>
//               F-388 Pratap Vihar, Sec-11, GZB
//             </span>
//             <ChevronDown style={{ color: 'white', flexShrink: 0 }} size={16} />
//           </div>
//         </div>

//         {/* Search Section */}
//         <div style={{ flex: 1, maxWidth: '600px' }}>
//           <div style={{
//             position: 'relative',
//             display: 'flex',
//             alignItems: 'center',
//             background: 'white',
//             borderRadius: '12px',
//             padding: '0 16px',
//             height: '48px',
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//             transition: 'box-shadow 0.2s ease'
//           }}>
//             <Search style={{
//               color: '#666',
//               marginRight: '12px',
//               flexShrink: 0
//             }} size={20} />
//             <input
//               type="text"
//               placeholder='Search "milk"'
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//               style={{
//                 flex: 1,
//                 border: 'none',
//                 outline: 'none',
//                 fontSize: '16px',
//                 color: '#333',
//                 background: 'transparent'
//               }}
//             />
//           </div>
//         </div>

//         {/* Auth and Cart Section */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '16px',
//           flexShrink: 0,
//           marginLeft: '40px',
//           height: '50px',
//           width: '300px'
//         }}>
//           <button style={{
//             background: 'white',
//             color: '#54b226',
//             border: 'none',
//             padding: '10px 20px',
//             marginLeft: '30px',
//             width: '100px',
//             borderRadius: '8px',
//             fontSize: '16px',
//             fontWeight: '600',
//             cursor: 'pointer',
//             transition: 'all 0.2s ease'
//           }}>
//             Login
//           </button>
          
//           <div 
//             onClick={onCartClick}
//             style={{
//               position: 'relative',
//               background: 'rgba(255, 255, 255, 0.2)',
//               padding: '8px',
//               borderRadius: '8px',
//               marginLeft: '50px',
//               width: '80px',
//               cursor: 'pointer',
//               transition: 'background-color 0.2s ease',
//               display: 'flex',
//               justifyContent: 'center'
//             }}
//           >
//             <ShoppingCart style={{ color: 'white' }} size={24} />
//             {totalItems > 0 && (
//               <span style={{
//                 position: 'absolute',
//                 top: '-6px',
//                 right: '-6px',
//                 background: '#ff4444',
//                 color: 'white',
//                 borderRadius: '50%',
//                 width: '20px',
//                 height: '20px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '12px',
//                 fontWeight: 'bold'
//               }}>
//                 {totalItems}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Product Card Component
// const ProductCard = ({ product }) => {
//   const { cart, addToCart, removeFromCart } = useCart();
//   const qty = cart[product.id] || 0;

//   return (
//     <div style={{
//       border: '1px solid #ddd',
//       borderRadius: '12px',
//       padding: '15px',
//       background: '#fff',
//       textAlign: 'center',
//       position: 'relative',
//       transition: 'box-shadow 0.3s ease'
//     }}
//     onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'}
//     onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
//     >
//       {product.discount && (
//         <span style={{
//           position: 'absolute',
//           top: '10px',
//           left: '10px',
//           background: '#007bff',
//           color: 'white',
//           fontSize: '12px',
//           padding: '2px 6px',
//           borderRadius: '6px'
//         }}>
//           {product.discount}
//         </span>
//       )}

//       <img 
//         src={product.image} 
//         alt={product.name} 
//         style={{
//           height: '150px',
//           width: '100%',
//           objectFit: 'contain',
//           marginBottom: '10px'
//         }}
//       />

//       <h2 style={{
//         fontSize: '14px',
//         fontWeight: '600',
//         color: '#333',
//         margin: '5px 0'
//       }}>
//         {product.name}
//       </h2>
      
//       <p style={{
//         fontSize: '12px',
//         color: '#777',
//         margin: '5px 0'
//       }}>
//         {product.weight}
//       </p>

//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '8px',
//         margin: '8px 0',
//         alignItems: 'center'
//       }}>
//         <span style={{
//           fontSize: '16px',
//           fontWeight: 'bold',
//           color: '#000'
//         }}>
//           ₹{product.price}
//         </span>
//         {product.oldPrice && (
//           <span style={{
//             fontSize: '14px',
//             color: '#888',
//             textDecoration: 'line-through'
//           }}>
//             ₹{product.oldPrice}
//           </span>
//         )}
//       </div>

//       {qty === 0 ? (
//         <button 
//           onClick={() => addToCart(product.id)}
//           style={{
//             background: '#28a745',
//             color: 'white',
//             border: 'none',
//             padding: '6px 14px',
//             borderRadius: '6px',
//             cursor: 'pointer',
//             transition: 'background 0.2s'
//           }}
//           onMouseOver={(e) => e.target.style.background = '#218838'}
//           onMouseOut={(e) => e.target.style.background = '#28a745'}
//         >
//           ADD
//         </button>
//       ) : (
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: '8px'
//         }}>
//           <button 
//             onClick={() => removeFromCart(product.id)}
//             style={{
//               background: '#28a745',
//               color: 'white',
//               border: 'none',
//               width: '28px',
//               height: '28px',
//               borderRadius: '50%',
//               cursor: 'pointer',
//               fontSize: '18px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}
//           >
//             -
//           </button>
//           <span style={{
//             fontSize: '14px',
//             fontWeight: 'bold',
//             minWidth: '20px'
//           }}>
//             {qty}
//           </span>
//           <button 
//             onClick={() => addToCart(product.id)}
//             style={{
//               background: '#28a745',
//               color: 'white',
//               border: 'none',
//               width: '28px',
//               height: '28px',
//               borderRadius: '50%',
//               cursor: 'pointer',
//               fontSize: '18px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}
//           >
//             +
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// // Products Grid Component
// const ProductsGrid = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Nestle Munch Choco Fills Cereal",
//       weight: "100 g",
//       price: 64,
//       oldPrice: 80,
//       discount: "20% OFF",
//       image: "https://www.bigbasket.com/media/uploads/p/l/40196863_3-nestle-munch-crispy-wafer-bites-coated-with-chocolate.jpg"
//     },
//     {
//       id: 2,
//       name: "Kellogg's Corn Flakes with Immuno Nutrients",
//       weight: "250 g",
//       price: 125,
//       oldPrice: null,
//       discount: null,
//       image: "https://www.bigbasket.com/media/uploads/p/l/40085939_14-kelloggs-corn-flakes.jpg"
//     },
//     {
//       id: 3,
//       name: "Kellogg's Double Chocolaty Fills",
//       weight: "250 g",
//       price: 177,
//       oldPrice: 205,
//       discount: "13% OFF",
//       image: "https://www.bigbasket.com/media/uploads/p/l/40210853_4-kelloggs-chocos-fills.jpg"
//     },
//     {
//       id: 4,
//       name: "Kellogg's Real Almond Honey Corn Flakes",
//       weight: "1 kg",
//       price: 369,
//       oldPrice: 580,
//       discount: "36% OFF",
//       image: "https://www.bigbasket.com/media/uploads/p/l/40166387_2-kelloggs-real-almond-honey-corn-flakes.jpg"
//     }
//   ];

//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
//       gap: '20px',
//       padding: '20px'
//     }}>
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// // Shopping Cart Component
// const ShoppingCartModal = ({ isOpen, onClose }) => {
//   const { getCartItems, updateQuantity, getCartTotal, getTotalItems } = useCart();
  
//   const cartItems = getCartItems();
//   const itemsTotal = getCartTotal();
//   const deliveryCharge = 0;
//   const originalDeliveryCharge = 25;
//   const handlingCharge = 2;
//   const grandTotal = itemsTotal + deliveryCharge + handlingCharge;
//   const totalItems = getTotalItems();

//   if (!isOpen) return null;

//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       display: 'flex',
//       justifyContent: 'flex-end',
//       zIndex: 50
//     }}>
//       <div style={{
//         backgroundColor: 'white',
//         width: '100%',
//         maxWidth: '400px',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column'
//       }}>
//         {/* Header */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           padding: '16px',
//           borderBottom: '1px solid #e5e7eb'
//         }}>
//           <h2 style={{
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#111827',
//             margin: 0
//           }}>My Cart</h2>
//           <button 
//             onClick={onClose}
//             style={{
//               padding: '4px',
//               backgroundColor: 'transparent',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             <X style={{ width: '24px', height: '24px', color: '#6b7280' }} />
//           </button>
//         </div>

//         {/* Delivery Info */}
//         <div style={{
//           padding: '16px',
//           backgroundColor: '#f0fdf4',
//           borderBottom: '1px solid #e5e7eb'
//         }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px'
//           }}>
//             <div style={{
//               width: '32px',
//               height: '32px',
//               backgroundColor: '#dcfce7',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}>
//               <Clock style={{ width: '16px', height: '16px', color: '#16a34a' }} />
//             </div>
//             <div>
//               <p style={{
//                 fontWeight: '600',
//                 color: '#111827',
//                 margin: 0,
//                 fontSize: '16px'
//               }}>Delivery in 40 minutes</p>
//               <p style={{
//                 fontSize: '14px',
//                 color: '#6b7280',
//                 margin: 0
//               }}>Shipment of {totalItems} items</p>
//             </div>
//           </div>
//         </div>

//         {/* Cart Items */}
//         <div style={{
//           flex: 1,
//           overflowY: 'auto',
//           padding: '16px'
//         }}>
//           {cartItems.length === 0 ? (
//             <div style={{
//               textAlign: 'center',
//               padding: '40px 20px',
//               color: '#6b7280'
//             }}>
//               <p style={{ fontSize: '18px', marginBottom: '8px' }}>Your cart is empty</p>
//               <p style={{ fontSize: '14px' }}>Add some products to get started!</p>
//             </div>
//           ) : (
//             cartItems.map((item) => (
//               <div key={item.id} style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 padding: '12px',
//                 backgroundColor: '#f9fafb',
//                 borderRadius: '8px',
//                 marginBottom: '16px'
//               }}>
//                 <div style={{
//                   width: '48px',
//                   height: '48px',
//                   backgroundColor: 'white',
//                   borderRadius: '4px',
//                   border: '1px solid #e5e7eb',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '24px'
//                 }}>
//                   {item.image}
//                 </div>
                
//                 <div style={{ flex: 1 }}>
//                   <h3 style={{
//                     fontWeight: '500',
//                     color: '#111827',
//                     fontSize: '14px',
//                     margin: '0 0 4px 0'
//                   }}>{item.name}</h3>
//                   <p style={{
//                     fontSize: '12px',
//                     color: '#6b7280',
//                     margin: '0 0 4px 0'
//                   }}>{item.weight}</p>
//                   <p style={{
//                     fontWeight: '600',
//                     color: '#111827',
//                     margin: 0
//                   }}>₹{item.price}</p>
//                 </div>

//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '4px'
//                 }}>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     style={{
//                       width: '32px',
//                       height: '32px',
//                       backgroundColor: '#16a34a',
//                       color: 'white',
//                       borderRadius: '50%',
//                       border: 'none',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       cursor: 'pointer',
//                       fontWeight: 'bold',
//                       fontSize: '18px'
//                     }}
//                   >
//                     −
//                   </button>
//                   <span style={{
//                     width: '40px',
//                     textAlign: 'center',
//                     fontWeight: 'bold',
//                     fontSize: '18px',
//                     color: '#16a34a'
//                   }}>{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     style={{
//                       width: '32px',
//                       height: '32px',
//                       backgroundColor: '#16a34a',
//                       color: 'white',
//                       borderRadius: '50%',
//                       border: 'none',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       cursor: 'pointer',
//                       fontWeight: 'bold',
//                       fontSize: '18px'
//                     }}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Bill Details - Only show if cart has items */}
//         {cartItems.length > 0 && (
//           <>
//             <div style={{
//               padding: '16px',
//               borderTop: '1px solid #e5e7eb',
//               backgroundColor: '#f9fafb'
//             }}>
//               <h3 style={{
//                 fontSize: '18px',
//                 fontWeight: '600',
//                 color: '#111827',
//                 marginBottom: '12px',
//                 marginTop: 0
//               }}>Bill details</h3>
              
//               <div style={{ marginBottom: '16px' }}>
//                 <div style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   marginBottom: '8px'
//                 }}>
//                   <span style={{ color: '#374151' }}>Items total</span>
//                   <span style={{ fontWeight: '600' }}>₹{itemsTotal}</span>
//                 </div>

//                 <div style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   marginBottom: '8px'
//                 }}>
//                   <span style={{ color: '#374151' }}>Delivery charge</span>
//                   <div style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '4px'
//                   }}>
//                     <span style={{
//                       fontSize: '14px',
//                       color: '#6b7280',
//                       textDecoration: 'line-through'
//                     }}>₹{originalDeliveryCharge}</span>
//                     <span style={{
//                       color: '#2563eb',
//                       fontWeight: '600'
//                     }}>FREE</span>
//                   </div>
//                 </div>

//                 <div style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   marginBottom: '8px'
//                 }}>
//                   <span style={{ color: '#374151' }}>Handling charge</span>
//                   <span style={{ fontWeight: '600' }}>₹{handlingCharge}</span>
//                 </div>

//                 <div style={{
//                   borderTop: '1px solid #e5e7eb',
//                   paddingTop: '8px',
//                   marginTop: '8px'
//                 }}>
//                   <div style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center'
//                   }}>
//                     <span style={{
//                       fontSize: '18px',
//                       fontWeight: 'bold',
//                       color: '#111827'
//                     }}>Grand total</span>
//                     <span style={{
//                       fontSize: '18px',
//                       fontWeight: 'bold',
//                       color: '#111827'
//                     }}>₹{grandTotal}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Checkout Button */}
//             <div style={{
//               padding: '16px',
//               backgroundColor: 'white',
//               borderTop: '1px solid #e5e7eb'
//             }}>
//               <button style={{
//                 width: '100%',
//                 backgroundColor: '#16a34a',
//                 color: 'white',
//                 padding: '16px',
//                 borderRadius: '8px',
//                 fontWeight: '600',
//                 fontSize: '18px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 border: 'none',
//                 cursor: 'pointer'
//               }}>
//                 <div style={{ textAlign: 'left' }}>
//                   <div>₹{grandTotal}</div>
//                   <div style={{
//                     fontSize: '14px',
//                     opacity: 0.9
//                   }}>TOTAL</div>
//                 </div>
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}>
//                   <span>Login to Proceed</span>
//                   <span>→</span>
//                 </div>
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// // Main App Component
// const App = () => {
//   const [showCart, setShowCart] = useState(false);

//   return (
//     <CartProvider>
//       <div>
//         <Navbar onCartClick={() => setShowCart(true)} />
//         <ProductsGrid />
//         <ShoppingCartModal 
//           isOpen={showCart} 
//           onClose={() => setShowCart(false)} 
//         />
//       </div>
//     </CartProvider>
//   );
// };

// export default App; */