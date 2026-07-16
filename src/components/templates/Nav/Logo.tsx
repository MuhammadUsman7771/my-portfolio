import { memo, useId } from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  const gradientId = useId().replace(/:/g, "");

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 shrink-0 overflow-visible"
        fill="none"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="7"
            y1="7"
            x2="44"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="45%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          <filter
            id={`${gradientId}-glow`}
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                0 0 0 0 0.23
                0 0 0 0 0.51
                0 0 0 0 0.96
                0 0 0 0.35 0
              "
            />
          </filter>
        </defs>

        {/* Subtle glow */}
        <g
          opacity="0.55"
          filter={`url(#${gradientId}-glow)`}
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M7 31V8L26 22L45 8V31" />
          <path d="M18 25V33C18 41 22 45 29 45C36 45 40 41 40 33V25" />
        </g>

        {/* Main MU mark */}
        <g
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M7 31V8L26 22L45 8V31" />
          <path d="M18 25V33C18 41 22 45 29 45C36 45 40 41 40 33V25" />
        </g>

        <circle cx="47" cy="40" r="2.5" fill={`url(#${gradientId})`} />
      </svg>
    </span>
  );
};

export default memo(Logo);
