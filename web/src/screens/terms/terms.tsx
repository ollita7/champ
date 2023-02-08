import React, { ReactElement, useState } from 'react';
import { MobilePDFReader } from 'react-read-pdf';
import ResponsiveMenu from '../../components/menu/menu';
import './styles.scss'

const Terms: React.FC = ({ ...props }): ReactElement => {
  return (
    <div className='terms'>
      <ResponsiveMenu/>
      <div className='pdf'>
        <iframe src="http://ocean-tour.netlify.app/reglamento.pdf#toolbar=0" width="100%" height="500px"></iframe>
      </div>
    </div>
  );
}

export default Terms;