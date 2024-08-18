import { projectData } from "../../models/ProjectData";

interface CardsViewProps {
  showFeaturedOnly: boolean;
  children?: React.ReactNode;
}

const CardsView: React.FC<CardsViewProps> = ({
  showFeaturedOnly,
  children,
}) => {
  const filteredProjects = showFeaturedOnly
    ? projectData.filter((project) => project.featured)
    : projectData;

  return (
    <div>
      {children && <div>{children}</div>}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm"
          >
            <div className="flex flex-col md:justify-between lg:flex-row">
              <h2 className="pb-2 text-xl font-semibold">{project.title}</h2>
              <div className="[&>a]:cardButton flex space-x-2 pb-4">
                {project.demoLink && <a href={project.demoLink}>Live Demo</a>}
                {project.gitLink && <a href={project.gitLink}>Github Repo</a>}
                {project.articleLink && (
                  <a href={project.articleLink}>Article</a>
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
  );
};

export default CardsView;
