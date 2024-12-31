import "./globals.css";
import { motion } from "framer-motion";

interface Coordinates {
  x: number;
  y: number;
}

interface Edge {
  start: Coordinates;
  end: Coordinates;
}

function LineConnector({
  start,
  end,
}: {
  start: Coordinates;
  end: Coordinates;
}) {
  const path = `M${start.x},${start.y} L ${end.x}, ${end.y}}`;
  return (
    <motion.svg>
      <motion.path
        d={path}
        stroke="white"
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.svg>
  );
}

function Constellation() {
  const circlePositions: Coordinates[] = [
    { x: 650, y: 270 },
    { x: 750, y: 550 },
    { x: 250, y: 550 },
    { x: 400, y: 100 },
  ];
  const edges: Edge[] = [
    { start: { x: 650, y: 270 }, end: { x: 750, y: 550 } },
    { start: { x: 750, y: 550 }, end: { x: 250, y: 550 } },
    { start: { x: 400, y: 100 }, end: { x: 250, y: 550 } },
    { start: { x: 400, y: 100 }, end: { x: 650, y: 270 } },
  ];

  return (
    <motion.svg width={1024} height={720}>
      {circlePositions.map(({ x, y }, i) => (
        <circle
          key={"Circle " + i}
          cx={x}
          cy={y}
          r={35}
          className="fill-white"
        />
      ))}
      {edges.map(({ start, end }, i) => {
        return <LineConnector key={"Line " + i} start={start} end={end} />;
      })}
    </motion.svg>
  );
}

function App() {
  return <Constellation />;
}

export default App;
