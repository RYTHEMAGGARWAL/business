import React, { useState, useEffect } from 'react';
import { X, Clock, Truck, Package, Info } from 'lucide-react';
import { useCart } from './CartContext';
import { Link, Routes, Route } from 'react-router-dom';

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { getCartItems, updateQuantity, getCartTotal, getTotalItems } = useCart();
  
  const cartItems = getCartItems();
  const itemsTotal = getCartTotal();
  const deliveryCharge = 0; // FREE delivery
  const originalDeliveryCharge = 25; // Original price (for display only)
  const handlingCharge = 2;
  const grandTotal = itemsTotal + deliveryCharge + handlingCharge;
  const totalItems = getTotalItems();

  const [deliveryText, setDeliveryText] = useState('Delivery in 40 minutes');
  const [deliverySubText, setDeliverySubText] = useState('Shipment of {totalItems} items');

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const openTimeInMinutes = 10 * 60; // 10:00 AM
    const closeTimeInMinutes = 20 * 60; // 8:00 PM

    let newDeliveryText = 'Delivery in 40 minutes';
    let newDeliverySubText = `Shipment of ${totalItems} items`;

    if (currentTimeInMinutes < openTimeInMinutes) {
      newDeliveryText = 'Opens at 10:00 AM';
      newDeliverySubText = 'Delivery tomorrow';
    } else if (currentTimeInMinutes >= closeTimeInMinutes) {
      newDeliveryText = 'Closed now';
      newDeliverySubText = 'Delivery tomorrow';
    } else {
      // Within operating hours
      const closingTimeInMinutes = closeTimeInMinutes;
      const timeToCloseInMinutes = closingTimeInMinutes - currentTimeInMinutes;
      if (timeToCloseInMinutes >= 40) {
        newDeliveryText = 'Delivery in 40 minutes';
        newDeliverySubText = `Shipment of ${totalItems} items`;
      } else {
        newDeliveryText = 'Delivery before closing';
        newDeliverySubText = `Shipment of ${totalItems} items`;
      }
    }

    setDeliveryText(newDeliveryText);
    setDeliverySubText(newDeliverySubText);
  }, [totalItems]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'flex-end',
      zIndex: 50
    }}>
      <div style={{
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '400px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#111827',
            margin: 0
          }}>My Cart</h2>
          <button 
            onClick={() => setIsOpen(false)}
            style={{
              padding: '4px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <X style={{ width: '24px', height: '24px', color: '#6b7280' }} />
          </button>
        </div>

        {/* Delivery Info */}
        <div style={{
          padding: '16px',
          backgroundColor: '#f0fdf4',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#dcfce7',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Clock style={{ width: '16px', height: '16px', color: '#16a34a' }} />
            </div>
            <div>
              <p style={{
                fontWeight: '600',
                color: '#111827',
                margin: 0,
                fontSize: '16px'
              }}>{deliveryText}</p>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: 0
              }}>{deliverySubText}</p>
            </div>
          </div>
        </div>

        {/* Cart Items */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              color: '#6b7280'
            }}>
              <p style={{ fontSize: '18px', marginBottom: '8px' }}>Your cart is empty</p>
              <p style={{ fontSize: '14px' }}>Add some products to get started!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}>
                   <img 
    src={item.image} 
    alt={item.name}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }}
  />
                </div>

                
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontWeight: '500',
                    color: '#111827',
                    fontSize: '14px',
                    margin: '0 0 4px 0'
                  }}>{item.name}</h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: '0 0 4px 0'
                  }}>{item.weight}</p>
                  <p style={{
                    fontWeight: '600',
                    color: '#111827',
                    margin: 0
                  }}>₹{item.price}</p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <button
                    type="button"
                    onClick={() => {
                      updateQuantity(item.id, item.quantity - 1);
                    }}
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#16a34a',
                      color: 'white',
                      borderRadius: '50%',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#15803d'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#16a34a'}
                  >
                    −
                  </button>
                  <span style={{
                    width: '40px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    color: '#16a34a'
                  }}>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => {
                      updateQuantity(item.id, item.quantity + 1);
                    }}
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#16a34a',
                      color: 'white',
                      borderRadius: '50%',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#15803d'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#16a34a'}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bill Details - Only show if cart has items */}
        {cartItems.length > 0 && (
          <>
            <div style={{
              padding: '16px',
              borderTop: '1px solid #e5e7eb',
              backgroundColor: '#f9fafb'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '12px',
                marginTop: 0
              }}>Bill details</h3>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Package style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                    <span style={{ color: '#374151' }}>Items total</span>
                  </div>
                  <span style={{ fontWeight: '600' }}>₹{itemsTotal}</span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Truck style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                    <span style={{ color: '#374151' }}>Delivery charge</span>
                    <Info style={{ width: '12px', height: '12px', color: '#9ca3af' }} />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      textDecoration: 'line-through'
                    }}>₹{originalDeliveryCharge}</span>
                    <span style={{
                      color: '#2563eb',
                      fontWeight: '600'
                    }}>FREE</span>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Package style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                    <span style={{ color: '#374151' }}>Handling charge</span>
                    <Info style={{ width: '12px', height: '12px', color: '#9ca3af' }} />
                  </div>
                  <span style={{ fontWeight: '600' }}>₹{handlingCharge}</span>
                </div>

                <div style={{
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '8px',
                  marginTop: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#111827'
                    }}>Grand total</span>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#111827'
                    }}>₹{grandTotal}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div style={{
              padding: '16px',
              backgroundColor: '#f9fafb',
              borderTop: '1px solid #e5e7eb'
            }}>
              <h4 style={{
                fontWeight: '600',
                color: '#111827',
                marginBottom: '8px',
                marginTop: 0
              }}>Cancellation Policy</h4>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: 0
              }}>
                Orders cannot be cancelled once packed for delivery. In case of unexpected delays, 
                a refund will be provided, if applicable.
              </p>
            </div>

            {/* Checkout Button */}
            {/* <Link to="/Login"> */}
              <Link to='/Checkout' style={{textDecoration:'none', color: "white", onMouseOver:"none"}}>
            <div style={{
              padding: '16px',
              backgroundColor: 'white',
              borderTop: '1px solid #e5e7eb'
            }}>
              <button style={{
                width: '100%',
                backgroundColor: '#16a34a',
                color: 'white',
                padding: '16px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#15803d'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#16a34a'}
              >
                <div style={{ textAlign: 'left' }}>
                  <div>₹{grandTotal}</div>
                  <div style={{
                    fontSize: '14px',
                    opacity: 0.9
                  }}>TOTAL</div>
                </div>
                 
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
             
                  <span>Checkout</span>
                  <span>→</span>
                 
                </div>
                
              </button>
            </div>
            {/* </Link> */} </Link> 
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;