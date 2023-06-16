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
    <motion.div
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ type: "spring", duration: 2, bounce: 0.5 }}
      ref={scrollRef}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
