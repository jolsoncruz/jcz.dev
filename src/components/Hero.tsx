const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="bg-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-20">
          <img
            src="avatar.png"
            alt="Jolson Cruz"
            className="h-40 w-40 rounded-full drop-shadow-sm"
          />
          <h1 className="pt-3 tracking-wider">Hello, I'm</h1>
          <h1 className="text-7xl font-bold tracking-tighter">Jolson Cruz</h1>
          <h2 className="animate-typing-blink border-r-4 border-r-teal-500 pr-3 font-mono text-4xl tracking-tighter">
            Full-Stack Software Developer
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
