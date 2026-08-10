import type { CSSProperties } from "react";

// Shared icon helper — can be used in both server and client components
export function Icon({
  name,
  fill = false,
  size = 24,
  style: extraStyle,
}: {
  name: string;
  fill?: boolean;
  size?: number;
  style?: CSSProperties;
}) {
  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 1,
        ...extraStyle,
      }}
    >
      {name}
    </span>
  );
}
