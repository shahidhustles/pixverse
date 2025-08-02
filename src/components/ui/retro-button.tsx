"use client";

import React from "react";

interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export const RetroButton: React.FC<RetroButtonProps> = ({
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
        return "px-4 py-2 text-sm";
      case "lg":
        return "px-8 py-4 text-lg";
      case "md":
      default:
        return "px-6 py-3 text-base";
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case "secondary":
        return "retro-btn-secondary";
      case "outline":
        return "retro-btn-outline";
      case "primary":
      default:
        return "retro-btn-primary";
    }
  };

  const baseClasses = `
    retro-btn retro-3d-interactive retro-rounded
    ${getVariantClass()} ${getSizeClasses()} ${className}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  return (
    <button className={baseClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
