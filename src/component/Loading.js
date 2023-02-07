import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as KaiserloweLogo } from "../asset/kaiserlowe.svg";
import StyledLoading from "../styles/StyledLoading";

const Loading = () => {
  return (
    <StyledLoading>
      <motion.div
        animate={{ scale: [1, 2] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          duration: 3,
        }}
      >
        <KaiserloweLogo />
      </motion.div>
    </StyledLoading>
  );
};

export default Loading;
