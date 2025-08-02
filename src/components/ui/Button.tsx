// /components/ui/Button.tsx
'use client';

import React from 'react';

// Define the props for the button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({ children, className = '', variant = 'primary', ...props }: ButtonProps) => {
  // Base class for all buttons
  const baseClasses = 'btn';

  // Define classes for each variant
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;