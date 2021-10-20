import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WithView = ({ children, animation, initial, variants, fullWidth }) => {
  const control = useAnimation();
  const { inView, ref } = useInView();
  if (inView) {
    control.start(animation);
  }
  return (
    <motion.div
      ref={ref}
      initial={initial}
      variants={variants}
      animate={control}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </motion.div>
  );
};

export default WithView;
