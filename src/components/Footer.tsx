const Footer = () => {
  return (
    <>
      <nav className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex h-[23rem] items-start justify-between bg-white pt-20">
            <div className="w-2/3">
              <img src="src/assets/avatar.png" className="max-h-12 pr-2" />
              <h1 className="pt-2 text-2xl font-bold">
                Jolson's Personal Site
              </h1>
              <h2 className="text-md font-mono font-medium">
                Software Developer
              </h2>
            </div>
            <div className="flex w-1/3 justify-end space-x-40 px-2">
              <div>
                <h6 className="pb-2 text-lg font-semibold">Pages</h6>
                <div className="flex flex-col space-y-3 pt-2 text-zinc-400 underline-offset-8">
                  <a className="hover:underline active:underline" href="/">
                    Home
                  </a>
                  <a className="hover:underline active:underline" href="#">
                    About
                  </a>
                  <a className="hover:underline active:underline" href="#">
                    Projects
                  </a>
                  <a className="hover:underline active:underline" href="#">
                    CV
                  </a>
                  <a className="hover:underline active:underline" href="#">
                    Contact
                  </a>
                </div>
              </div>
              <div>
                <h6 className="pb-2 text-xl font-semibold">Connect</h6>
                <div className="flex flex-col space-y-3 pt-2 text-zinc-400 underline-offset-4">
                  <a className="hover:underline active:underline" href="#">
                    Email
                  </a>
                  <a className="hover:underline active:underline" href="#">
                    GitHub
                  </a>
                  <a className="hover:underline active:underline" href="#">
                    LinkedIn
                  </a>
                  <a className="hover:underline active:underline" href="#">
                    Instagram
                  </a>
                  <a className="hover:underline active:underline" href="#">
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-36 items-center justify-between border-t border-dashed text-sm">
            <div className="space-x-14 text-zinc-400">
              <a href="#">Imprint</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="space-x-20">
              <span>Copyright © jcz.dev 2024</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
