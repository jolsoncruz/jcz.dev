const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      {/* NOTE: probably increase the py? */}
      <div className="mx-6xl flex flex-col items-center bg-slate-100 px-5 py-20">
        <img
          src="src/assets/avatar.png"
          alt="Jolson Cruz"
          className="h-40 w-40 drop-shadow-sm"
        />
        <h1 className="pt-3 tracking-wider">Hello, I'm</h1>
        <h1 className="text-7xl font-bold tracking-tighter">Jolson Cruz</h1>
        <h2 className="animate-typing-blink border-r-4 border-r-teal-700 pr-3 font-mono text-4xl tracking-tighter">
          Full-Stack Software Developer
        </h2>
      </div>
    </>
  );
};

export default Hero;
