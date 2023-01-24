import React, { ReactElement, useState } from 'react';
import './styles.scss'
import Typography from '@mui/material/Typography';
import ReactCountryFlag from "react-country-flag"
import data from '../../db/data.json';
import PersonIcon from '@mui/icons-material/Person';

export interface IGroupsProps {
  matches: any
}

const Groups: React.FC<IGroupsProps> = ({ matches, ...props }): ReactElement => {
  return (
    <div className='matches'>
        <Typography>
          {matches.map(match => 
            <div className='match'>
              <div className='details'>{match.date}</div>
              <div className='player'>
                <PersonIcon /> 
                <span className='member'>{match.player_1.name}</span>
              </div>
              <div className='player'>
                <PersonIcon /> 
                <span className='member'>{match.player_2.name}</span>
              </div>
            </div>
          )}
        </Typography>
    </div>
  )
}

export default Groups;
