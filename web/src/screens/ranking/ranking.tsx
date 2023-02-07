import { Typography } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ResponsiveMenu from '../../components/menu/menu'
import { ROUTES } from '../../navigation/constants';
import { Config } from '../../utils';

import './styles.scss'

export interface IRankingProps {

}

const Ranking: React.FC<IRankingProps> = ({ ...props }): ReactElement => {
  return (
    <div className='ranking'>
       <h3><Typography>Proximamente</Typography></h3>
    </div>
  )
}

export default Ranking;