import { projects } from "../Data/ProjectsData";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import "../Styles/Projects.css";

function ProjectsModule(props) {
  const [showProjectCard, setShowProjectCard] = useState({ display: "none" });
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState([]);
  const [link, setLink] = useState("");
  const [stack, setStack] = useState("");
  const [repo, setRepo] = useState("");

  function openProjectCard(project) {
    setShowProjectCard({ display: "block" });
    setTitle(project.title);
    setImage(project.img);
    setDescription(project.description);
    setLink(project.link);
    setStack(project.stack);
    setRepo(project.repo);
    props.disableScroll();
  }

  function closeProjectCard() {
    setShowProjectCard({ display: "none" });
    props.enableScroll();
  }

  return (
    <>
      <section id="projects">
        <h2>Projects</h2>
        <div className="flex flex-center flex-wrap">
          {projects.map((project) => {
            return (
              <div
                /* key={"project" + projects.indexOf(project)} */
                onClick={() => openProjectCard(project)}
                className="box flex flex-center flex-wrap align-center"
              >
                <img src={project.img} alt="" />
                <span className="project-name">{project.title}</span>
              </div>
            );
          })}
        </div>
      </section>
      <ProjectCard
        style={showProjectCard}
        close={closeProjectCard}
        title={title}
        img={image}
        description={description}
        stack={stack}
        link={link}
        repo={repo}
      />
    </>
  );
}

export default ProjectsModule;
