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



 // petcare start
  7: {
    id: 7,
    name: "Pedigree Adult Dog Dry Food",
    weight: "3kg",
    price: 694,
    oldPrice: 730,
    discount: "5% OFF",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/0a27b202-9f8e-4374-b0cd-b5d013d801f1.png",
  },
  8: {
    id: 8,
    name: "baby pet",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/70e0134d-4001-4e1a-baaf-219dce0802f7.png",
  },
  9: {
    id: 9,
    name: "Adult1",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c01f0faf-c83f-4c0b-a68c-3fc354d8445d.png",
  },
  10: {
    id: 10,
    name: "Adult2",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/d47305ec-9f6d-4a9d-bbf9-ae6b51f9efa4.png",
  },
  11: {
    id: 11,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/7269b332-e28f-4dcc-8fd2-f9de5eb55214.png",
  },
  12:{
    id: 12,
    name: "Adult",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/05a0f3fa-6325-43fa-ac02-43db7aee6ce5.png",
  },
  13: {
    id: 13,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0037ca4f-d41c-40e2-8b06-a4b64232e5da.png",
  },
  14: {
    id: 14,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63acc207-13a7-49cd-8592-1ddebc2a965d.png",
  },
  15: {
    id: 15,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/74919088-2863-4e48-a661-ade8f2df946f.png",
  },
  16: {
    id: 16,
    name: "Adult6",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1717067945707-3",
  },
  17: {
    id: 17,
    name: "Adult8",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1a489256-8344-4db0-a8c5-25410f9597c1.png",
  },
  18: {
    id: 18,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/74919088-2863-4e48-a661-ade8f2df946f.png",
  },
   19: {
    id: 19,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b49fd384-a0a6-447a-bf2c-3f093f7d8d67.png",
  },
   20: {
    id: 20,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4cc3596d-233e-4ada-b934-4cb8ee8522be.png",
  },
   21: {
    id: 21,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b945f4df-7a96-4880-a3ba-6640d02b8931.png",
  },
 22: {
    id: 22,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f8408407-1139-4e74-9431-d395db6bd226.png",
  },
 23: {
    id: 23,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/96ad42aa-e5b8-42c2-87ad-a4fb10b1fe9f.png",
  },
 24: {
    id: 24,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66d4a9c5-cf2a-49e5-a99f-cbf4b5e83076.png",
  },


  // pet care ends


  // baby care start
    25: {
    id: 25,
    name: "Pedigree Adult Dog Dry Food",
    weight: "3kg",
    price: 694,
    oldPrice: 730,
    discount: "5% OFF",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/3e44ce9c-ce6a-409f-af15-aaf6dc96508e.png",
  },
  26: {
    id: 26,
    name: "baby pet",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/52f8ea87-0506-47d1-9c67-7dd7c08df646.png",
  },
  27: {
    id: 27,
    name: "Adult1",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/11691d7d-e6fb-4c89-bd0c-be2f74e76feb.png",
  },
  28: {
    id: 28,
    name: "Adult2",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8455c6fe-510c-4b21-803a-14305d535ff0.png",
  },
  29: {
    id: 29,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cf812ba3-5d1d-4320-8170-1f1502d4db65.png",
  },
  30: {
    id: 30,
    name: "Adult",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2f322fe4-19d9-40de-816c-435352963d23.png",
  },
  31: {
    id: 31,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/6e0d9082-16ac-4825-8727-648597e187fc.jpg?dpr_multiplier=3.00",
  },
  32: {
    id: 32,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3f2dfe46-8bce-4026-ba56-d07f18886460.png",
  },
  33: {
    id: 33,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d9ff9270-eede-4c2d-8064-bb94ab6bd062.png",
  },
  34: {
    id: 34,
    name: "Adult6",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/56aaaa66-3592-4f99-a533-251f7f227fc7.png",
  },
  35: {
    id: 35,
    name: "Adult8",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d5a61191-fa0e-4ec6-9cab-b5f8d6c183ec.png",
  },
  36: {
    id: 36,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d5a61191-fa0e-4ec6-9cab-b5f8d6c183ec.png",
  },
   37: {
    id: 37,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e3bbfc78-fd1f-4431-81aa-2aff005e2187.png",
  },
   38: {
    id: 38,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4cc3596d-233e-4ada-b934-4cb8ee8522be.png",
  },
   39: {
    id: 39,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    // image:
    //   "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b945f4df-7a96-4880-a3ba-6640d02b8931.png",
  },
 40: {
    id: 40,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    // image:
    //   "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f8408407-1139-4e74-9431-d395db6bd226.png",
  },
 41: {
    id: 41,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    // image:
    //   "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/96ad42aa-e5b8-42c2-87ad-a4fb10b1fe9f.png",
  },
 42: {
    id: 42,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    // image:
    //   "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66d4a9c5-cf2a-49e5-a99f-cbf4b5e83076.png",
  },

  // ends baby care



  // dairy bread eggs start

  43: {
    id: 43,
    name: "Milk",
    weight: "1kg",
    price: 40,
    oldPrice: 730,
    discount: "5% OFF",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/628c97e0-5ed4-425d-a667-1d3bfa6f0bde.png",
  },
  44: {
    id: 44,
    name: "baby pet",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png",
  },
  45: {
    id: 45,
    name: "Adult1",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/ae29e828-f5d9-4f8b-89b6-8c6d6919df7b.png",
  },
  46: {
    id: 46,
    name: "Adult2",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/60065a08-2486-4f67-b2ae-e03670b2c8f3.png",
  },
  47: {
    id: 47,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/c1d65f38-031a-4028-8bf6-a5fc2f0e288d.png",
  },
  48: {
    id: 48,
    name: "Adult",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/c1d65f38-031a-4028-8bf6-a5fc2f0e288d.png",
  },
  49: {
    id: 49,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c02659e5-2d26-41a3-b338-b3a2a6981a92.png",
  },
  50: {
    id: 50,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/app/images/category/cms_images/icon/952_1657599773117.png",
  },
  51: {
    id: 51,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/0b267148-c2c6-4eae-9ecd-1e9a83569e3a.png",
  },
  52: {
    id: 52,
    name: "Adult6",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/9f363c60-8b58-4e1a-8c20-9647247b7227.png",
  },
 53: {
    id: 53,
    name: "Adult8",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/04cb3d03-fa41-4229-82d1-67beb4d4cd7d.png",
  },
  54: {
    id: 54,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/ff8853fd-1be8-48cf-893a-3f1616af322c.png",
  },
   55: {
    id: 55,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/f4418ade-78c5-4405-9973-02c6c6db3289.png",
  },
   56: {
    id: 56,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/fb337791-9328-4c38-a2ee-bc3bb20d204a.png",
  },
   57: {
    id: 57,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/b232b090-361c-49ee-99a9-617eeac57aef.png",
  },
 58:{
    id: 58,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/951eaf30-2c8f-4032-bca6-51885222aa99.png",
  },
 59: {
    id: 59,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/951eaf30-2c8f-4032-bca6-51885222aa99.png",
  },
60:  {
    id: 60,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    // image:
    //   "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66d4a9c5-cf2a-49e5-a99f-cbf4b5e83076.png",
  },
 61:{
    id: 61,
    name: "masala",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/951eaf30-2c8f-4032-bca6-51885222aa99.png",
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