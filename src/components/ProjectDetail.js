import { Fragment, useEffect, useState } from "react";
// import ReactModal from "react-modal";
import ReactPlayer from "react-player";

import projectDetailStyles from "./ProjectDetail.module.css";
import { PROJECT_LISTS } from "./ProjectLists";
import Modal from "./UI/Modal";

// ReactModal.setAppElement("#overlays");

const ProjectDetail = (props) => {
  const [isModalOn, setIsModalOn] = useState(true);
  const [projectItem, setProjectItem] = useState({});

  const closeModalHandler = () => {
    setIsModalOn(false);
    props.onShowProjectDetail(false);
  };

  // let projectItem;
  // PROJECT_LISTS.forEach((project) => {
  //   if (project.id === props.projectId) {
  //     projectItem = project;
  //   }
  // });

  useEffect(() => {
    const fetchProject = () => {
      try {
        PROJECT_LISTS.forEach((project) => {
          if (project.id === props.projectId) {
            setProjectItem(project);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchProject();
  }, []);

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
          USED TECHNOLOGIES (Packeges, Libraries, etc)
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
