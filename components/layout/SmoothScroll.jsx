"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.07, 
      duration: 1.5, 
      smoothTouch: true,
      wheelMultiplier: 0.5, // Reduced from 1.1 to 0.7 to slow down physical scroll distance
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    }}>
      {children}
    </ReactLenis>
  );
}
