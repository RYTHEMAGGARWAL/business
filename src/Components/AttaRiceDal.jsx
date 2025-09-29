import React from 'react';
import { useCart } from './CartContext';
import { useLocation } from 'react-router-dom';

const products = [
  {
    id: 74,
    name: "Fortune Chhaki Fresh Atta",
    weight: "10 kg",
    price: 436,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1754da9d-9ce1-4d51-9695-10c7f11e5209.png",
    inStock:true,
  },
   {
    id: 75,
    name: "Aashirwaad Shudhh Chakki Atta",
    weight: "10 kg",
    price: 440,
    oldPrice: 495,
    discount: "13% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/e7bddd47-28d5-4dc7-a194-d0cbdfdb4c19.jpg?dpr_multiplier=3.00",
    inStock:true,
  },
  {
    id: 76,
    name: "Fortune Chhaki Fresh Atta",
    weight: "5 kg",
    price: 220,
    oldPrice: 253,
    discount: "12% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/1754da9d-9ce1-4d51-9695-10c7f11e5209.png",
    inStock:true,
  },
   {
    id: 77,
    name: "Aashirvaad High Fibre Atta with MultiGrain",
    weight: "5 kg",
    price: 315,
    oldPrice: 371,
    discount: "15% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/99c07f65-9c5b-4fc4-927b-7be3f2bea854.png",
    inStock:true,
  },
   {
    id: 78,
    name: "NatureFresh Shudhh Chakki Atta",
    weight: "5 kg",
    price: 220,
    oldPrice: 260,
    discount: "15% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/6650cacf-5347-4108-a653-4355531be4fa.png",
    inStock:true,
   },
    {
    id: 79,
    name: "Aashirwaad Shudhh Chakki Atta",
    weight: "5 kg",
    price: 230,
    oldPrice: 285,
    discount: "18% oFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/e7bddd47-28d5-4dc7-a194-d0cbdfdb4c19.jpg?dpr_multiplier=3.00",
    inStock:true,
  },
  {
    id: 80,
    name: "NatureFresh Shudhh Chakki Atta",
    weight: "10 kg",
    price: 435,
    oldPrice: 495,
    discount: "12% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/6650cacf-5347-4108-a653-4355531be4fa.png",
    inStock:true,
  },
  {
    id: 81,
    name: "JAGAT STORE Gol Atta (MP Sharbati) ",
    weight: "10 kg",
    price: 480,
    oldPrice: null,
    discount: null,
    image: "https://daivikorganic.com/cdn/shop/products/4_3b7a5867-3758-4098-98bb-4eb444af492e.png?v=1670564660",
    inStock:true,
  },
  

   {
    id: 82,
    name: "Arhar dal",
    weight: "500 g",
    price: 70,
    oldPrice: null,
    discount: null,
    image: " https://themill.in/wp-content/uploads/2021/06/arhar-dal-1.jpg",
       inStock:true,
  },
   {
    id: 83,
    name: "Chana Dal",
    weight: "500 g",
    price: 55,
    oldPrice: null,
    discount: null,
    image: " https://twobrothersindiashop.com/cdn/shop/articles/chana-dal-benefits.png?v=1694585472&width=1024",
    inStock:true,
  },
   {
    id: 84,
    name: "Moong Sabut",
    weight: "500 g",
    price: 60,
    oldPrice: null,
    discount: null,
    image: " https://www.indianasapplepie.com/cdn/shop/files/greenwholemoong_2048x.jpg?v=1738085822",
       inStock:true,
  },
   {
    id: 85,
    name: "Moong Chilka",
    weight: "500 g",
    price: 65,
    oldPrice: null,
    discount: null,
    image: " https://farmorgo.com/beta/uploads/products/9986.png",
       inStock:true,
  },
   {
    id: 86,
    name: "Moong Dhuli",
    weight: "500 g",
    price: 70,
    oldPrice: null,
    discount: null,
    image: " https://healthymiller.com/cdn/shop/files/Moong_dhuliPulse.png?v=1693903186",
       inStock:true,
  },
   {
    id: 87,
    name: "Urad Sabut (Makhani Dal)",
    weight: "500 g",
    price: 70,
    oldPrice: null,
    discount: null,
    image: " https://www.ritirivaaj.com/cdn/shop/products/sabuturad-1_33b75575-420a-471d-ba05-8c426d3b47d0.jpg?v=1621684975",
       inStock:true,
  },
   {
    id: 88,
    name: "Urad Dhuli",
    weight: "500 g",
    price: 80,
    oldPrice: null,
    discount: null,
    image: " https://tiimg.tistatic.com/fp/1/008/806/urad-dhuli-dal-634.jpg",
       inStock:true,
  },
   {
    id: 89,
    name: "Urad Chilka",
    weight: "500 g",
    price: 70,
    oldPrice: null,
    discount: null,
    image: " https://images.jdmagicbox.com/quickquotes/images_main/urad-chilka-dal-2217518343-jws43rmk.jpg",
       inStock:true,
  },
   {
    id: 90,
    name: "Black Masoor Sabut",
    weight: "500 g",
    price: 55,
    oldPrice: null,
    discount: null,
    image: " https://www.jiomart.com/images/product/original/rvzjzkxnha/momsy-premium-quality-black-masoor-dal-sabut-kali-masoor-5kg-product-images-orvzjzkxnha-p598375118-2-202302140918.jpg?im=Resize%3D%28420%2C420%29",
       inStock:true,
  },
   {
    id: 91,
    name: "Red Masoor Sabut",
    weight: "500 g",
    price: 50,
    oldPrice: null,
    discount: null,
    image: " https://tse4.mm.bing.net/th/id/OIP.ryMozdF3NWKPS8ikdYK2_wHaHa?pid=Api&P=0&h=180",
      inStock:true,
  },
   {
    id: 92,
    name: "Black Masoor Dali hui",
    weight: "500 g",
    price: 70,
    oldPrice: null,
    discount: null,
    image: " https://tiimg.tistatic.com/fp/1/007/626/high-in-protein-organic-kali-masoor-dal-for-cooking-good-for-health--404.jpg",
      inStock:true,
  },
   {
    id: 93,
    name: "Red Masoor Dali hui",
    weight: "500 g",
    price: 70,
    oldPrice: null,
    discount: null,
    image: " https://tse4.mm.bing.net/th/id/OIP.dcf2GnWz92w5zwddQqallgHaHa?pid=Api&P=0&h=180",
       inStock:true,
  },
   {
    id: 94,
    name: "Rajma (Chitra)",
    weight: "500 g",
    price: 75,
    oldPrice: null,
    discount: null,
    image: " https://krishidhara.com/wp-content/uploads/2025/03/51HBMav203L._AC_UF10001000_QL80_.webp",
      inStock:true,
  },
   {
    id: 95,
    name: "Chole (Medium)",
    weight: "500 g",
    price: 65,
    oldPrice: null,
    discount: null,
    image: " https://apexherbex.com/wp-content/uploads/2023/04/KABULI-CHANA-2-scaled.jpg",
        inStock:true,
  },
   {
    id: 96,
    name: "Chole (Large)",
    weight: "500 g",
    price: 80,
    oldPrice: null,
    discount: null,
    image: " https://tse2.mm.bing.net/th/id/OIP.DhSDTiBQMvZ5e9pfs8YzoQHaF-?pid=Api&P=0&h=180",
        inStock:true,
  },
   {
    id: 97,
    name: "Mix Dal",
    weight: "500 g",
    price: 70,
    oldPrice: null,
    discount: null,
    image: " https://tse3.mm.bing.net/th/id/OIP.28dfGTVORb5hu1ouKB7tdwHaF9?pid=Api&P=0&h=180",
       inStock:true,
  },
   {
    id: 98,
    name: "Safed  Matar (Kulche Wali)",
    weight: "500 g",
    price: 45,
    oldPrice: null,
    discount: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.2sKlIZne3xs5YY2aov-S6QHaHa?pid=Api&P=0&h=180",
       inStock:true,
  },
   {
    id: 99,
    name: "Kala Chana",
    weight: "500 g",
    price: 48,
    oldPrice: null,
    discount: null,
    image: " https://tse3.mm.bing.net/th/id/OIP.5YwHmaMZSLq6oVy55ABUlwHaFF?pid=Api&P=0&h=180",
      inStock:true,
  },
   {
    id: 100,
    name: "Red Rajma (Kashmiri)",
    weight: "500 g",
    price: 80,
    oldPrice: null,
    discount: null,
    image: " https://tse3.mm.bing.net/th/id/OIP.o57MmB8K6N7M-a_Mwv6P0gAAAA?pid=Api&P=0&h=180",
     inStock:true,
  },
   {
    id: 101,
    name: "Basmati Chawal Mini Tukda Rice",
    weight: "1 kg",
    price: 55,
    oldPrice: null,
    discount: null,
    image: "https://tse2.mm.bing.net/th/id/OIP.EXeG4ltL6CnOR3xJkYDcpAHaHB?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 102,
    name: "Basmati Chawal Tukda Rice",
    weight: "1 kg",
    price: 60,
    oldPrice: null,
    discount: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.Cwm3iSEXkYHikmIFWbOGIQHaFW?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 103,
    name: "Basmati Chawal Pona Rice",
    weight: "1 kg",
    price: 80,
    oldPrice: null,
    discount: null,
    image: "https://tse4.mm.bing.net/th/id/OIP.rIQUkS9OXsEw6TsP6as3VgHaF_?pid=Api&P=0&h=180",
     inStock:true,
  },
{
    id: 104,
    name: "Basmati Chawal Sabut Rice(Pulav Rice)",
    weight: "1 kg",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.7cKH8IzhwnrQ7ZrQfu0j6AHaEL?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 105,
    name: "Golden Sella Rice/Pulav (Double Chhabhi)",
    weight: "1 kg",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.31u8aYU-yOTvjF5VimdVCQHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 106,
    name: "Golden Sella Rice/Pulav (Galaxy)",
    weight: "1 kg",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.8Lfl5y7MzqrRQ0Pa5bDN0AHaGe?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 107,
    name: "India Gate Mini Mogra Rice/Chawal",
    weight: "10 kg",
    price: 570,
    oldPrice: null,
    discount: null,
    image: "https://tse2.mm.bing.net/th/id/OIP.gL30AQL72KKPK0rqP_HeIgHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 108,
    name: "India Gate Mogra Rice/Chawal",
    weight: "10 kg",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.32S9ve2pOCeCOtjmb0XazgHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
   {
    id: 109,
    name: "India Gate Dubar Rice/Chawal",
    weight: "5 kg",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.XXgv42_mvsEobV6YxA4JSwHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
   {
    id: 110,
    name: "India Gate Tibar Rice/Chawal",
    weight: "5 kg",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://tse4.mm.bing.net/th/id/OIP.J3RMsJMTGDAyD9gJlcXfrAHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
   {
    id: 111,
    name: "India Gate Super Rice/Chawal",
    weight: "5 kg",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://tse2.mm.bing.net/th/id/OIP.e6MMuqUpOz3bLbtGf1eaJQHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
   {
    id: 112,
    name: "Delhi Pasand Easy Rice/Chawal",
    weight: "10 kg",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.tKJv7dXqAP1SwggFv6hjJgAAAA?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 113,
    name: "Delhi Pasand Light Rice/Chawal",
    weight: "10 kg",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.MLd8SIuPq1mDP-6eBwLsfAHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 114,
    name: "Delhi Pasand Regular Rice/Chawal",
    weight: "10 kg",
    price: 110,
    oldPrice: null,
    discount: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.7mrKDFFD2tCOvxoB6vQ7qwAAAA?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 115,
    name: "Sona Mansuri Chawal/Rice",
    weight: "1 kg",
    price: 55,
    oldPrice: null,
    discount: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.zLl7VDcZr9lywelwILpCpQAAAA?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 116,
    name: "Daawat Rozana Super Chawal/Rice",
    weight: "5 kg",
    price: 55,
    oldPrice: null,
    discount: null,
    image: "https://tse4.mm.bing.net/th/id/OIP.xFumiJNBKLemWzxoWRGaiQHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
   {
    id: 117,
    name: "Daawat Brown Chawal/Rice",
    weight: "1 kg",
    price: 140,
    oldPrice: null,
    discount: null,
    image: "https://tse4.mm.bing.net/th/id/OIP.s2jyNQAz1f8GDciYwKNNSQHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
   {
    id: 118,
    name: "Sugar (Chini)",
    weight: "1 kg",
    price: 45,
    oldPrice: null,
    discount: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.vxdjEfDW2VeNqgW2bLppKgAAAA?pid=Api&P=0&h=180",
     inStock:true,
  },
 {
    id: 119,
    name: "Dhampur Sugar (Chini)",
    weight: "1 kg",
    price: 55,
    oldPrice: null,
    discount: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.OnaOndFEZf2rEZ6vU_FqSQHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
 {
    id: 120,
    name: "Dhampur Sugar (Chini)",
    weight: "5 kg",
    price: 275,
    oldPrice: null,
    discount: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.7WrWzaMeVaGaStNY2ZOA4QHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
 {
    id: 121,
    name: "Uttam Sugar (Chini)",
    weight: "1 kg",
    price: 55,
    oldPrice: null,
    discount: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.yYA03PLqCcFuMiuZx-4obwHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
 {
    id: 122,
    name: "uttam Sugar (Chini)",
    weight: "5 kg",
    price: 275,
    oldPrice: null,
    discount: null,
    image: "https://tse1.mm.bing.net/th/id/OIP.yYA03PLqCcFuMiuZx-4obwHaHa?pid=Api&P=0&h=180",
     inStock:true,
  },
  {
    id: 123,
    name: "Brown Sugar  (Chini)",
    weight: "1 kg",
    price: 95,
    oldPrice: null,
    discount: null,
    image: "https://tse3.mm.bing.net/th/id/OIP.xQm4TyJ6j3iIqarWbG7YUwHaHa?pid=Api&P=0&h=180",
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

const AttaRiceDal = () => {
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

export default AttaRiceDal;