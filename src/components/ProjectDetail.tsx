import { Fragment, useState } from "react";
import ReactPlayer from "react-player";

import projectDetailStyles from "./ProjectDetail.module.css";
import { PROJECT_LISTS } from "./ProjectLists";
import Modal from "./UI/Modal";

let projectItem: any;

const ProjectDetail: React.FC<{
  projectId: string;
  onShowProjectDetail: any;
}> = (props) => {
  const [isModalOn, setIsModalOn] = useState(true);
  // const [projectItem, setProjectItem] = useState<object>({});

  const closeModalHandler = () => {
    setIsModalOn(false);
    props.onShowProjectDetail(false);
  };

  PROJECT_LISTS.forEach((project) => {
    if (project.id === props.projectId) {
      projectItem = project;
    }
  });

  const projectContent = (
    <div className={projectDetailStyles["project-item"]}>
      <h1 className="centered">{projectItem.title}</h1>
      <p className="centered">{projectItem.description}</p>
      {projectItem.video_url && (
        <div className={`${"centered"} ${projectDetailStyles.site}`}>
          <ReactPlayer controls height="300px" url={projectItem.video_url} />
        </div>
      )}
      <div className={projectDetailStyles["tech-spec"]}>
        <h4 className="centered">
          USED TECHNOLOGIES (Packeges, Libraries, Concepts etc)
        </h4>
        <p className="centered">{projectItem.libraries}</p>
      </div>
      <div className={`${"centered"} ${projectDetailStyles.site}`}>
        <h4>DEMO:</h4>{" "}
        {projectItem.demo ? (
          <a href={projectItem.demo} target="_blank">
            {projectItem.demo}
          </a>
        ) : (
          "NOT AVAILABLE"
        )}
      </div>
      <div className={`${"centered"} ${projectDetailStyles.site}`}>
        <h4>SOURCE CODE:</h4>{" "}
        {projectItem.source_code ? (
          <a href={projectItem.source_code} target="_blank">
            {projectItem.source_code}
          </a>
        ) : (
          "NOT AVAILABLE"
        )}
      </div>
      <div className="centered">
        <button className={projectDetailStyles.btn} onClick={closeModalHandler}>
          Close
        </button>
      </div>
    </div>
  );

  return (
    <Fragment>
      {isModalOn && <Modal onClose={closeModalHandler}>{projectContent}</Modal>}
    </Fragment>
  );
};

export default ProjectDetail;
