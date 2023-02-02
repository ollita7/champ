import React, { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss'
import { ROUTES } from '../../navigation/constants';

const Privacy: React.FC = ({ ...props }): ReactElement => {
  const navigate = useNavigate();

  const handleBack = (res) => {
    navigate(ROUTES.HOME);
  }

  return (
    <div className='wrapper'>
      <div className='header'>
        <h2>TECTONIC</h2>
        {/* <img src='http://images.app.goo.gl/V4UKhr31XqCFktMD7'></img> */}
        <button className='google-btn' onClick={handleBack}>
          <span>Login</span>
        </button>
      </div>
      <div className='content'>
        <div className='tittle'>
          <h3>Tectonic POLICES</h3>
          <h1>PRIVACY</h1>
        </div>
        <div className='body'>
          <h2>PRIVACY POLICY</h2>
          <p>Please read this policy carefully before using our website or the Tectonic Platform.</p>
          <p>This privacy policy (the “Policy”) aims to give you information on how Tectonic collects and processes your personal data through your use of this website, including any data you may provide through this website or use or purchase a Tectonic product or service.</p>
          <p>This Policy is provided in a layered format so you can click through to the specific areas set out below. Back to</p> <p className='back-btn' onClick={handleBack}> Home Page </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy;