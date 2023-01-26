import React, { ReactElement, useState } from 'react';
import './styles.scss'
import Typography from '@mui/material/Typography';
import ReactCountryFlag from "react-country-flag"
import PersonIcon from '@mui/icons-material/Person';
import data from '../../db/matches.json';

export interface IGroupsProps {
  group: string
}

const Groups: React.FC<IGroupsProps> = ({ group, ...props }): ReactElement => {
  const distantFuture = new Date(8640000000000000)
  const matches = data.matches
                          .filter(match => match.group == group)
                          .sort((a,b) => {
                            let dateA = a.date !== 'TBD' ? new Date(a.date) : distantFuture;
                            let dateB = b.date !== 'TBD' ? new Date(b.date) : distantFuture;
                            return dateA.getTime() - dateB.getTime()
                          });
  return (
    <div className='matches'>
          {matches.map(match => 
            <div className='match' key={match.id}>
              <div className='details'>
                {/*<span className='title'><Typography>{group}</Typography></span>*/}
                <span className='date'><Typography>
                  {match.date === 'TBD' ?
                    <strong>{match.date}</strong>
                    :new Date(match.date).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: "2-digit", minute: "2-digit"}) 
                  }</Typography></span>
              </div>
              <div className='player'>
                <span className='member'><Typography>{match.player_1.name}</Typography></span>
              </div>
              <div className='player'>
                <span className='member'><Typography>{match.player_2.name}</Typography></span>
              </div>
            </div>
          )}
    </div>
  )
}

export default Groups;
