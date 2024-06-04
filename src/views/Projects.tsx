const Projects = () => {
  const projects = [
    {
      title: "Diro's World",
      description:
        "Winner of HackDIRO Université de Montreal. A never-ending fantasy world role-playing game (RPG) that is personalized to you and your interests. Powered by Artificial Intelligence.",
      imageSrc: "/diro.gif",
      demoLink: "https://diro-world.vercel.app/",
      gitLink: "https://github.com/aryanxarora/diro-world",
      articleLink:
        "https://www.vaniercollege.qc.ca/newsroom/vanier-students-win-at-udm-hackathon-du-diro/",
    },
    {
      title: "HeyU",
      description:
        "A university-exclusive social media platform, inspired by Instagram, promoting a fun and inclusive environment for students to connect, network, and engage in relatable conversations.",
      imageSrc: "/heyu.png",
      demoLink: "https://heyu-jcz.vercel.app",
      gitLink: "https://github.com/jolsoncruz/heyu-socmed-app",
    },
    {
      title: "Mobility Invoicing",
      description:
        "Billing and invoicing app created for companies like Bell and Rogers to manage customer plans and payments.",
      imageSrc: "/mobinvoicing.png",
      demoLink: "https://mobility-invoicing.vercel.app/",
      gitLink: "https://github.com/jolsoncruz/mobility-invoicing",
    },
    {
      title: "DLSU Community Forum",
      description:
        "Engaging community forum designed for De La Salle University (DLSU) students to gain insights about professors before enrolling in their classes.",
      imageSrc: "/commforum.png",
      demoLink: "https://dlsu-commforum.onrender.com/",
      gitLink: "https://github.com/jolsoncruz/DLSU-Community-Forum",
    },
  ];

  return (
    <>
      <div className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-5 py-32">
          <div className="flex gap-5 pb-10">
            <h1 className="text-left text-2xl font-medium text-jelly-bean-400">
              Featured Projects
            </h1>
            <a
              className="content-center rounded-xl bg-slate-100 px-3 py-1 text-sm font-light outline outline-1 outline-slate-200 transition duration-200 ease-in-out hover:bg-jelly-bean-400 hover:text-white"
              href="https://github.com/jolsoncruz"
            >
              See More ↗
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg bg-slate-50 p-6 shadow-sm outline outline-1 outline-slate-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between">
                  <h2 className="pb-2 text-xl font-semibold">
                    {project.title}
                  </h2>
                  <div className="flex space-x-2 pb-4">
                    {project.demoLink && (
                      <a
                        className="content-center overflow-hidden whitespace-nowrap rounded-xl bg-slate-100 px-3 py-1 text-sm font-light outline outline-1 outline-slate-200 transition duration-200 ease-in-out hover:bg-jelly-bean-400 hover:text-white"
                        href={project.demoLink}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.gitLink && (
                      <a
                        className="content-center overflow-hidden whitespace-nowrap rounded-xl bg-slate-100 px-3 py-1 text-sm font-light outline outline-1 outline-slate-200 transition duration-200 ease-in-out hover:bg-jelly-bean-400 hover:text-white"
                        href={project.gitLink}
                      >
                        Github Repo
                      </a>
                    )}
                    {project.articleLink && (
                      <a
                        className="content-center overflow-hidden whitespace-nowrap rounded-xl bg-slate-100 px-3 py-1 text-sm font-light outline outline-1 outline-slate-200 transition duration-200 ease-in-out hover:bg-jelly-bean-400 hover:text-white"
                        href={project.articleLink}
                      >
                        Article
                      </a>
                    )}
                  </div>
                </div>
                <p className="pb-4 text-sm">{project.description}</p>
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
