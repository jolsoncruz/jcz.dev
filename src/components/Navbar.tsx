import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 border-b border-gray-200 bg-slate-100 bg-opacity-30 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center justify-between py-2">
            <div>
              <a href="#" className="flex items-center font-bold">
                <img src="/avatar.png" className="h-auto max-h-10 pr-2" />
                jcz.dev
              </a>
            </div>
            {/* TODO: Add mobile menu */}
            <div className="hidden md:flex md:space-x-5 md:text-zinc-400">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navLinkActive" : "navLinkInactive"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "navLinkActive" : "navLinkInactive"
                }
              >
                About ↗
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "navLinkActive" : "navLinkInactive"
                }
              >
                Projects ↗
              </NavLink>
              <a href="/JolsonCruz_0524-FE.pdf" className="navLinkInactive">
                CV ↗
              </a>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "navLinkActive" : "navLinkInactive"
                }
              >
                Contact ↗
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
