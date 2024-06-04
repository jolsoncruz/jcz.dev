const Ticker = () => {
  const techStack = [
    "React",
    "Typescript",
    "Mongo",
    "Node.js",
    "Express",
    "Tailwind",
    "Bootstrap",
  ];

  return (
    <div className="border-y border-jelly-bean-700 bg-jelly-bean-600 text-white drop-shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center px-5 py-10 md:px-10">
        <h1 className="overflow-hidden whitespace-nowrap pr-20 font-thin">
          Tech Stack
        </h1>
        <div className="group relative flex overflow-hidden font-light">
          <div className="absolute z-10 h-full w-[100px] bg-gradient-to-r from-jelly-bean-600"></div>
          <div className="flex animate-infinite-scroll gap-12 group-hover:paused md:gap-24 [&>*]:overflow-hidden [&>*]:whitespace-nowrap">
            {techStack.concat(techStack).map((tech, index) => (
              <p key={index}>{tech}</p>
            ))}
          </div>

          <div className="absolute right-0 z-10 h-full w-[100px] bg-gradient-to-l from-jelly-bean-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
