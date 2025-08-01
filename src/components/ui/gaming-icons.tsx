import React from "react";

// Gaming-themed icons for FPS games
export const GamingIcons = {
  Target: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),

  Crosshair: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 3v6M12 15v6M3 12h6M15 12h6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),

  Shield: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M12 2L3 7v5c0 6 3 10 9 13 6-3 9-7 9-13V7l-9-5z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  ),

  Sword: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),

  Trophy: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path
        d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M6 9a6 6 0 0 0 12 0" stroke="currentColor" strokeWidth="2" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),

  Lightning: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="currentColor" />
    </svg>
  ),

  Star: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="currentColor"
      />
    </svg>
  ),
};

interface GamingIconProps {
  icon: keyof typeof GamingIcons;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const GamingIcon: React.FC<GamingIconProps> = ({
  icon,
  className = "",
  size = "md",
}) => {
  const IconComponent = GamingIcons[icon];

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  return (
    <div
      className={`inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}
    >
      <IconComponent />
    </div>
  );
};

// Gaming badge component
interface GamingBadgeProps {
  children: React.ReactNode;
  variant?: "red" | "blue" | "green" | "purple" | "orange" | "yellow";
  size?: "sm" | "md";
}

export const GamingBadge: React.FC<GamingBadgeProps> = ({
  children,
  variant = "red",
  size = "sm",
}) => {
  const getGradientClass = () => {
    switch (variant) {
      case "blue":
        return "gaming-gradient-blue";
      case "green":
        return "gaming-gradient-green";
      case "purple":
        return "gaming-gradient-purple";
      case "orange":
        return "gaming-gradient-orange";
      case "yellow":
        return "bg-yellow-400";
      case "red":
      default:
        return "gaming-gradient-red";
    }
  };

  const sizeClasses = size === "md" ? "px-4 py-2 text-sm" : "px-3 py-1 text-xs";

  return (
    <span
      className={`
      inline-flex items-center font-bold text-white rounded-full
      retro-3d-sm ${getGradientClass()} ${sizeClasses}
    `}
    >
      {children}
    </span>
  );
};

// Stats display component
interface GameStatsProps {
  value: string | number;
  label: string;
  icon?: keyof typeof GamingIcons;
  color?: "red" | "blue" | "green" | "purple" | "orange";
}

export const GameStats: React.FC<GameStatsProps> = ({
  value,
  label,
  icon,
  color = "red",
}) => {
  return (
    <div className="text-center">
      {icon && (
        <GamingIcon
          icon={icon}
          className={`mx-auto mb-2 text-${
            color === "red"
              ? "red"
              : color === "blue"
              ? "blue"
              : color === "green"
              ? "green"
              : color === "purple"
              ? "purple"
              : "orange"
          }-500`}
          size="lg"
        />
      )}
      <div className="text-2xl md:text-3xl font-bold retro-text-gaming mb-1">
        {value}
      </div>
      <div className="text-sm font-medium text-gray-600">{label}</div>
    </div>
  );
};
