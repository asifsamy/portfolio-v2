import { ImZoomIn } from "react-icons/im";

import projectStyles from "./Projects.module.css";
import Card from "./UI/Card";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

import { PROJECT_LISTS } from "./ProjectLists";
import FilterButton from "./UI/FilterButton";

const allCategories = [
  "All",
  ...new Set(PROJECT_LISTS.map((project) => project.category)),
];

let projectId;
let activeButton = "All";

const Projects = () => {
  const [showProjectDetail, setShowProjectDetail] = useState(false);
  const [projectLists, setProjectLists] = useState(PROJECT_LISTS);
  // const [buttons, setButtons] = useState(allCategories);

  const filterHandler = (button) => {
    activeButton = button;
    if (button === "All") {
      setProjectLists(PROJECT_LISTS);
      return;
    }

    const filteredProjects = PROJECT_LISTS.filter(
      (project) => project.category === button
    );
    setProjectLists(filteredProjects);
  };

  const projectDetailHandler = (id) => {
    setShowProjectDetail(true);
    projectId = id;
  };

  const ProjectItem = (props) => {
    let descriptionShort = props.description.split(" ");
    descriptionShort = descriptionShort.splice(0, 14).join(" ");
    descriptionShort = descriptionShort + " . . .";

    return (
      <Card classProps={projectStyles.projectStyle}>
        <div
          className={projectStyles.content}
          onClick={() => projectDetailHandler(props.id)}
        >
          <div className="centered">
            <img src={props.image} alt="Project Image" />
          </div>
          <div className="centered">
            <div className={projectStyles.zoomIn}>
              <ImZoomIn />
            </div>
          </div>
          <h5 className="centered">{props.title}</h5>
          <p>{descriptionShort}</p>
        </div>
      </Card>
    );
  };

  const currentProjectLists = projectLists.map((project) => (
    <ProjectItem
      key={project.id}
      id={project.id}
      title={project.title}
      image={project.image}
      description={project.description}
    />
  ));

  return (
    <section className={projectStyles.projects} id="projects">
      {showProjectDetail && (
        <ProjectDetail
          onShowProjectDetail={setShowProjectDetail}
          projectId={projectId}
        />
      )}
      <h1 className="centered">PROJECTS</h1>
      <FilterButton
        button={allCategories}
        filter={filterHandler}
        activeButton={activeButton}
      />
      <div className={projectStyles.items}>{currentProjectLists}</div>
    </section>
  );
};

export default Projects;
