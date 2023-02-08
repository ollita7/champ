import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import "./componentModal.scss";
import CloseIcon from "@mui/icons-material/Close";
import {
  IComponent,
  useCreateComponent,
  useEditComponent,
  useListComponentTypes,
} from "../../../network/services/component/component.service";
import { IStoreDispatchProps } from "../../../store/storeComponent";
import { RootState } from "../../../store/store";
import { contextApplicationStatus } from "../../../store/selectors";
import { connect } from "react-redux";
import { setContextApplicationStatus } from "../../../store/reducers/contextApplication";
import { useEffect } from "react";

interface IProps extends IStoreDispatchProps {
  onShowModal: () => any;
  component?: IComponent;
  appId?: string;
  projectId?: string
};

const ComponentModal = ({ onShowModal, component, appId, dispatch, projectId }: IProps) => {

  const { data: componentType, isLoading } = useListComponentTypes();

  const mutation = component ? useEditComponent() : useCreateComponent();
  const initialValues = {
    _id: component?._id,
    name: component?.name || "",
    type: component?.type?._id,
    comments: component?.comments || "",
  };

  const CreateApplicationModalSchema = Yup.object().shape({
    name: Yup.string().required(`Name field is mandatory`),
  });

  const handleContinue = ({ type, comments, name }) => {
    const typeFiltered = componentType.find(typeFiltered => typeFiltered._id === type);
    const app: IComponent = {
      ...(component?._id && { _id: component._id }),
      ...(appId && { applications: [appId] }),
      ...(projectId && { projects: [projectId] }),
      name,
      type: typeFiltered,
      comments,
    };
    mutation.mutate(app, {
      onSuccess: async () => {
        dispatch(setContextApplicationStatus({ 
          isNeededUpdateProjects: true, 
          isNeededUpdateComponents: true, 
          isNeededUpdateApplications: true }));
        onShowModal();
      },
    });
  };


  useEffect(() => {
    if (componentType && componentType.length > 0) {
      if (!component?.type?._id)
        initialValues.type = componentType[0]._id;

    }
  }, [componentType]);

  if (isLoading) return <div>loading</div>

  return (
    <div id="componentModal" className="modal-wrapper">
      <div className="header-modal">
        <div className="header-close">
          <CloseIcon onClick={onShowModal} className="close-icon"></CloseIcon>
        </div>
        <div className="header-title">
          <label className="title">{initialValues._id ? "Edit Component" : "Create Component"}</label>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={CreateApplicationModalSchema}
        onSubmit={(values) => {
          handleContinue(values);
        }}
      >
        {({ errors, touched, dirty }) => (
          <Form>
            <div>
              <div className="input-container">
                <div className="title">
                  <label>Name*</label>
                </div>
                <div className="input-form-wrapper">
                  <Field
                    className="input-form"
                    type="text"
                    name="name"
                    autoFocus={true}
                  ></Field>
                  {errors.name && touched.name ? (
                    <span className="alert">{errors.name}</span>
                  ) : null}
                </div>
              </div>
              <div className="input-container">
                <div className="title">
                  <label>Type</label>
                </div>
                <div className="input-form-wrapper">
                  <Field as="select" name="type" className="input-form select">
                    {componentType.map((type, index) => {
                      return (
                        <option key={index} value={type._id}>
                          {type.name}
                        </option>
                      );
                    })}
                  </Field>
                </div>
              </div>
              <div className="input-container description">
                <Field
                  className="input-form"
                  as="textarea"
                  name="comments"
                  placeholder="Write some comment"
                ></Field>
              </div>
            </div>
            <div className="modal-footer">
              <button className="button-form" onClick={onShowModal}>
                Cancel
              </button>
              <button className="button-form primary" type="submit" disabled={!dirty}>
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  appStatus: contextApplicationStatus(state),
});

export default connect(mapStateToProps)(ComponentModal);
