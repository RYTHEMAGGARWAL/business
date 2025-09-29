import React from 'react';
import { useCart } from './CartContext';
import { useLocation } from 'react-router-dom';

const products = [
  {
    id: 124,
    name: "Nature Fresh Refined Soyabean Oil Pouch",
    weight: "1 Litre",
    price: 140,
    oldPrice:null,
    discount: null,
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/7b1c5a2e-3469-460d-b2c6-0d9dd5f72a36.png",
    inStock:true,
  },
  {
    id: 125,
    name: "Nature Fresh Refined Soyabean Oil can",
    weight: "5 Litre",
    price: 825,
    oldPrice:1050,
    discount: "10% OFF",
    image: "https://tse4.mm.bing.net/th/id/OIP.vHobBjz21taAyqOQkQbkkQAAAA?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 126,
    name: "Nature Fresh Mustard(Sarso) Oil Can",
    weight: "5 Litre",
    price: 140,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/68e76b8d-7a21-4b08-9b8c-92ff34d030ce.png",
    inStock:true,
  },
  {
    id: 127,
    name: "Nature Fresh Mustard(Sarso) Oil Pouch",
    weight: "1 Litre",
    price: 180,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/767b30c2-15db-41bc-8386-e22acffc47d2.png",
    inStock:true,
  },
  {
    id: 128,
    name: "Nature Fresh SunFlower Refined Oil",
    weight: "1 Litre",
    price: 170,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/fc364f75-d80d-46e4-92c9-42bdd6093006.png",
    inStock:true,
  },
  {
    id: 129,
    name: "Nature Fresh Mustard (Sarso) Oil Bottle",
    weight: "1 Litre",
    price: 185,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/dc244700-0866-445b-b020-6598422e24b1.png",
    inStock:true,
  },
  {
    id: 130,
    name: "Nature Fresh Groundnut (Mungfali) Refined Oil",
    weight: "1 Litre",
    price: 210,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse3.mm.bing.net/th/id/OIP.iu7xuD4fzUIFcztraaTfuwHaJ4?pid=Api&P=0&h=180",
    inStock:true,
  },
  
  {
    id: 131,
    name: "Fortune Mustard(Sarso) Oil Can",
    weight: "5 Litre",
    price: 840,
    oldPrice:985,
    discount: "10% OFF",
    image: "https://tse2.mm.bing.net/th/id/OIP.VM1DY6rXC4ARZk1DQAT7hwHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 132,
    name: "Fortune Refined Soyabean Oil Pouch",
    weight: "1 Litre",
    price: 140,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/7190517b-4ae9-4e86-a8c7-4cf71544c7ed.jpg?dpr_multiplier=3.00",
    inStock:true,
  },
  {
    id: 133,
    name: "Fortune Mustard(Sarso) Oil Pouch",
    weight: "1 Litre",
    price: 180,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/caeaa4ff-2a7e-4491-b3d7-73424d35d596.png",
    inStock:true,
  },
  
  {
    id: 134,
    name: "Fortune Refined Soyabean Oil Can",
    weight: "5 Litre",
    price: 750,
    oldPrice:885,
    discount: "10% OFF",
     image: "https://tse3.mm.bing.net/th/id/OIP.ebDc-ZfuRTdj1rwGXbTaOwHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 135,
    name: "Fortune SunFlower Refined Oil",
    weight: "1 Litre",
    price: 170,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse1.mm.bing.net/th/id/OIP.21rJE1uNWQBKCEBIj_ls7QAAAA?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 136,
    name: "Fortune Mustard (Sarso) Oil Bottle",
    weight: "1 Litre",
    price: 185,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/615253f7-9df2-4074-b116-a5e7671d3113.jpg?dpr_multiplier=3.00",
    inStock:true,
  },
  {
    id: 137,
    name: "Fortune Groundnut (Mungfali) Refined Oil",
    weight: "1 Litre",
    price: 210,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse1.mm.bing.net/th/id/OIP.PS2gQo916U53rKBdMvdiAgHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 138,
    name: "Fortune RiceBran Refined Oil",
    weight: "1 Litre",
    price: 210,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse1.mm.bing.net/th/id/OIP.eydlhVW2XQkKhD0GhLNuwQHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 139,
    name: "Bail Kolhu Sarso(Mustard) Oil Pouch",
    weight: "1 Litre",
    price: 185,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse3.mm.bing.net/th/id/OIP.oBwQRmWS7fwGNj3cw-XXHwAAAA?pid=Api&P=0&h=180",
    inStock:true,
  },
   {
    id: 140,
    name: "Bail Kolhu Sarso(Mustard) Oil Bottle",
    weight: "1 Litre",
    price: 190,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse3.mm.bing.net/th/id/OIP.0wD-LbQzRoPJoQwIaAN6MAHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
   {
    id: 141,
    name: "Bail Kolhu Sarso(Mustard) Oil Bottle",
    weight: "2 Litre",
    price: 375,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse3.mm.bing.net/th/id/OIP.P-WeQrVh0vqQZqmILmtngwHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
   {
    id: 142,
    name: "Bail Kolhu Sarso(Mustard) Oil Can",
    weight: "5 Litre",
    price: 185,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse3.mm.bing.net/th/id/OIP.zXJCFy7qBn068PRlGjDvNAHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 143,
    name: "Moti Sarso(Mustard) Oil Pouch",
    weight: "1 Litre",
    price: 170,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse1.mm.bing.net/th/id/OIP.gQ1CbIcDfYPMCJZfegHdrAHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 144,
    name: "Moti Sarso(Mustard) Oil Bottle",
    weight: "1 Litre",
    price: 175,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse3.mm.bing.net/th/id/OIP.bC9vbfHDL7JrF4aoCdhp9QAAAA?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 145,
    name: "Moti Sarso(Mustard) Oil Can",
    weight: "5 Litre",
    price: 185,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse1.mm.bing.net/th/id/OIP.fCI60BcXfo_NhKisQThc0wHaFv?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 146,
    name: "Moti Sarso(Mustard) Oil Can",
    weight: "2 Litre",
    price: 185,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse2.mm.bing.net/th/id/OIP.A-PnMTVV8yO1PZyTAVzowgHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
{
    id: 147,
    name: "Maanik Refined Soyabean Pouch",
    weight: "1 Litre",
    price: 140,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse4.mm.bing.net/th/id/OIP.1zTQU04T7xhoveGUiFwU_AHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
 
  {
    id: 148,
    name: "Maanik Refined Soyabean Can",
    weight: "2 Litre",
    price: 185,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse2.mm.bing.net/th/id/OIP.cqO3NZ5n79i0ZZ1h3n5N5AHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 149,
    name: "Maanik Refined Soyabean Can",
    weight: "5 Litre",
    price: 185,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://tse3.mm.bing.net/th/id/OIP.i7TLqXh42wCn8aixaQzvvQHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 150,
    name: "Saffola Gold Oil Pouch",
    weight: "1 Litre",
    price: 240,
    oldPrice:485,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b3b025d5-7d23-4955-b2a9-b4471df66b29.png",
    inStock:true,
  },
 {
    id: 151,
    name: "Saffola Gold Oil Can",
    weight: "5 Litre + 1 Litre",
    price: 1200,
    oldPrice:1500,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/cfec1e50-90d7-46d9-b87b-81ed6659f7c5.png",
    inStock:true,
  },
  {
    id: 152,
    name: "Oleev Active olive & Rice Bran Blended Cooking Oil",
    weight: "1 Litre",
    price: 260,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/da/cms-assets/cms/product/11f5eea4-32a2-4da1-9207-1068d64bed83.jpg",
    inStock:true,
  },
  {
    id: 153,
    name: "Amul Desi Ghee",
    weight: "1 Litre",
    price: 630,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/04494814-b45d-4e86-a8d8-ccc530e801bf.jpg?dpr_multiplier=3.00",
    inStock:true,
  },
   {
    id: 154,
    name: "Mother Dairy Ghee",
    weight: "1 Litre",
    price: 610,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/3bb85956-23e5-48e6-888e-1a6832af580b.png",
    inStock:true,
  },
  {
    id: 155,
    name: "Amul Desi Ghee",
    weight: "500 ml",
    price: 330,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/0c1fc913-9b65-41a6-88d3-8300655e6db7.png",
    inStock:true,
  },
  {
    id: 156,
    name: "Mother Dairy Ghee",
    weight: "500 ml",
    price: 310,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://tse1.mm.bing.net/th/id/OIP.vHnLRGwK5crITnGK3-W6LgAAAA?pid=Api&P=0&h=180",
    inStock:true,
  },
   {
    id: 157,
    name: "Amul Desi Cow Ghee",
    weight: "1 Litre",
    price: 740,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/52b306ab-5131-4486-b778-cfcc5fd2c8e1.png",
    inStock:true,
  },
  {
    id: 158,
    name: "Ananda Pure Ghee",
    weight: "450 ml",
    price: 310,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/8176059c-b564-431d-a933-579f9a909a90.png",
    inStock:true,
  },
 {
    id: 159,
    name: "Madhusudan Ghee",
    weight: "450 ml",
    price: 310,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://tse4.mm.bing.net/th/id/OIP.4gcBBo0mZlmN90CQStNT5gHaHa?pid=Api&P=0&h=180",
    inStock:true,
  }, {
    id: 160,
    name: "Ananda Pure Ghee",
    weight: "950 ml",
    price: 610,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://tse4.mm.bing.net/th/id/OIP.jRQ7-OA1tuiRXnKyRBePywHaHa?pid=Api&P=0&h=180",
    inStock:true,
  }, {
    id: 161,
    name: "Madhusudan Ghee",
    weight: "900 ml",
    price: 310,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://tse2.mm.bing.net/th/id/OIP.S63K_XhTMUzAn8IyEoFsLgHaJ7?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 162,
    name: "Milkfood Ghee",
    weight: "900 ml",
    price: 310,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/04414256-cd3c-4e40-a4bc-5daf5c4aa1f7.png",
    inStock:true,
  },
  {
    id: 163,
    name: "Paras Desi Ghee",
    weight: "900 ml",
    price: 310,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/ba9bb793-cd38-43ab-831f-4b47f1441a74.png",
    inStock:true,
  },
  {
    id: 164,
    name: "Patanjali Desi Cow Ghee",
    weight: "900 ml",
    price: 710,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/4221fe1e-1b58-4270-a503-060fd03c6aa6.png",
    inStock:true,
  },
   {
    id: 165,
    name: "Gowardhan Premium Cow Ghee",
    weight: "900 ml",
    price: 710,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/f98bae88-63be-4e9e-8e07-480d3a7676e2.png",
    inStock:true,
  },
   {
    id: 166,
    name: "Patanjali Desi Cow Ghee",
    weight: "500 ml",
    price: 390,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/da/cms-assets/cms/product/ba850ef0-8b8c-4eae-a955-7273e996dba1.jpg?dpr_multiplier=3.00",
    inStock:true,
  },
   {
    id: 167,
    name: "Gowardhan Premium Cow Ghee",
    weight: "450 ml",
    price: 410,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://tse1.mm.bing.net/th/id/OIP.peOjCa0Rwfp0M31bD4T7tQHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
   {
    id: 168,
    name: "Gowardhan Premium Cow Ghee Container",
    weight: "1 L",
    price: 710,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://tse3.mm.bing.net/th/id/OIP.2yJQVsYqMQiKzoRw1LFXkwHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
   {
    id: 169,
    name: "Namaste India Cow Ghee",
    weight: "1 L",
    price: 710,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://tse1.mm.bing.net/th/id/OIP.jRb22YYn7kZnBXcHn6-fuQHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 170,
    name: "Namaste India Ghee",
    weight: "1 L",
    price: 710,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://tse2.mm.bing.net/th/id/OIP.pS5KWTbehbe_CurQMuRTbwHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
  {
    id: 171,
    name: "Namaste India Cow Ghee",
    weight: "500 ml",
    price: 350,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://tse4.mm.bing.net/th/id/OIP.Ds-WOvx3nmap6-Z5hxhMXQHaHa?pid=Api&P=0&h=180",
    inStock:true,
  },
   {
    id: 172,
    name: "Paras Desi Ghee",
    weight: "200 ml",
    price: 130,
    oldPrice:null,
    discount: "10% OFF",
    image: "https://tse2.mm.bing.net/th/id/OIP.nd5G1XQcPaKlIi0gYf8kXQHaHa?pid=Api&P=0&h=180",
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

const MasalaOil = () => {
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

export default MasalaOil;