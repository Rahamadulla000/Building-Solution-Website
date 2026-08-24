import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon, 
  onClick, 
  href, 
  type = 'button',
  className = '',
  ...props 
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: 'var(--radius-btn)',
    fontWeight: 600,
    transition: 'all var(--transition-normal)',
    textDecoration: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)'
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-secondary)',
      color: 'var(--color-white)',
      boxShadow: 'var(--shadow-glow)'
    },
    secondary: {
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-white)',
      boxShadow: 'var(--shadow-md)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: '2px solid var(--color-primary)'
    },
    whatsapp: {
      backgroundColor: 'var(--color-success)',
      color: 'var(--color-white)',
      boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)'
    }
  };

  const sizes = {
    sm: { padding: '8px 16px', fontSize: '14px' },
    md: { padding: '12px 24px', fontSize: '16px' },
    lg: { padding: '16px 32px', fontSize: '18px' }
  };

  const combinedStyle = {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size]
  };

  if (href) {
    return (
      <a href={href} style={combinedStyle} className={className} {...props}>
        {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} style={combinedStyle} className={className} {...props}>
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />}
      {children}
    </button>
  );
}
