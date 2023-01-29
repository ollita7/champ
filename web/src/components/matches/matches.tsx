import React, { ReactElement, useState } from 'react';
import './styles.scss'
import Typography from '@mui/material/Typography';
import { CircleFlag } from 'react-circle-flags'
import Paper from '@mui/material/Paper';
import data from '../../db/matches.json';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import { getMember } from '../../network/services/match/match.services';

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
                                        return dateA.valueOf()  - dateB.valueOf() 
                                      });

  const tbd_matches = groupMatches.filter(match => match.date == 'TBD');
  
  const renderResult = (result, player) => {
    if (result){
      const winner = result.winner == player;
      return (
        <div className='result'>
          {winner && <div className='check'><CheckIcon /></div>}
          <div className={result.set_1.games[player] > result.set_1.games[1 - player] ? 'set winner' : 'set'}>
            {result.set_1.games[player]}
            {result.set_1.tie && <sup>{result.set_1.tie_result[player]}</sup>}
          </div>
          <div className={result.set_2.games[player] > result.set_2.games[1 -player] ? 'set winner' : 'set'}>
            {result.set_2.games[player]}
            {result.set_1.tie && <sup>{result.set_2.tie_result[player]}</sup>}
          </div>
          {result.super && <div className={winner ? 'set winner' : 'set'}>{result.super[player]}</div>}
        </div>
      )
    }
  }

  const renderMatch = (match, disable = false) => {
    const member_1 = getMember(group.name, match.player_1.name) || {country: 'uy'};
    const member_2 = getMember(group.name, match.player_2.name) || {country: 'uy'};

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
              <CircleFlag countryCode={member_1.country.toLowerCase()} height="25"/>
            </div>
            <Typography><span className={match.result && !match.result.winner ? 'member winner' : 'member'}>{match.player_1.name}</span></Typography>
            {renderResult(match.result, 0)}
          </div>
          <div className='player'>
            <div className='img'>
              <CircleFlag countryCode={member_2.country.toLowerCase()} height="25"/>
            </div>
            <Typography><span className={match.result && match.result.winner ? 'member winner' : 'member'}>{match.player_2.name}</span></Typography>
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
