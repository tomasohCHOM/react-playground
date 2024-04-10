import { useEffect, useState } from "react";
import "./globals.css";
import { motion } from "framer-motion";

const numberOfDots = 70;

function createPositions(maxWidth: number) {
  return Array.from({ length: numberOfDots }, () => [
    Math.floor(Math.random() * maxWidth),
    Math.floor(Math.random() * 400) + 200,
  ]);
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function App() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const positions = createPositions(windowDimensions.width);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div className="fixed flex w-full h-screen items-center justify-center">
      <motion.svg className="w-full h-full">
        {positions.map((pos, i) => (
          <motion.circle
            key={`circle${i}`}
            cx={pos[0]}
            cy={pos[1]}
            r="2"
            fill="#ffffff"
            stroke="#ffffff"
            className="opacity-50"
          />
        ))}
      </motion.svg>
    </motion.div>
  );
}

export default App;
