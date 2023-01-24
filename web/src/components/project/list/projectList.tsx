import { IProject } from "../../../network/services/project/project.service";
import { ProjectItem } from "../item";
import "./styles.scss";
import { connect } from "react-redux";
import { contextApplicationStatus } from "../../../store/selectors";
import { RootState } from "../../../store/store";
import { IStoreDispatchProps } from "../../../store/storeComponent";
import { LoadingSpinner } from "../../shared/loadingSpinner";

interface IProps extends IStoreDispatchProps {
  openModal: (p: IProject) => void,
  openEditModal: (p: IProject) => void,
  data: IProject[],
  isLoading: boolean
}

export const ProjectList = ({ openModal, openEditModal, data, isLoading }: IProps) => {

  return (
    <div id="list-projects">
      {isLoading ? <LoadingSpinner /> : (
        <>
          {data?.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              deleteConfirmation={openModal}
              onEditProject={openEditModal}
        />
      ))}


        </>
      )}
     
      {!data?.length && <div>No projects were found matching your search</div>}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  appStatus: contextApplicationStatus(state),
});

export default connect(mapStateToProps)(ProjectList);