import { NavLink } from "react-router-dom";

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
              <a href="https://example.com" className="navLinkInactive">
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
