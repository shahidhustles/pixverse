import React from "react";

interface RetroCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "black" | "red" | "blue" | "green" | "purple" | "orange" | "yellow";
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  background?: string;
}

export const RetroCard: React.FC<RetroCardProps> = ({
  children,
  className = "",
  variant = "black",
  size = "md",
  interactive = false,
  background = "gaming-bg-card",
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case "red":
        return "retro-3d-red";
      case "blue":
        return "retro-3d-blue";
      case "green":
        return "retro-3d-green";
      case "purple":
        return "retro-3d-purple";
      case "orange":
        return "retro-3d-orange";
      case "yellow":
        return "retro-3d-yellow";
      case "black":
      default:
        return "retro-3d";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "retro-3d-sm";
      case "lg":
        return "retro-3d-lg";
      case "md":
      default:
        return "retro-3d";
    }
  };

  const baseClasses = `
    ${background} retro-rounded
    ${getVariantClass()}
    ${interactive ? "retro-3d-interactive" : ""}
    ${className}
  `;

  return <div className={baseClasses}>{children}</div>;
};
