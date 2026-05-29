// Ornamental section divider — references temple window lattice geometry
// Usage: <OrnamentDivider /> or <OrnamentDivider className="my-12" />

interface Props {
  className?: string;
}

export default function OrnamentDivider({ className = "my-12" }: Props) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-parchment-border" />
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 0.5L9.1 2.75V7.25L5 9.5L0.9 7.25V2.75L5 0.5Z"
          fill="#B56B45"
          fillOpacity="0.5"
        />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-parchment-border" />
    </div>
  );
}
