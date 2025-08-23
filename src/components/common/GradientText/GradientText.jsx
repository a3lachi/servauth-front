// src/components/common/GradientText/GradientText.js
import './GradientText.css';

const GradientText = ({ children, variant = 'primary', className = '', as: Component = 'span' }) => {
  return (
    <Component className={`gradient-text gradient-text--${variant} ${className}`}>
      {children}
    </Component>
  );
};

export default GradientText;