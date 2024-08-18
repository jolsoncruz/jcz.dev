import {
  Navbar,
  Hero,
  Ticker,
  Newsletter,
  CardsView,
  Footer,
} from "@/components";
import About from "./About";
import UpArrow from "@/components/icons/UpArrow";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <div className="bg-zinc-50 px-7 py-32">
        <div className="mx-auto max-w-6xl">
          <About />
          <CardsView showFeaturedOnly={true}>
            <div className="flex gap-5 pb-10 pt-20">
              <h1 className="text-left text-2xl font-medium text-jelly-bean-400">
                Featured Projects
              </h1>
              <a className="cardButton" href="/projects">
                See More <UpArrow className="ml-1 size-3 stroke-[2]" />
              </a>
            </div>
          </CardsView>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
