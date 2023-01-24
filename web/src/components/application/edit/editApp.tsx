import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { IApplication, IApplicationTypes, useListApplicationTypes } from "../../../network/services/application/application.service";
import "./styles.scss";

export interface IEditAppProps {
  application: IApplication | undefined;
  editMutation: any;
}

const EditApp = ({ application, editMutation }: IEditAppProps) => {
  const { data: ApplicationTypes, isLoading } = useListApplicationTypes();
  const initialValues = {
    _id: application?._id,
    name: application?.name,
    type: application?.type,
    description: application?.description || "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(`Name field is mandatory`),
  });

  const handleSubmit = ({ _id, name, description, type }) => {
    const app: IApplication = {
      ...(_id && { _id }),
      name,
      description,
      type,
    };
    editMutation.mutate(app, {
      onSuccess: () => {},
    });
  };

  if (isLoading) return <div>loading</div>
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values) => {
        handleSubmit(values);
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
                {
                  ApplicationTypes.map((type,index) => {
                      return <option key={index} value={type._id}>{type.name}</option>
                  })
                }
                </Field>
              </div>
            </div>
            <div className="input-container description">
              <Field
                className="input-form"
                as="textarea"
                name="description"
                placeholder="Write some description"
              ></Field>
            </div>
          </div>
          <div className="actions">
            <button className="button-form primary" type="submit" disabled={!dirty}>
              Update
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditApp;
