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
import { Match } from './match';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  paddingTop: 10,
  paddingBottom: 10
}));

export interface IMatchesProps {
  group: any;
}

const Matches: React.FC<IMatchesProps> = ({ group, ...props }): ReactElement => {
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

  return (
    <div className='matches'>
      {defined_matches.map(match => <Match match={match}/>)}
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
          {tbd_matches.map(match => <Match match={match}/>)}
        </div>
      }
    </div>
  )
}

export default Matches;
