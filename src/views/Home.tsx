import {
  Navbar,
  Hero,
  Ticker,
  Newsletter,
  CardsView,
  Footer,
} from "@/components";
import About from "./About";

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
              <a
                className="border-1 content-center rounded-xl border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-light transition duration-200 ease-in-out hover:bg-jelly-bean-400 hover:text-white"
                href="/projects"
              >
                See More ↗
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
