import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Truck, Package, ArrowLeft } from 'lucide-react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { getCartItems, getCartTotal, getTotalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const cartItems = getCartItems();
  const itemsTotal = getCartTotal();
  const totalItems = getTotalItems();
  const deliveryCharge = 0; // FREE delivery
  const handlingCharge = 2;
  const grandTotal = itemsTotal + deliveryCharge + handlingCharge;

  const [deliveryText, setDeliveryText] = useState('Estimated Delivery in 40 minutes');
  const [deliverySubText, setDeliverySubText] = useState(`Shipment of ${totalItems} items`);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Simulate checking authentication status (replace with actual auth check)
    const isAuthenticated = localStorage.getItem('isAuthenticated'); // Example
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Store order details before clearing cart
    if (cartItems.length > 0) {
      setOrderDetails({
        items: [...cartItems],
        itemsTotal,
        totalItems,
        grandTotal
      });
      clearCart();
    }

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const openTimeInMinutes = 10 * 60; // 10:00 AM
    const closeTimeInMinutes = 20 * 60; // 8:00 PM

    let newDeliveryText = 'Estimated Delivery in 40 minutes';
    let newDeliverySubText = `Shipment of ${totalItems} items`;

    if (currentTimeInMinutes < openTimeInMinutes) {
      newDeliveryText = 'Delivery scheduled for 10:00 AM tomorrow';
      newDeliverySubText = `Shipment of ${totalItems} items`;
    } else if (currentTimeInMinutes >= closeTimeInMinutes) {
      newDeliveryText = 'Delivery scheduled for tomorrow';
      newDeliverySubText = `Shipment of ${totalItems} items`;
    } else {
      const timeToCloseInMinutes = closeTimeInMinutes - currentTimeInMinutes;
      if (timeToCloseInMinutes >= 40) {
        newDeliveryText = 'Estimated Delivery in 40 minutes';
        newDeliverySubText = `Shipment of ${totalItems} items`;
      } else {
        newDeliveryText = 'Delivery before closing today';
        newDeliverySubText = `Shipment of ${totalItems} items`;
      }
    }

    setDeliveryText(newDeliveryText);
    setDeliverySubText(newDeliverySubText);
  }, [totalItems, clearCart, navigate]);

  // Use stored order details if available
  const displayItems = orderDetails?.items || cartItems;
  const displayItemsTotal = orderDetails?.itemsTotal || itemsTotal;
  const displayGrandTotal = orderDetails?.grandTotal || grandTotal;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 60,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '400px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <ArrowLeft style={{ width: '24px', height: '24px', color: '#6b7280' }} />
          </button>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <CheckCircle style={{ width: '48px', height: '48px', color: '#16a34a', marginBottom: '12px' }} />
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#111827',
              margin: '0 0 8px 0'
            }}>
              Order Confirmed!
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              margin: 0
            }}>
              Thank you for your purchase. You'll receive a confirmation soon.
            </p>
          </div>
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

        {/* Order Summary */}
        <div style={{
          padding: '16px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            margin: '0 0 12px 0'
          }}>Order Summary</h3>
          {displayItems.length === 0 ? (
            <p style={{ color: '#6b7280', textAlign: 'center' }}>No items to display</p>
          ) : (
            displayItems.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
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
                  <h4 style={{
                    fontWeight: '500',
                    color: '#111827',
                    fontSize: '14px',
                    margin: '0 0 4px 0'
                  }}>{item.name}</h4>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: '0 0 4px 0'
                  }}>{item.weight} x {item.quantity}</p>
                  <p style={{
                    fontWeight: '600',
                    color: '#111827',
                    margin: 0
                  }}>₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bill Details */}
        <div style={{
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            margin: '0 0 12px 0'
          }}>Bill Details</h3>
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
            <span style={{ fontWeight: '600' }}>₹{displayItemsTotal}</span>
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
            </div>
            <span style={{ color: '#2563eb', fontWeight: '600' }}>FREE</span>
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
              }}>₹{displayGrandTotal}</span>
            </div>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <div style={{
          padding: '16px',
          backgroundColor: 'white'
        }}>
          <button
            onClick={() => navigate('/')}
            style={{
              width: '100%',
              backgroundColor: '#16a34a',
              color: 'white',
              padding: '14px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#15803d'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#16a34a'}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;