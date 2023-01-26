import React, { ReactElement, useState } from 'react';
import './styles.scss'
import Typography from '@mui/material/Typography';
import ReactCountryFlag from "react-country-flag"
import PersonIcon from '@mui/icons-material/Person';
import Paper from '@mui/material/Paper';
import data from '../../db/matches.json';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  paddingTop: 10,
  paddingBottom: 10
}));

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
          <Item variant="outlined" elevation={4}>
            <div className='details'>
              <span className='date'><Typography>
                {match.date === 'TBD' ?
                  <strong>{match.date}</strong>
                  :new Date(match.date).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: "2-digit", minute: "2-digit"}) 
                }</Typography></span>
                {<span className='title'><Typography fontSize={11}>{group}</Typography></span>}
            </div>
            <div className='player'>
            <div className='img'>
              <ReactCountryFlag style={{
                              fontSize: '1em',
                              lineHeight: '1em',
                          }}countryCode="UY" svg /> 
              </div>
              <span className='member'><Typography>{match.player_1.name}</Typography></span>
            </div>
            <div className='player'>
              <div className='img'>
                <ReactCountryFlag style={{
                              fontSize: '1em',
                              lineHeight: '1em',
                          }}countryCode="UY" svg /> 
              </div>
              <span className='member'><Typography >{match.player_2.name}</Typography></span>
            </div>
          </Item>
        </div>
      )}
    </div>
  )
}

export default Groups;
