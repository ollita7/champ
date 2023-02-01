import React, { ReactElement, useState } from 'react';
import { MobilePDFReader } from 'react-read-pdf';
import ResponsiveMenu from '../../components/menu/menu';
import './styles.scss'

const Terms: React.FC = ({ ...props }): ReactElement => {
  return (
    <div className='terms'>
      <ResponsiveMenu/>
      <div className='pdf'>
        <MobilePDFReader url="http://ocean-tour.netlify.app/reglamento.pdf"/>
      </div>
    </div>
  );
}

export default Terms;