import { CardsView } from "@/components";

const Projects = () => {
  return (
    <CardsView showFeaturedOnly={false}>
      <div className="flex gap-5 pb-10">
        <h1 className="text-left text-2xl font-medium text-jelly-bean-400">
          Projects
        </h1>
        <a className="cardButton" href="https://github.com/jolsoncruz">
          Follow me on GitHub ↗
        </a>
      </div>
    </CardsView>
  );
};

export default Projects;
