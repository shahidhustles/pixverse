"use client";

import React from "react";

interface Retro3DButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "menu" | "close" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export const Retro3DButton: React.FC<Retro3DButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm min-w-[60px]";
      case "lg":
        return "px-8 py-4 text-lg min-w-[120px]";
      case "md":
      default:
        return "px-6 py-3 text-base min-w-[80px]";
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "menu":
        return `
          bg-white text-black border-2 border-black
          shadow-[6px_6px_0px_#000000]
          hover:shadow-[8px_8px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]
          active:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px]
        `;
      case "close":
        return `
          bg-red-500 text-white border-2 border-black
          shadow-[6px_6px_0px_#000000]
          hover:shadow-[8px_8px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]
          active:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px]
        `;
      case "secondary":
        return `
          bg-blue-400 text-white border-2 border-black
          shadow-[6px_6px_0px_#000000]
          hover:shadow-[8px_8px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]
          active:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px]
        `;
      case "primary":
      default:
        return `
          bg-white text-black border-2 border-black
          shadow-[6px_6px_0px_#000000]
          hover:shadow-[8px_8px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]
          active:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px]
        `;
    }
  };

  const baseClasses = `
    inline-flex items-center justify-center
    font-black text-center
    rounded-lg
    transition-all duration-150 ease-out
    cursor-pointer
    focus:outline-none focus:ring-0
    uppercase tracking-wider
    ${getSizeClasses()}
    ${getVariantClasses()}
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
    ${className}
  `;

  return (
    <button className={baseClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Retro3DButton;
