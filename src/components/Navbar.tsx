// import { useState } from "react";
import { NavLink } from "react-router-dom";
import UpArrow from "./icons/UpArrow";

const Navbar = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="glassify sticky top-0 z-10 border-b border-gray-200 bg-slate-100">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center justify-between py-2">
            <div>
              <a href="/" className="flex items-center font-bold">
                <img src="/avatar.png" className="h-auto max-h-10 pr-2" />
                Jolson Cruz
              </a>
            </div>

            {/* MOBILE MENU */}
            {/* <div
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 h-9 w-9 rounded-sm bg-slate-100 p-2 outline outline-1 outline-slate-300 hover:bg-slate-200 hover:bg-opacity-50 hover:outline-2 hover:outline-slate-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 h-9 w-9 rounded-sm bg-slate-200 p-2 outline outline-2 outline-slate-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}

              {mobileMenuOpen && (
                <div className="[&>*]:border-1 absolute left-0 right-0 top-14 border-b border-gray-200 bg-slate-300 drop-shadow-sm md:hidden [&>*]:border-b [&>*]:border-slate-50">
                  <NavLink
                    to="/"
                    className="block py-3 text-center text-slate-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="block py-3 text-center text-slate-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/projects"
                    className="block py-3 text-center text-slate-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </NavLink>
                  <a
                    href="/JolsonCruz_0524-FE.pdf"
                    className="block py-3 text-center text-slate-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CV
                  </a>
                  <NavLink
                    to="/contact"
                    className="block py-3 text-center text-slate-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </div>
              )}
            </div> */}

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
                About <UpArrow className="ml-1 size-2.5 stroke-[3]" />
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "navLinkActive" : "navLinkInactive"
                }
              >
                Projects <UpArrow className="ml-1 size-2.5 stroke-[3]" />
              </NavLink>
              <a
                href="/JolsonCruz_Resume.pdf"
                rel="nofollow"
                className="navLinkInactive"
              >
                CV <UpArrow className="ml-1 size-2.5 stroke-[3]" />
              </a>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "navLinkActive" : "navLinkInactive"
                }
              >
                Contact <UpArrow className="ml-1 size-2.5 stroke-[3]" />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
