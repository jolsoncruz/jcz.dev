const Ticker = () => {
  return (
    <div className="border-y border-teal-950 bg-teal-900 text-white drop-shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center px-5 py-10 md:px-10">
        <h1 className="overflow-hidden whitespace-nowrap pr-20 font-thin">
          Tech Stack
        </h1>
        <div className="group relative flex overflow-hidden font-light">
          <div className="absolute z-10 h-full w-[100px] bg-gradient-to-r from-teal-900"></div>
          <div className="flex animate-infinite-scroll gap-24 group-hover:paused [&>*]:overflow-hidden [&>*]:whitespace-nowrap">
            <p>React</p>
            <p>Typescript</p>
            <p>Mongo</p>
            <p>Node.js</p>
            <p>Express</p>
            <p>Tailwind</p>
            <p>Bootstrap</p>
            <p>React</p>
            <p>Typescript</p>
            <p>Mongo</p>
            <p>Node.js</p>
            <p>Express</p>
            <p>Tailwind</p>
            <p>Bootstrap</p>
          </div>

          <div className="absolute right-0 z-10 h-full w-[100px] bg-gradient-to-l from-teal-900"></div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
