import { useInView, motion } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

const Animation = ({ children }) => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <motion.div style={{ opacity: isInView ? 1 : 0, transition: "2s" }} ref={scrollRef}>
      {children}
    </motion.div>
  );
};

export default Animation;
