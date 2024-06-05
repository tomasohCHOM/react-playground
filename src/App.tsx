import Starfield from "./Starfield";
import "./globals.css";

function App() {
  return (
    <>
      <Starfield />
      <h1 className="relative text-7xl font-bold">
        Tomas <span className="text-[rgb(34,193,153)]">Oh</span>
        <img className="absolute w-28 top-0 -right-1/3" src="/sephiroth.gif" />
      </h1>
    </>
  );
}

export default App;
