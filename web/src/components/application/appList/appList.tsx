import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { IProject, uselistApplications } from "../../../network/services/project/project.service";
import { IApplication, useRemoveApplication } from "../../../network/services/application/application.service";
import { ConfirmationModal } from "../../shared/confirmationModal";
import ModalContainer from "../../shared/confirmationModal/modalContainer/ModalContainer";
import { LoadingSpinner } from "../../shared/loadingSpinner";
import { AppItem } from "../appItem";
import ApplicationModal from "../card/applicationModal";
import "./styles.scss";
import { RootState } from "../../../store/store";
import { contextApplicationStatus } from "../../../store/selectors";
import { connect } from "react-redux";
import { IStoreDispatchProps } from "../../../store/storeComponent";
import { IContextApplication, setContextApplicationStatus } from "../../../store/reducers/contextApplication";

interface IAppListProps extends IStoreDispatchProps {
  project: IProject;
  appStatus: IContextApplication;
}

const AppList = ({ project, dispatch, appStatus }: IAppListProps) => {
  const { data, isLoading, refetch } = uselistApplications(project._id);
  const [showEditApplicationModal, setShowEditApplicationModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<IApplication>({});
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const remove = useRemoveApplication();

  useEffect(() => {
    if (appStatus.isNeededUpdateApplications) {
      refetch();
      dispatch(setContextApplicationStatus({ isNeededUpdateApplications: false }))
    }
  }, [appStatus.isNeededUpdateApplications]);

  const toggleConfirmationModal = () => {
    setOpenConfirmationModal((prev) => !prev);
  }

  const onShowCreateApplicationModal = () => {
    setShowEditApplicationModal((prev) => !prev);
  }

  const onEdit = (app) => {
    setSelectedApplication(app)
    onShowCreateApplicationModal();
  }

  const onDelete = (app) => {
    setSelectedApplication(app)
    toggleConfirmationModal();
  }

  const deleteApplication = () => {
    const id = selectedApplication._id ? selectedApplication._id : "";
    remove.mutate(id, {
      onSuccess: async () => {
        dispatch(setContextApplicationStatus({ isNeededUpdateApplications: true }))
        toggleConfirmationModal()
      },
    });
  };

  return (
    <div className="app-list-container">
      {isLoading && (
        <div className="loading-container">
          <LoadingSpinner />
        </div>
      )}

      <div className="app-list">
        {data && !data.length && (
          <span className="no-app-msg">No Applications created</span>
        )}
        {data &&
          data?.map((app, index) => {
            return (
              <>
                <AppItem key={index} app={app} onEdit={onEdit} onDelete={onDelete} />
                {index != data.length - 1 &&
                  <Divider />
                }
              </>
            )
          })}
      </div>

      <ConfirmationModal
        title="Delete Application"
        text={
          "Do you want to delete the application " + selectedApplication?.name + " ?"
        }
        open={openConfirmationModal}
        confirmation={deleteApplication}
        cancel={toggleConfirmationModal}
      ></ConfirmationModal>

      {showEditApplicationModal && <ModalContainer onShowModal={onShowCreateApplicationModal}>
        <ApplicationModal onShowModal={onShowCreateApplicationModal} project={project} application={selectedApplication} />
      </ModalContainer>}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  appStatus: contextApplicationStatus(state),
});

export default connect(mapStateToProps)(AppList);