import "./globals.css";
import { team, teamEdges } from "./lib/team.ts";
import { useEffect, useState } from "react";
import { FAQBackgroundEffects } from "./components/background.tsx";
import { LandingFooter } from "./components/footer.tsx";
import { Constellation } from "./components/constellation.tsx";
import { FAQ } from "./components/faq.tsx";
// import { useScroll } from "framer-motion";

function App() {
  const [teamIndex, setTeamIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const { scrollY, scrollYProgress } = useScroll();

  // console.log(scrollY, scrollYProgress);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <div className="w-full relative flex items-center justify-center radial">
        <button
          className={`absolute left-1/3 top-1/2 ${
            teamIndex === 0 ? "invisible" : ""
          }`}
          onClick={() => setTeamIndex(teamIndex - 1)}
        >
          &#8592;
        </button>

        <button
          className={`absolute top-1/2 right-1/3 ${
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
      <section className="relative flex w-[98vw] flex-col items-center justify-start overflow-hidden pb-40 font-normal md:pt-32 md:pb-24 md:text-md">
        <FAQBackgroundEffects />
        <div
          id="frequently-asked-questions"
          className="relative mx-4 flex max-w-[1048px] flex-col items-center justify-center font-normal md:mt-40 md:text-md"
        >
          <FAQ />
        </div>
        <LandingFooter />
      </section>
    </main>
  );
}

export default App;
