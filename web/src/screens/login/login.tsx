import React, { ReactElement, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './styles.scss'
import { ROUTES } from '../../navigation/constants';
import { Config } from '../../utils';

export interface ILoginProps {

}

const Login: React.FC<ILoginProps> = ({ ...props }): ReactElement => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSuccess = (res) => {
    const id_token = res.getAuthResponse().id_token;
    localStorage.setItem(Config.TOKEN_NAME, id_token);
    navigate(ROUTES.HOME);
  }

  const handleError = (res) => {
    setError(true);
  }

  return (
    <div className='login'>
      <div className='username'>
        <TextField id="standard-basic" fullWidth label="Usuario" variant="standard" />
      </div>
      <div className='password'>
        <TextField id="standard-basic" fullWidth label="Password" variant="standard" />
      </div>
      <div className='button'>
        <Button variant="contained">Acceder</Button>
      </div>
    </div>
  )
}

export default Login;
