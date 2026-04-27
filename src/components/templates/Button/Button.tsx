import { motion } from "framer-motion";
import { memo } from "react";
import { ButtonProps } from "../../types/type";

const Button = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  children,
  className = "",
  onClick,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:bg-primary-700 focus:ring-primary-500",
    secondary:
      "bg-gradient-to-r from-secondary-500 to-primary-500 text-white hover:bg-secondary-700 focus:ring-secondary-500",
    outline:
      "border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-primary-500",
    ghost:
      "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-primary-500",
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-2 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-5 py-3 gap-2.5",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </motion.button>
  );
};

export default memo(Button);
