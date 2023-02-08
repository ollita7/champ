import React, { ReactElement, useState } from 'react';
import { connect } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './styles.scss'
import { IStoreDispatchProps } from '../../store/storeComponent';
import { setProfile } from '../../store/reducers/profile';
import { ROUTES } from '../../navigation/constants';
import { Config } from '../../utils';
import { useLogin } from '../../network/services/user.service';

export interface ILoginProps extends IStoreDispatchProps {

}

const Login: React.FC<ILoginProps> = ({ ...props }): ReactElement => {
  const navigate = useNavigate();
  const mutation = useLogin();

  const initialValues = {
    username: '',
    password: ''
  };

  const loginSchema = Yup.object().shape({
    username: Yup.string().required(`Usuario es obligatorio`),
    password: Yup.string().required(`Password es obligatorio`),
  });

  const handleContinue = (values) => {
    mutation.mutate(values, {
      onSuccess: async (response) => {
        localStorage.setItem(Config.USER, JSON.stringify(response));
        props.dispatch(setProfile(response));
        navigate(ROUTES.HOME);
      },
    });
  }

  return (
    <div className='login'>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          handleContinue(values);
        }}
      >
         {({ 
          handleBlur,
          handleChange,
          errors, 
          touched, 
          dirty }) => (
          <Form>
            <div className='username'>
              <TextField 
                id="username" 
                fullWidth 
                label="Usuario" 
                onBlur={handleBlur}
                onChange={handleChange}
                variant="standard"
                helperText={touched.username ? errors.username : ""}
                error={touched.username && Boolean(errors.username)}/>
            </div>
            <div className='password'>
              <TextField 
                id="password"
                fullWidth label="Password" 
                variant="standard" 
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}/>
            </div>
            <div className='button'>
              <Button variant="contained" type="submit">Acceder</Button>
            </div>
         </Form>
         )}
      </Formik>
    </div>
  )
}
export default connect()(Login);
