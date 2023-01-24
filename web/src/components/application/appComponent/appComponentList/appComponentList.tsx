import { useEffect } from "react";
import { connect } from "react-redux";
import { List } from "@mui/material";
import { useState } from "react";
import {
  IApplication,
  useListComponents,
} from "../../../../network/services/application/application.service";
import {
  IComponent,
  useRemoveComponent,
} from "../../../../network/services/component/component.service";
import { IContextApplication, setContextApplicationStatus } from "../../../../store/reducers/contextApplication";
import { IStoreDispatchProps } from "../../../../store/storeComponent";
import { ConfirmationModal } from "../../../shared/confirmationModal";
import ModalContainer from "../../../shared/confirmationModal/modalContainer/ModalContainer";
import { LoadingSpinner } from "../../../shared/loadingSpinner";

import "./styles.scss";
import AppComponentItem from "../appComponentItem/appComponentItem";
import ComponentModal from "../../../shared/componentModal";
import { RootState } from "../../../../store/store";
import { contextApplicationStatus } from "../../../../store/selectors";

export interface IComponentListProps extends IStoreDispatchProps{
  application: IApplication;
  appStatus: IContextApplication;

}

const AppComponentList = ({ application,appStatus, dispatch  }: IComponentListProps) => {
  const defaultValuesPagination = { size: 20, page: 1 };
  const { data, isLoading, refetch } = useListComponents(defaultValuesPagination, application?._id);
  const [showEditComponentModal, setShowEditComponentModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<IComponent>({});
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const remove = useRemoveComponent();

  useEffect(() => {
    if (appStatus.isNeededUpdateComponents) {
      refetch();
      dispatch(setContextApplicationStatus({ isNeededUpdateComponents: false }))
    }
  }, [appStatus.isNeededUpdateComponents]);


  const toggleConfirmationModal = () => {
    setOpenConfirmationModal((prev) => !prev);
  };

  const onShowEditComponentModal = () => {
    setShowEditComponentModal((prev) => !prev);
  };

  const onEdit = (app) => {
    setSelectedComponent(app);
    onShowEditComponentModal();
  };

  const onDelete = (app) => {
    setSelectedComponent(app);
    toggleConfirmationModal();
  };

  const deleteComponent = () => {
    const id = selectedComponent._id ?? "";
    remove.mutate(id, {
      onSuccess: async () => {
        dispatch(setContextApplicationStatus({ 
          isNeededUpdateComponents: true,
          isNeededUpdateApplications: true,
          isNeededUpdateProjects: true }))
        toggleConfirmationModal()
      },
    });
  };

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="component-list-container">

      <List component="nav" className="component-list">
        {data?.result && !data?.result.length && (
          <span className="no-component-msg">No component created</span>
        )}
        {data?.result &&
          data?.result.map((component, index) => {
            return (
              <AppComponentItem
                app={application}
                key={index}
                component={component}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            );
          })}
      </List>

      <ConfirmationModal
        title="Delete Component"
        text={
          "Do you want to delete the component " +
          selectedComponent?.name +
          " ?"
        }
        open={openConfirmationModal}
        confirmation={deleteComponent}
        cancel={toggleConfirmationModal}
      ></ConfirmationModal>

      {showEditComponentModal && (
        <ModalContainer onShowModal={onShowEditComponentModal}>
          <ComponentModal
            onShowModal={onShowEditComponentModal}
            component={selectedComponent}
            appId={application?._id}
          />
        </ModalContainer>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  appStatus: contextApplicationStatus(state),
});

export default connect(mapStateToProps)(AppComponentList);