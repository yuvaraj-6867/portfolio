// src/components/SwagLabsLogo.tsx
import React from "react";

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const SwagLabsLogo: React.FC<SVGProps> = ({ size = 80, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="#EB0A1E" />
      
      {/* Text elements */}
      <path
        d="M30 40H70V45H30V40Z"
        fill="white"
      />
      <path
        d="M30 50H70V55H30V50Z"
        fill="white"
      />
      <path
        d="M30 60H70V65H30V60Z"
        fill="white"
      />
      
      {/* Optional: Add the Swag Labs text if needed */}
      <text
        x="50"
        y="85"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontFamily="Arial, sans-serif"
      >
        SWAG LABS
      </text>
    </svg>
  );
};

export default SwagLabsLogo;