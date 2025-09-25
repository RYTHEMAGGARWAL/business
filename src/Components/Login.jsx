import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, Phone, Mail, Lock, User, Shield } from 'lucide-react';

const LoginPage = ({ onBack, onLogin }) => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (activeTab === 'login') {
      if (!formData.email && !formData.phone) {
        newErrors.email = 'Email or phone is required';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      }
    } else {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be 10 digits';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate successful login/registration
      onLogin && onLogin(formData);
    }
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setErrors({});
    setFormData({
      email: '',
      phone: '',
      password: '',
      name: '',
      confirmPassword: ''
    });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 75,
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
            onClick={onBack}
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
          <div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#111827',
              margin: 0
            }}>
              {activeTab === 'login' ? 'Welcome Back!' : 'Create Account'}
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              margin: 0
            }}>
              {activeTab === 'login' 
                ? 'Sign in to continue shopping' 
                : 'Join us for a better shopping experience'
              }
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div style={{
          padding: '20px 20px 0 20px'
        }}>
          <div style={{
            display: 'flex',
            backgroundColor: '#f3f4f6',
            borderRadius: '8px',
            padding: '4px'
          }}>
            <button
              onClick={() => switchTab('login')}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: activeTab === 'login' ? 'white' : 'transparent',
                color: activeTab === 'login' ? '#16a34a' : '#6b7280',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeTab === 'login' ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => switchTab('register')}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: activeTab === 'register' ? 'white' : 'transparent',
                color: activeTab === 'register' ? '#16a34a' : '#6b7280',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeTab === 'register' ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
              }}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
          {activeTab === 'register' && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '6px'
              }}>
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <User style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                  color: '#9ca3af'
                }} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '12px 12px 12px 44px',
                    border: errors.name ? '2px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => !errors.name && (e.target.style.borderColor = '#16a34a')}
                  onBlur={(e) => !errors.name && (e.target.style.borderColor = '#d1d5db')}
                />
              </div>
              {errors.name && (
                <p style={{
                  color: '#ef4444',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>{errors.name}</p>
              )}
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                color: '#9ca3af'
              }} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 44px',
                  border: errors.email ? '2px solid #ef4444' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => !errors.email && (e.target.style.borderColor = '#16a34a')}
                onBlur={(e) => !errors.email && (e.target.style.borderColor = '#d1d5db')}
              />
            </div>
            {errors.email && (
              <p style={{
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px',
                margin: '4px 0 0 0'
              }}>{errors.email}</p>
            )}
          </div>

          {activeTab === 'register' && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '6px'
              }}>
                Phone Number
              </label>
              <div style={{ position: 'relative' }}>
                <Phone style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                  color: '#9ca3af'
                }} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter 10-digit phone number"
                  style={{
                    width: '100%',
                    padding: '12px 12px 12px 44px',
                    border: errors.phone ? '2px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => !errors.phone && (e.target.style.borderColor = '#16a34a')}
                  onBlur={(e) => !errors.phone && (e.target.style.borderColor = '#d1d5db')}
                />
              </div>
              {errors.phone && (
                <p style={{
                  color: '#ef4444',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>{errors.phone}</p>
              )}
            </div>
          )}

          <div style={{ marginBottom: activeTab === 'register' ? '20px' : '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '6px'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                color: '#9ca3af'
              }} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '12px 44px 12px 44px',
                  border: errors.password ? '2px solid #ef4444' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => !errors.password && (e.target.style.borderColor = '#16a34a')}
                onBlur={(e) => !errors.password && (e.target.style.borderColor = '#d1d5db')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0'
                }}
              >
                {showPassword ? 
                  <EyeOff style={{ width: '20px', height: '20px', color: '#9ca3af' }} /> :
                  <Eye style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
                }
              </button>
            </div>
            {errors.password && (
              <p style={{
                color: '#ef4444',
                fontSize: '12px',
                marginTop: '4px',
                margin: '4px 0 0 0'
              }}>{errors.password}</p>
            )}
          </div>

          {activeTab === 'register' && (
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '6px'
              }}>
                Confirm Password
              </label>
              <div style={{ position: 'relative' }}>
                <Shield style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                  color: '#9ca3af'
                }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  style={{
                    width: '100%',
                    padding: '12px 12px 12px 44px',
                    border: errors.confirmPassword ? '2px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => !errors.confirmPassword && (e.target.style.borderColor = '#16a34a')}
                  onBlur={(e) => !errors.confirmPassword && (e.target.style.borderColor = '#d1d5db')}
                />
              </div>
              {errors.confirmPassword && (
                <p style={{
                  color: '#ef4444',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>{errors.confirmPassword}</p>
              )}
            </div>
          )}

          {activeTab === 'login' && (
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#374151'
              }}>
                <input
                  type="checkbox"
                  style={{
                    width: '16px',
                    height: '16px',
                    accentColor: '#16a34a'
                  }}
                />
                Remember me
              </label>
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#16a34a',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
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
              transition: 'background-color 0.2s',
              marginBottom: '20px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#15803d'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#16a34a'}
          >
            {activeTab === 'login' ? 'Sign In' : 'Create Account'}
          </button>

          {activeTab === 'register' && (
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              textAlign: 'center',
              lineHeight: '1.5',
              margin: 0
            }}>
              By creating an account, you agree to our{' '}
              <a href="#" style={{ color: '#16a34a', textDecoration: 'underline' }}>
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" style={{ color: '#16a34a', textDecoration: 'underline' }}>
                Privacy Policy
              </a>
            </p>
          )}
        </form>

        {/* Social Login Options */}
        {/* <div style={{
          padding: '0 20px 20px',
          borderTop: '1px solid #e5e7eb',
          marginTop: '20px',
          paddingTop: '20px'
        }}>
          <p style={{
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '14px',
            marginBottom: '16px'
          }}>
            Or continue with
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px'
          }}>
            <button
              type="button"
              style={{
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                backgroundColor: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                transition: 'border-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.borderColor = '#16a34a'}
              onMouseOut={(e) => e.target.style.borderColor = '#d1d5db'}
            >
              <span style={{ fontSize: '18px' }}>📱</span>
              Google
            </button>
            <button
              type="button"
              style={{
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                backgroundColor: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151',
                transition: 'border-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.borderColor = '#16a34a'}
              onMouseOut={(e) => e.target.style.borderColor = '#d1d5db'}
            >
              <span style={{ fontSize: '18px' }}>📘</span>
              Facebook
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;