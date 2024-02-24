const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 border-b border-gray-200 bg-slate-100 bg-opacity-30 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex h-14 items-center justify-between">
            <div>
              <a href="#" className="flex items-center font-bold">
                <img
                  src="src/assets/avatar.png"
                  className="h-auto max-h-10 pr-2"
                />
                jcz.dev
              </a>
            </div>
            <div className="space-x-5 text-zinc-400">
              <a href="#" className="font-semibold text-teal-900">
                Home
              </a>
              <a href="#" className="hover:text-teal-800">
                About ↗
              </a>
              <a href="#" className="hover:text-teal-800">
                Projects ↗
              </a>
              <a href="#" className="hover:text-teal-800">
                CV ↗
              </a>
              <a href="#" className="hover:text-teal-800">
                Contact ↗
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
