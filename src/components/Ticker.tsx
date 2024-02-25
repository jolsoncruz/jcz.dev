const Ticker = () => {
  return (
    <div className="border-y border-teal-950 bg-teal-900 text-white drop-shadow-sm">
      <div className="flex w-full max-w-full justify-center py-10">
        <h1 className="pr-10 font-thin">Tech Stack</h1>
        <div className="relative flex gap-24 overflow-hidden font-light">
          <div className="z-1 absolute h-full w-[100px] bg-gradient-to-r from-teal-900"></div>
          <p>React</p>
          <p>Typescript</p>
          <p>Mongo</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>Tailwind</p>
          <p>Bootstrap</p>
          <div className="z-1 absolute right-0 h-full w-[100px] bg-gradient-to-l from-teal-900"></div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
