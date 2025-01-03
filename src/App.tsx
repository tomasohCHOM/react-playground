import "./globals.css";
import { motion } from "framer-motion";
import { Coordinates, Team, team, teamEdges } from "./team";
import { useEffect, useState } from "react";

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
  const path = `M${start.x},${start.y} L ${end.x}, ${end.y}`;
  return (
    <motion.svg>
      <motion.path
        d={path}
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        className="stroke-slate-300"
      />
    </motion.svg>
  );
}

function Constellation({
  screenWidth,
  teamIndex,
  team,
  edges,
}: {
  screenWidth: number;
  teamIndex: number;
  team: Team[];
  edges: Edge[];
}) {
  return (
    <motion.svg
      key={teamIndex}
      width={screenWidth >= 1024 ? 1024 : 740}
      height={screenWidth >= 1024 ? 800 : 600}
      viewBox="0 0 1024 800"
      preserveAspectRatio="xMidYMid meet"
      initial={{ opacity: 0.15 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
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
  const [teamIndex, setTeamIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full relative">
      <button
        className={`absolute left-0 top-1/2 ${
          teamIndex === 0 ? "invisible" : ""
        }`}
        onClick={() => setTeamIndex(teamIndex - 1)}
      >
        &#8592;
      </button>

      <button
        className={`absolute top-1/2 right-0 ${
          teamIndex === team.length - 1 ? "invisible" : ""
        }`}
        onClick={() => setTeamIndex(teamIndex + 1)}
      >
        &#8594;
      </button>
      <Constellation
        screenWidth={screenWidth}
        teamIndex={teamIndex}
        team={team[teamIndex]}
        edges={teamEdges[teamIndex]}
      />
    </div>
  );
}

export default App;
