"use client";

import type { CSSProperties, PointerEvent } from "react";

type GridStyle = CSSProperties & {
  "--grid-x"?: string;
  "--grid-y"?: string;
  "--grid-rx"?: string;
  "--grid-ry"?: string;
};

export default function ProductGridPlayground() {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 5;
    const rotateX = (0.5 - (y / bounds.height)) * 5;

    event.currentTarget.style.setProperty("--grid-x", `${x}px`);
    event.currentTarget.style.setProperty("--grid-y", `${y}px`);
    event.currentTarget.style.setProperty("--grid-rx", `${rotateX}deg`);
    event.currentTarget.style.setProperty("--grid-ry", `${rotateY}deg`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.removeProperty("--grid-rx");
    event.currentTarget.style.removeProperty("--grid-ry");
  };

  return (
    <div
      className="product-grid-playground"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ "--grid-x": "50%", "--grid-y": "50%", "--grid-rx": "0deg", "--grid-ry": "0deg" } as GridStyle}
      aria-hidden="true"
    >
      <span className="grid-float grid-float-a" />
      <span className="grid-float grid-float-b" />
      <span className="grid-float grid-float-c" />
    </div>
  );
}
