import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComponentModal from "../../../components/shared/componentModal/componentModal";
import { ComponentList } from "../../../components/appComponents/list";
import { NewComponentButton } from "../../../components/appComponents/new";
import { EditApp } from "../../../components/application/edit";
import ModalContainer from "../../../components/shared/confirmationModal/modalContainer/ModalContainer";
import { LoadingSpinner } from "../../../components/shared/loadingSpinner";
import {
  IApplication,
  useCreateApplication,
  useEditApplication,
  useGetApplication,
} from "../../../network/services/application/application.service";
import "./styles.scss";

export interface IApplicationProps { }

const Application = () => {
  let { id } = useParams();
  const editMutation = useEditApplication();
  const [showCreateComponentModal, setShowCreateComponentModal] =
    useState(false);
  const { data, isLoading } = useGetApplication(id);
  const [application, setApplication] = useState<IApplication>({});

  useEffect(() => {
    if (data && data.length > 0) {
      setApplication(data[0]);
    }
  }, [data]);

  const onShowCreateComponentModal = () => {
    setShowCreateComponentModal((prev) => !prev);
  };

  if (isLoading) return <LoadingSpinner />;
  
  return (
    <div id="application-container" className="page-content">
      <EditApp application={application} editMutation={editMutation} />
      <div className="new-component-container">
        <NewComponentButton onShowComponentModal={onShowCreateComponentModal} />
      </div>
      <div className="list-container">
        <ComponentList application={application} />
      </div>
      {showCreateComponentModal && (
        <ModalContainer onShowModal={onShowCreateComponentModal}>
          <ComponentModal onShowModal={onShowCreateComponentModal} appId={id} projectId={application?.project} />
        </ModalContainer>
      )}
    </div>
  );
};

export default Application;
