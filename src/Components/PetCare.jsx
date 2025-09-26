import React from "react";
import { useCart } from './CartContext';

const products = [
  {
    id: 7,
    name: "Pedigree Adult Dog Dry Food",
    weight: "3kg",
    price: 694,
    oldPrice: 730,
    discount: "5% OFF",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/0a27b202-9f8e-4374-b0cd-b5d013d801f1.png",
  },
  {
    id: 8,
    name: "baby pet",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/70e0134d-4001-4e1a-baaf-219dce0802f7.png",
  },
  {
    id: 9,
    name: "Adult1",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c01f0faf-c83f-4c0b-a68c-3fc354d8445d.png",
  },
  {
    id: 10,
    name: "Adult2",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/d47305ec-9f6d-4a9d-bbf9-ae6b51f9efa4.png",
  },
  {
    id: 11,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/7269b332-e28f-4dcc-8fd2-f9de5eb55214.png",
  },
  {
    id: 12,
    name: "Adult",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/05a0f3fa-6325-43fa-ac02-43db7aee6ce5.png",
  },
  {
    id: 13,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0037ca4f-d41c-40e2-8b06-a4b64232e5da.png",
  },
  {
    id: 14,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63acc207-13a7-49cd-8592-1ddebc2a965d.png",
  },
  {
    id: 15,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/74919088-2863-4e48-a661-ade8f2df946f.png",
  },
  {
    id: 16,
    name: "Adult6",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1717067945707-3",
  },
  {
    id: 17,
    name: "Adult8",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1a489256-8344-4db0-a8c5-25410f9597c1.png",
  },
  {
    id: 18,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/74919088-2863-4e48-a661-ade8f2df946f.png",
  },
   {
    id: 19,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b49fd384-a0a6-447a-bf2c-3f093f7d8d67.png",
  },
   {
    id: 20,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4cc3596d-233e-4ada-b934-4cb8ee8522be.png",
  },
   {
    id: 21,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b945f4df-7a96-4880-a3ba-6640d02b8931.png",
  },
 {
    id: 22,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f8408407-1139-4e74-9431-d395db6bd226.png",
  },
 {
    id: 23,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/96ad42aa-e5b8-42c2-87ad-a4fb10b1fe9f.png",
  },
 {
    id: 24,
    name: "Adult3",
    weight: "250 g",
    price: 125,
    oldPrice: null,
    discount: null,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/66d4a9c5-cf2a-49e5-a99f-cbf4b5e83076.png",
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

const PetCare = () => {
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

export default PetCare;