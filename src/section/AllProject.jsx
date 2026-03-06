import { useState } from "react";
import { projects } from "../data/projects";

const AllProject = () => {
  const filters = ["all", "html", "css", "js", "react", "node", "gsap"];
  
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.language.some((lang) =>
            lang.toLowerCase().includes(activeFilter)
          )
        );

  return (
    <section className="project-section">
      <div className="project-container">
        <h2>all projects</h2>

        {/* FILTER BUTTONS */}
        <div className="project-filter">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="projects">
          {filteredProjects.map((project) => (
            <div className="project" key={project.id}>
              <div className="project-img">
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.name} />
                </a>
              </div>

              <div className="project-info">
                <ul className="project-data">
                  <li className="project-name">{project.name}</li>
                  <li>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      github
                    </a>
                  </li>
                </ul>

                <ul className="project-language">
                  {project.language.map((lang, index) => (
                    <li
                      className={`language ${lang.toLowerCase()}`}
                      key={index}
                    >
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
