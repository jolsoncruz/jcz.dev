import { Hero, Ticker } from "@/components";
import Newsletter from "@/components/Newsletter";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Projects />
      <Newsletter />
    </>
  );
};

export default Home;
