import "./globals.css";
import { motion } from "framer-motion";
import { Coordinates, team } from "./team";

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
  const edges: Edge[] = [
    { start: { x: 650, y: 270 }, end: { x: 750, y: 550 } },
    { start: { x: 750, y: 550 }, end: { x: 250, y: 550 } },
    { start: { x: 400, y: 100 }, end: { x: 250, y: 550 } },
    { start: { x: 400, y: 100 }, end: { x: 650, y: 270 } },
  ];

  return (
    <motion.svg width={1024} height={720}>
      {edges.map(({ start, end }, i) => {
        return <LineConnector key={"Line " + i} start={start} end={end} />;
      })}
      {team.map((officer) => (
        <a href={officer.href} key={officer.id}>
          <motion.svg
            whileHover="hover"
            initial="initial"
            style={{ overflow: "visible" }}
          >
            {/* Officer Image */}
            <defs>
              <clipPath id={`clip-circle-${officer.id}`}>
                <circle cx={officer.vertex.x} cy={officer.vertex.y} r={32} />
              </clipPath>
            </defs>
            <image
              x={officer.vertex.x - 35}
              y={officer.vertex.y - 35}
              width={70}
              height={70}
              href="/capybara.jpg"
              clipPath={`url(#clip-circle-${officer.id})`}
            />
            {/* Name & Role */}
            <motion.text
              x={officer.vertex.x}
              y={officer.vertex.y + (officer.textBelow ? 55 : -60)}
              textAnchor="middle"
              className="fill-white"
            >
              {officer.name}
            </motion.text>
            <motion.text
              x={officer.vertex.x}
              y={officer.vertex.y + (officer.textBelow ? 55 : -60) + 18}
              textAnchor="middle"
              className="fill-white text-sm"
            >
              {officer.role}
            </motion.text>
            <motion.circle
              r={40}
              cx={officer.vertex.x}
              cy={officer.vertex.y}
              strokeWidth={2}
              variants={{
                initial: { pathLength: 0 },
                hover: { pathLength: 1.05 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fill-none stroke-white"
            />
          </motion.svg>
        </a>
      ))}
    </motion.svg>
  );
}

function App() {
  return <Constellation />;
}

export default App;
