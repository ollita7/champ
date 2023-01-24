import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProjectModal from "../../components/project/createProjectModal/projectModal";
import { ProjectList } from "../../components/project/list";
import { ProjectNewButton } from "../../components/project/new";
import Search from "../../components/project/search/search";
import { ConfirmationModal } from "../../components/shared/confirmationModal";
import ModalContainer from "../../components/shared/confirmationModal/modalContainer/ModalContainer";
import { LoadingSpinner } from "../../components/shared/loadingSpinner";
import { PaginationComponent } from "../../components/shared/pagination/paginationComponent";
import { IProject, IProjectQueryParams, useDeleteProject, useList } from "../../network/services/project/project.service";
import { IContextApplication, setContextApplicationStatus } from "../../store/reducers/contextApplication";
import { contextApplicationStatus } from "../../store/selectors";
import { RootState } from "../../store/store";
import { IStoreDispatchProps } from "../../store/storeComponent";
import "./styles.scss";

interface IProps extends IStoreDispatchProps {
  appStatus: IContextApplication;
}

const Projects = ({ dispatch, appStatus }: IProps) => {
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [showEditProjectModal, setShowEditProjectModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<IProject | undefined>(
    undefined
  );
  const [open, setOpen] = useState(false);
  const remove = useDeleteProject();
  const defaultValuesPagination = { size: 8, page: 1, criteria: '' };
  const [filter, setFilter] = useState<IProjectQueryParams>(defaultValuesPagination);

  const { data, isLoading, refetch } = useList(filter);

  useEffect(() => {
    if (appStatus.isNeededUpdateProjects) {
      refetch();
      dispatch(setContextApplicationStatus({ isNeededUpdateProjects: false }))
    }
  }, [appStatus.isNeededUpdateProjects]);

  const handleFilter = (value: IProjectQueryParams) => {
    const filter: IProjectQueryParams = {
      size: value.size ? value.size : defaultValuesPagination.size,
      criteria: value.criteria ? value.criteria : defaultValuesPagination.criteria,
      page: value.page ? value.page : defaultValuesPagination.page
    }
    setFilter(filter);
  }

  const onShowCreateProjectModal = () => {
    setShowCreateProjectModal((prev) => !prev);
  }
  const onShowEditProjectModal = () => {
    setShowEditProjectModal((prev) => !prev);
  };

  const openEditModal = (p: IProject) => {
    setCurrentProject(p);
    onShowEditProjectModal();
  };

  const openModal = (p: IProject) => {
    setOpen(true);
    setCurrentProject(p);
  };

  const closeModal = () => {
    setOpen(false);
    setCurrentProject(undefined);
  };

  const deleteProject = () => {
    const id: string = currentProject?._id ? currentProject?._id : "";
    remove.mutate(id, {
      onSuccess: async () => {
        dispatch(setContextApplicationStatus({ isNeededUpdateProjects: true }));
        setOpen(false)
      },
    });
  };


  return (
    <div id="projects">
      <div className="project-list-header">
        <Search handleFilter={handleFilter} />
        <ProjectNewButton onCreateProject={onShowCreateProjectModal} />
      </div>

      {isLoading ? <LoadingSpinner /> : (
        <>
          <ProjectList openEditModal={openEditModal} openModal={openModal} data={data.result} isLoading={isLoading} />
          {data.total > 1 &&
            <PaginationComponent page={filter.page ? filter.page : 1} count={data.total} onSetFilter={handleFilter} />
          }

        </>
      )}

      <ConfirmationModal
        title="Delete Project"
        text={
          "Do you want to delete the project " + currentProject?.name + " ?"
        }
        open={open}
        confirmation={deleteProject}
        cancel={closeModal}
      ></ConfirmationModal>

      {showCreateProjectModal && <ModalContainer onShowModal={onShowCreateProjectModal}>
        <ProjectModal onShowModal={onShowCreateProjectModal} />
      </ModalContainer>}

      {showEditProjectModal && (
        <ModalContainer onShowModal={onShowEditProjectModal}>
          <ProjectModal
            onShowModal={onShowEditProjectModal}
            project={currentProject}
          />
        </ModalContainer>

      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  appStatus: contextApplicationStatus(state),
});

export default connect(mapStateToProps)(Projects);

