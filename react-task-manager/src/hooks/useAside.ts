import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function useAside() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const asideElement = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(asideElement.current, {
        x: isAsideOpen ? 0 : "100%",
        duration: 0.4,
        ease: "power2.out",
      });
    },
    {
      dependencies: [isAsideOpen],
    },
  );

  const toggleAside = () => {
    setIsAsideOpen((prev) => !prev);
  };

  return {
    asideElement,
    isAsideOpen,
    toggleAside,
  };
}
