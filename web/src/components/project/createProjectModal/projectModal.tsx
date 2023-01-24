import { Form, Formik, Field } from "formik";
import * as Yup from 'yup';
import './projectModal.scss';
import CloseIcon from '@mui/icons-material/Close';
import { IProject, IProjectTypes, useCreateProject, useEditProject, useListProjectTypes } from "../../../network/services/project/project.service";
import { setContextApplicationStatus } from "../../../store/reducers/contextApplication";
import { IStoreDispatchProps } from "../../../store/storeComponent";
import { RootState } from "../../../store/store";
import { contextApplicationStatus } from "../../../store/selectors";
import { connect } from "react-redux";


interface IProps extends IStoreDispatchProps {
    onShowModal: () => any,
    project?: IProject
}

const ProjectModal = ({ onShowModal, project, dispatch }: IProps) => {
    const { data: ProjectTypes, isLoading } = useListProjectTypes();
    const mutation = project ? useEditProject() : useCreateProject();
    const initialValues = { _id: project?._id, name: project?.name || "", type: project?.type || "Design", description: project?.description || "" }

    const validationSchema = Yup.object().shape({
        name: Yup
            .string()
            .required(`Name field is mandatory`)
    });

    const handleContinue = ({ _id, type, description, name }) => {
        const project: IProject = {
            ...(_id && { _id }),
            type,
            description,
            name,
        };
        mutation.mutate(project, {
            onSuccess: async (data) =>{ 
                dispatch(setContextApplicationStatus({ isNeededUpdateProjects: true }));
                onShowModal();
              },
        })
    };

    if (isLoading) return <div>loading</div>

    return (
        <div id="projectModal" className="modal-wrapper">
            <div className="header-modal" >
                <div className="header-close">
                    <CloseIcon onClick={onShowModal} className="close-icon"></CloseIcon>
                </div>
                <div className="header-title">
                    <label className="title">{project ? "Edit Project" : "Create Project"}</label>
                </div>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => { handleContinue(values) }}
            >
                {({ errors, touched, dirty }) => (
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
                                        {ProjectTypes.map((type: IProjectTypes) => {
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
                            <button className="button-form primary" type="submit"  disabled={!dirty}>Save</button>
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

export default connect(mapStateToProps)(ProjectModal);