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
    <div className="border-y border-jelly-bean-500 bg-jelly-bean-600 text-white drop-shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center px-5 py-10 md:px-10">
        <h1 className="overflow-hidden whitespace-nowrap pr-20 font-thin">
          Tech Stack
        </h1>
        <div className="group relative inline-flex overflow-hidden font-light [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]">
          <div className="flex animate-infinite-scroll gap-12 px-7 group-hover:paused md:gap-24 md:px-12 [&>*]:overflow-hidden [&>*]:whitespace-nowrap">
            {techStack.concat(techStack).map((tech, index) => (
              <p key={index}>{tech}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
