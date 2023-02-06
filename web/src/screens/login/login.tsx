import React, { ReactElement, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './styles.scss'
import { ROUTES } from '../../navigation/constants';
import { Config } from '../../utils';
import { useLogin } from '../../network/services/user/user.service';

export interface ILoginProps {

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
        //const id_token = res.getAuthResponse().id_token;
        //localStorage.setItem(Config.TOKEN_NAME, id_token);
        console.log(response)
        navigate(ROUTES.HOME);
      },
    });
    console.log(values);
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

export default Login;
