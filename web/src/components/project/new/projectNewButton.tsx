import { useState } from "react";
import ModalContainer from "../../shared/confirmationModal/modalContainer/ModalContainer";
import ProjectModal from "../createProjectModal/projectModal";
import './styles.scss';

type IProps ={
  onCreateProject:() => any
}

const ProjectNewButton = ({onCreateProject}:IProps) => {

  return (
    <div>
      <button id="new-project" className="button-form primary " onClick={onCreateProject}>
        Add Project
      </button>
    </div>
  );
}
export default (ProjectNewButton);
