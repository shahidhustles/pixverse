import React from "react";

interface RetroCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "black" | "red" | "blue" | "green" | "purple" | "orange" | "yellow";
  interactive?: boolean;
  background?: string;
}

export const RetroCard: React.FC<RetroCardProps> = ({
  children,
  className = "",
  variant = "black",
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

  const baseClasses = `
    ${background} retro-rounded
    ${getVariantClass()}
    ${interactive ? "retro-3d-interactive" : ""}
    ${className}
  `;

  return <div className={baseClasses}>{children}</div>;
};
