import React from "react";
import { useCart } from './CartContext';

const products = [
  {
    id: 25,
    name: "Pedigree Adult Dog Dry Food",
    weight: "3kg",
    price: 694,
    oldPrice: 730,
    discount: "5% OFF",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/3e44ce9c-ce6a-409f-af15-aaf6dc96508e.png",
  },
  {
    id: 26,
    name: "baby pet",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/52f8ea87-0506-47d1-9c67-7dd7c08df646.png",
  },
  {
    id: 27,
    name: "Adult1",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/11691d7d-e6fb-4c89-bd0c-be2f74e76feb.png",
  },
  {
    id: 28,
    name: "Adult2",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8455c6fe-510c-4b21-803a-14305d535ff0.png",
  },
  {
    id: 29,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cf812ba3-5d1d-4320-8170-1f1502d4db65.png",
  },
  {
    id: 30,
    name: "Adult",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2f322fe4-19d9-40de-816c-435352963d23.png",
  },
  {
    id: 31,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/6e0d9082-16ac-4825-8727-648597e187fc.jpg?dpr_multiplier=3.00",
  },
  {
    id: 32,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3f2dfe46-8bce-4026-ba56-d07f18886460.png",
  },
  {
    id: 33,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d9ff9270-eede-4c2d-8064-bb94ab6bd062.png",
  },
  {
    id: 34,
    name: "Adult6",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/56aaaa66-3592-4f99-a533-251f7f227fc7.png",
  },
  {
    id: 35,
    name: "Adult8",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d5a61191-fa0e-4ec6-9cab-b5f8d6c183ec.png",
  },
  {
    id: 36,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d5a61191-fa0e-4ec6-9cab-b5f8d6c183ec.png",
  },
   {
    id: 37,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e3bbfc78-fd1f-4431-81aa-2aff005e2187.png",
  },
   {
    id: 38,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4cc3596d-233e-4ada-b934-4cb8ee8522be.png",
  },
   {
    id: 39,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    // image:
    //   "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b945f4df-7a96-4880-a3ba-6640d02b8931.png",
  },
 {
    id: 40,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    // image:
    //   "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f8408407-1139-4e74-9431-d395db6bd226.png",
  },
 {
    id: 41,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    // image:
    //   "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/96ad42aa-e5b8-42c2-87ad-a4fb10b1fe9f.png",
  },
 {
    id: 42,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    // image:
    //   "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66d4a9c5-cf2a-49e5-a99f-cbf4b5e83076.png",
  },
 

  
  
  
  
];

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const qty = cart[product.id] || 0;

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  const handleRemoveFromCart = () => {
    if (qty > 0) {
      removeFromCart(product.id);
    }
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '15px',
      background: '#fff',
      textAlign: 'center',
      position: 'relative',
      transition: 'box-shadow 0.3s ease'
    }}
    onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'}
    onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
    >
      {product.discount && (
        <span style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: '#007bff',
          color: 'white',
          fontSize: '12px',
          padding: '2px 6px',
          borderRadius: '6px'
        }}>
          {product.discount}
        </span>
      )}

      <img 
        src={product.image} 
        alt={product.name} 
        style={{
          height: '150px',
          width: '100%',
          objectFit: 'contain',
          marginBottom: '10px'
        }}
      />

      <h2 style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#333',
        margin: '5px 0'
      }}>
        {product.name}
      </h2>
      
      <p style={{
        fontSize: '12px',
        color: '#777',
        margin: '5px 0'
      }}>
        {product.weight}
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        margin: '8px 0',
        alignItems: 'center'
      }}>
        <span style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#000'
        }}>
          ₹{product.price}
        </span>
        {product.oldPrice && (
          <span style={{
            fontSize: '14px',
            color: '#888',
            textDecoration: 'line-through'
          }}>
            ₹{product.oldPrice}
          </span>
        )}
      </div>

      {qty === 0 ? (
        <button 
          onClick={handleAddToCart}
          style={{
            background: '#28a745',
            color: 'white',
            border: 'none',
            padding: '6px 14px',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.target.style.background = '#218838'}
          onMouseOut={(e) => e.target.style.background = '#28a745'}
        >
          ADD
        </button>
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px'
        }}>
          <button 
            onClick={handleRemoveFromCart}
            style={{
              background: '#28a745',
              color: 'white',
              border: 'none',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => e.target.style.background = '#218838'}
            onMouseOut={(e) => e.target.style.background = '#28a745'}
          >
            -
          </button>
          <span style={{
            fontSize: '14px',
            fontWeight: 'bold',
            minWidth: '20px'
          }}>
            {qty}
          </span>
          <button 
            onClick={handleAddToCart}
            style={{
              background: '#28a745',
              color: 'white',
              border: 'none',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
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

const BabyCare = () => {
  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </div>
  );
};

export default BabyCare;