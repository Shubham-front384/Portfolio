import "./style.scss";
import { projects } from "../data/projects";

const AllProject = () => {
  return (
    <section className="project-section">
      <div className="project-container">
        <h2>project</h2>
        <div className="projects">
          {projects.map((project) => (
            <div className="project" key={project.id}>

              <div className="project-img">
                <a href={project.liveLink} target="_blank">
                  <img src={project.image} alt={project.name} />
                </a>
              </div>

              <div className="project-info">
                <ul className="project-data">
                  <li className="project-name">
                    {project.name}
                  </li>
                  <li>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      github
                    </a>
                  </li>
                </ul>

                <ul className="project-language">
                  {project.language.map((lang, index) => (
                    <li className={`language ${lang.toLowerCase()}`} key={index}>
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllProject;
