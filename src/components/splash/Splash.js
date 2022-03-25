import React, { useEffect, useState } from "react";
import logo from "../../assets/Monogram-Logo-of-the-Letters-SL-Graphics-8105393.png";
import { motion } from "framer-motion";
const Splash = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 100) return;
    let intervalCount = setTimeout(() => setCount(count + 1), 30);
    return () => {
      clearInterval(intervalCount);
    };
  }, [count]);

  return (
    <motion.div
      className="splash"
        animate={{ opacity: [1, 0], display: "none" }}
        transition={{
          default: { duration: 0.3, delay: 6 },
          display: { delay: 6.5 },
        }}
    >
      <motion.div className="splash-container">
        <div className="logo-splash">
          <img src={logo} alt="logo-splash" />
        </div>
        <div
          className="pogress-bar"
          style={{ width:`${count}%` }}
        ></div>
        <motion.h3 className="percentage">{count}%</motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default Splash;
