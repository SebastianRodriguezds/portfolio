import { Project } from "../models/project";

interface Props {
  projects: Project[];
}

export default function ProjectsList({ projects }: Props) {
  return (
    <div id="projects" className="projectsList_container">
      <h2 className="projectsList_container-title">Projects</h2>
      <div className="projectsList-items">
        {projects.length > 0 ? (
          projects.map((pro) => (
            <div key={pro.id} className="project-item">
              <a
                href={pro.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <div className="project-image-container">
                  <img
                    src={`/imgProjects/${pro.imageUrl}`}
                    alt={pro.description}
                    className="project-img"
                  />
                  <div className="project-description">
                    <p>{pro.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
}
