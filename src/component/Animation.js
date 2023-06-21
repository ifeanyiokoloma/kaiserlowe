import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Animation = ({ children }) => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true });

  return (
    <motion.div
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 2 }}
      ref={scrollRef}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
