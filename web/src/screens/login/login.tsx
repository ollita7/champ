import React, { ReactElement, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import './styles.scss'
import { ROUTES } from '../../navigation/constants';
import { Config } from '../../utils';
import GoogleIcon from '@mui/icons-material/Google';

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
      <div className='content'>
        <div className="left">
          <h1>Tectonic</h1>
          <h2>Let's guide you on the process of development software</h2>
        </div>
        <div className="login-form">
          <h1>Get started for free</h1>
          <span className='no-credit'>No credit card required</span>
          <div className='google-btn'>
            <GoogleLogin
              className='google-login'
              clientId={Config.GOOGLE_CLIENT_ID}
              //buttonText="Login with Google"
              onSuccess={handleSuccess}
              onFailure={handleError}
              cookiePolicy={'single_host_origin'}
              theme="dark"
              icon={false}
            ><GoogleIcon style={{ fill: 'white' }}/><span>Login with Google</span></GoogleLogin>
          </div>
          {error &&
              <span className='error'>Some error ocurred trying to authenticate</span>}
          <span>By logging in or signing up, you agree to abide by our policies, including our  <Link to="">Terms of Service</Link> and <Link to="">Privacy Policy</Link></span>
        </div>
      </div>
      
      <div className='footer'>JOIN DEVELOPERS WHO BUILD APPS USING TECTONIC</div>
    </div>
  )
}

export default Login;
