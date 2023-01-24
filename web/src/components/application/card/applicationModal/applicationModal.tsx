import { Form, Formik, Field } from "formik";
import * as Yup from 'yup';
import './applicationModal.scss';
import CloseIcon from '@mui/icons-material/Close';
import { IApplicationTypes, useListApplicationTypes, useCreateApplication, IApplication, useEditApplication } from "../../../../network/services/application/application.service";
import { IProject } from "../../../../network/services/project/project.service";
import { IStoreDispatchProps } from "../../../../store/storeComponent";
import { RootState } from "../../../../store/store";
import { connect } from "react-redux";
import { contextApplicationStatus } from "../../../../store/selectors";
import { setContextApplicationStatus } from "../../../../store/reducers/contextApplication";


interface IProps extends IStoreDispatchProps {
    onShowModal: () => any
    project?: IProject
    application?: IApplication | null
}

const ApplicationModal = ({ onShowModal, project, application, dispatch }: IProps) => {
    const { data: ApplicationTypes, isLoading } = useListApplicationTypes();
    const createMutation = application ? useEditApplication() : useCreateApplication();
    const initialValues = { 
        _id: application?._id, 
        name: application?.name || "", 
        type: application?.type || "Web", 
        description: application?.description || "" 
    }

    const CreateApplicationModalSchema = Yup.object().shape({
        name: Yup
            .string()
            .required(`Name field is mandatory`)
    });

    const handleContinue = ({ type, description, name }) => {
        const app: IApplication = {
            ...(application?._id && { _id: application._id }),
            ...(project?._id && { project: project?._id }),
            type,
            description,
            name,
        };
        createMutation.mutate(app, {
            onSuccess: async () => {
                dispatch(setContextApplicationStatus({ isNeededUpdateApplications: true }));
                onShowModal();
            },
        })
    };

    if (isLoading) return <div>loading</div>

    return (
        <div id="applicationModal" className="modal-wrapper">
            <div className="header-modal" >
                <div className="header-close">
                    <CloseIcon onClick={onShowModal} className="close-icon"></CloseIcon>
                </div>
                <div className="header-title">
                    <label className="title">{application ? "Edit Application" : "Create Application"}</label>
                </div>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={CreateApplicationModalSchema}
                onSubmit={values => { handleContinue(values) }}
            >
                {({ errors, touched, dirty}) => (
                    <Form>
                        <div>
                            <div className="input-container">
                                <div className="title">
                                    <label>Name*</label>
                                </div>
                                <div className="input-form-wrapper">
                                    <Field className="input-form" type="text" name="name" autoFocus={true}></Field>
                                    {errors.name && touched.name ? (<span className="alert">{errors.name}</span>) : null}
                                </div>
                            </div>
                            <div className="input-container">
                                <div className="title">
                                    <label>Type</label>
                                </div>
                                <div className="input-form-wrapper">
                                    <Field as="select" name="type" className="input-form select">
                                        {ApplicationTypes.map((type: IApplicationTypes) => {
                                            return <option key={type._id} value={type.name}>{type.name}</option>
                                        })
                                        }
                                    </Field>
                                </div>
                            </div>
                            <div className="input-container description">
                                <Field className="input-form" as="textarea" name="description" placeholder="Write some description"></Field>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="button-form" onClick={onShowModal}>Cancel</button>
                            <button className="button-form primary" type="submit" disabled={!dirty}>Save</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    appStatus: contextApplicationStatus(state),
});

export default connect(mapStateToProps)(ApplicationModal);