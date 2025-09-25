import React from "react";
import { useCart } from './CartContext';

// const products = [
//   {
//     id: 1,
//     name: "Nestle Munch Choco Fills Cereal",
//     weight: "100 g",
//     price: 64,
//     oldPrice: 80,
//     discount: "20% OFF",
//     image:
//       "https://www.bigbasket.com/media/uploads/p/l/40196863_3-nestle-munch-crispy-wafer-bites-coated-with-chocolate.jpg",
//   },
//   {
//     id: 2,
//     name: "Kellogg's Corn Flakes with Immuno Nutrients",
//     weight: "250 g",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image:
//       "https://www.bigbasket.com/media/uploads/p/l/40085939_14-kelloggs-corn-flakes.jpg",
//   },
//   {
//     id: 3,
//     name: "Kellogg's Double Chocolaty Fills",
//     weight: "250 g",
//     price: 177,
//     oldPrice: 205,
//     discount: "13% OFF",
//     image:
//       "https://www.bigbasket.com/media/uploads/p/l/40210853_4-kelloggs-chocos-fills.jpg",
//   },
//   {
//     id: 4,
//     name: "Kellogg's Real Almond Honey Corn Flakes",
//     weight: "1 kg",
//     price: 369,
//     oldPrice: 580,
//     discount: "36% OFF",
//     image:
//       "https://www.bigbasket.com/media/uploads/p/l/40166387_2-kelloggs-real-almond-honey-corn-flakes.jpg",
//   },
//     {
//     id: 5,
//     name: "Kellogg's Corn Flakes ",
//     weight: "250 g",
//     price: 135,
//     oldPrice: null,
//     discount: null,
//     image:
//   "https://www.bigbasket.com/media/uploads/p/l/40166387_2-kelloggs-real-almond-honey-corn-flakes.jpg",
//   },
//   {
//     id: 6,
//     name: "Kellogg's Corn Flakes with Immuno Nutrients",
//     weight: "250 g",
//     price: 125,
//     oldPrice: null,
//     discount: null,
//     image:
//   "https://www.bigbasket.com/media/uploads/p/l/40166387_2-kelloggs-real-almond-honey-corn-flakes.jpg",
//   },
// ];

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

const Pharmacy = () => {
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

export default Pharmacy;