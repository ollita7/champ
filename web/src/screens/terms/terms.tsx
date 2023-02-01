import React, { ReactElement, useState } from 'react';
import ResponsiveMenu from '../../components/menu/menu';
import './styles.scss'

const Terms: React.FC = ({ ...props }): ReactElement => {
  return (
    <div className='terms'>
      <ResponsiveMenu/>
      <div className='pdf'>
        <iframe className='iframe' src={'https://ocean-tour.netlify.app/reglamento.pdf'} />
      </div>
      
    </div>
  );
}

export default Terms;