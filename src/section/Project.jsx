import "./style.scss";
import { projects } from "../data/projects";
import { Link } from "react-router";

const Project = () => {
  return (
    <section className="project-section" id="project">
      <div className="project-container">
        <h2>project</h2>
        <div className="projects">
          {projects.slice(0, 6).map((project) => (
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
        
        <div className="link">
          <Link to="/projects" className="all-project" onClick={() => window.scrollTo(0, 0)}>
            all project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
