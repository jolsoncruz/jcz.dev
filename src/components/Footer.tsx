import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav className="border-t border-gray-200 bg-white">
        <div className="px-10 md:mx-auto md:max-w-6xl md:px-8">
          <div className="pt-20 md:flex md:items-start md:justify-between md:pb-20">
            <div className="md:w-2/3">
              <img src="/avatar.png" className="max-h-12" />
              <h1 className="pt-2 text-2xl font-bold">Jolson Cruz</h1>
              <h2 className="text-md font-mono font-medium">
                Software Developer
              </h2>
            </div>
            <div className="flex space-x-28 py-14 md:w-1/3 md:justify-end md:space-x-40 md:px-2 md:py-0">
              <div>
                <h6 className="pb-2 text-xl font-semibold">Pages</h6>
                <div className="flex flex-col space-y-3 pt-2 text-zinc-400 decoration-teal-800 underline-offset-8">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                  <Link to="/projects" className="hover:underline">
                    Projects
                  </Link>
                  <a className="hover:underline" href="/JolsonCruz_0524-FE.pdf">
                    CV
                  </a>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </div>
              </div>
              <div>
                <h6 className="pb-2 text-xl font-semibold">Connect</h6>
                <div className="flex flex-col space-y-3 pt-2 text-zinc-400 decoration-teal-800 underline-offset-8">
                  <a
                    className="hover:underline"
                    href="mailto:me@jolsoncruz.com"
                  >
                    Email
                  </a>
                  <a
                    className="hover:underline"
                    href="https://github.com/jolsoncruz"
                  >
                    GitHub
                  </a>
                  <a
                    className="hover:underline"
                    href="https://www.linkedin.com/in/jolsoncruz/"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="hover:underline"
                    href="https://www.instagram.com/jolsoncruz"
                  >
                    Instagram
                  </a>
                  <a
                    className="hover:underline"
                    href="https://twitter.com/jolsoncruz"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-dashed py-14 md:flex md:justify-between md:text-xs">
            <span className="text-xs text-zinc-400">
              Copyright © jcz.dev 2024
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
