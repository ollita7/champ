import React, { ReactElement, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ResponsiveMenu from '../../components/menu/menu'
import { ROUTES } from '../../navigation/constants';
import { Config } from '../../utils';

import './styles.scss'

export interface IQualifyingProps {

}

const Qualifying: React.FC<IQualifyingProps> = ({ ...props }): ReactElement => {
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
    <div className='qualifying'>
       <ResponsiveMenu/>
    </div>
  )
}

export default Qualifying;