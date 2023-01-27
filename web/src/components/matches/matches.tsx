import React, { ReactElement, useState } from 'react';
import './styles.scss'
import Typography from '@mui/material/Typography';
import { CircleFlag } from 'react-circle-flags'
import Paper from '@mui/material/Paper';
import data from '../../db/matches.json';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  paddingTop: 10,
  paddingBottom: 10
}));

export interface IGroupsProps {
  group: any;
}

const Groups: React.FC<IGroupsProps> = ({ group, ...props }): ReactElement => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const groupMatches = data.matches
                          .filter(match => match.group == group.name );
  const defined_matches = groupMatches.filter(match => match.date != 'TBD')
                                      .sort((a,b) => {
                                        let dateA = new Date(a.date);
                                        let dateB = new Date(b.date);
                                        return dateA.getTime() - dateB.getTime()
                                      });

  const tbd_matches = groupMatches.filter(match => match.date == 'TBD');
  
  const renderResult = (result, player) => {
    if (result)
      return (
        <div className='result'>
          <div className='set_1'>{result.set_1.games[player]}</div>
          <div className='set_2'>{result.set_2.games[player]}</div>
          {result.super && <div className='tie'>{result.super[player]}</div>}
        </div>
      )
  }

  const renderMatch = (match, disable = false) => {
    return (<div className={disable ? 'match disabled': 'match'} key={match.id} >
        <Item elevation={4} >
          <div className='details'>
            <span className='date'><Typography>
              {match.date === 'TBD' ?
                <strong>{match.date}</strong>
                :new Date(match.date).toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: "2-digit", minute: "2-digit"}) 
              }</Typography></span>
              {<span className='title'><Typography fontSize={11}>{group.name}</Typography></span>}
          </div>
          <div className='player'>
            <div className='img'>
              <CircleFlag countryCode="uy" height="25"/>
            </div>
            <span className='member'><Typography>{match.player_1.name}</Typography></span>
            {renderResult(match.result, 0)}
          </div>
          <div className='player'>
            <div className='img'>
              <CircleFlag countryCode="uy" height="25"/>
            </div>
            <span className='member'><Typography >{match.player_2.name}</Typography></span>
            {renderResult(match.result, 1)}
          </div>
        </Item>
      </div>);
  }

  return (
    <div className='matches'>
      {defined_matches.map(match => renderMatch(match))}
      {tbd_matches.length > 0 &&
        <Typography>
          <div className='more-less' onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Partidos a definir' : `Ver mas (${tbd_matches.length} partidos sin definir)`} 
            <ExpandMoreIcon className={expanded ? 'icon expanded' : 'icon'}/>
          </div>
        </Typography>
      }
      {expanded &&
        <div className='expand'>
          {tbd_matches.map(match => renderMatch(match, true))}
        </div>
      }
    </div>
  )
}

export default Groups;
