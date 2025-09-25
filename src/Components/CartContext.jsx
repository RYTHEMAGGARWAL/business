import React, { createContext, useContext, useState } from 'react';

// Create Cart Context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart   = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Product data for cart items
const productData = {
 
  1: {
    id: 1,
    name: "Nestle Munch 1 Choco Fills Cereal",
    weight: "100 g",
    price: 64,
    oldPrice: 80,
    discount: "20% OFF",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/40196863_3-nestle-munch-crispy-wafer-bites-coated-with-chocolate.jpg",
  },
  2: {
    id: 2,
    name: "Kellogg's Corn 1 Flakes with Immuno Nutrients",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/40085939_14-kelloggs-corn-flakes.jpg",
  },
  3: {
    id: 3,
    name: "Kellogg's Double 11 Chocolaty Fills",
    weight: "250 g",
    price: 177,
    oldPrice: 205,
    discount: "13% OFF",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/40210853_4-kelloggs-chocos-fills.jpg",
  },
  4: {
    id: 4,
    name: "Kellogg's Real Almond 11 Honey Corn Flakes",
    weight: "1 kg",
    price: 369,
    oldPrice: 580,
    discount: "36% OFF",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/40166387_2-kelloggs-real-almond-honey-corn-flakes.jpg",
  },
    5:{
    id: 5,
    name: "Kellogg's Corn Flakes 11 with Immuno Nutrients",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
  "https://www.bigbasket.com/media/uploads/p/l/40166387_2-kelloggs-real-almond-honey-corn-flakes.jpg",
  },
  6: {
    id: 6,
    name: "Kellogg's Corn Flakes with Immuno Nutrients",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
  "https://www.bigbasket.com/media/uploads/p/l/40166387_2-kelloggs-real-almond-honey-corn-flakes.jpg",
  },
};


// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  // Add item to cart
  const addToCart = (productId) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1
    }));
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[productId] > 1) {
        newCart[productId] = newCart[productId] - 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCart(prevCart => {
        const newCart = { ...prevCart };
        delete newCart[productId];
        return newCart;
      });
    } else {
      setCart(prevCart => ({
        ...prevCart,
        [productId]: quantity
      }));
    }
  };

  // Get cart items with product details
  const getCartItems = () => {
    return Object.entries(cart).map(([productId, quantity]) => ({
      ...productData[productId],
      quantity
    }));
  };

  // Get total items count
  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  // Get cart total price
  const getCartTotal = () => {
    return Object.entries(cart).reduce((sum, [productId, quantity]) => {
      const product = productData[productId];
      return sum + (product ? product.price * quantity : 0);
    }, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartItems,
    getTotalItems,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;