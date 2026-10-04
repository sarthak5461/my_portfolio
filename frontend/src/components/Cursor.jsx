import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState("default");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia("(hover: none)").matches;
    if (isTouch) {
      setHidden(true);
      return;
    }

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const interactiveSelectors = "a, button, [data-cursor='hover'], input, textarea";
    const onOver = (e) => {
      if (e.target.closest(interactiveSelectors)) setVariant("hover");
    };
    const onOut = (e) => {
      if (e.target.closest(interactiveSelectors)) setVariant("default");
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full bg-tomato mix-blend-difference"
        animate={{
          x: pos.x - (variant === "hover" ? 28 : 10),
          y: pos.y - (variant === "hover" ? 28 : 10),
          width: variant === "hover" ? 56 : 20,
          height: variant === "hover" ? 56 : 20,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
      />
    </>
  );
}
