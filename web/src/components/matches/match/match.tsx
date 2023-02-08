import React, { ReactElement, useState } from 'react';
import { connect } from "react-redux";

import Typography from '@mui/material/Typography';
import { CircleFlag } from 'react-circle-flags'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import CheckIcon from '@mui/icons-material/Check';
import { getMember } from '../../../network/services/match.services';
import { IMatch } from '../../../network/services/tournament.service';
import EditIcon from '@mui/icons-material/Edit';
import { getProfile } from '../../../store/selectors';
import { RootState } from "../../../store/store";
import { IProfileState } from '../../../store/reducers/profile';
import './styles.scss'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  paddingTop: 10,
  paddingBottom: 10
}));

export interface IMatchesProps {
  match: IMatch;
  disabled?: boolean;
  profile: IProfileState;
}

const Match: React.FC<IMatchesProps> = ({ profile, match, disabled = false, ...props }): ReactElement => {

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

  const renderMatch = (match: IMatch, disable = false) => {
    const member_1 = getMember(match.team_local.name) || {country: 'uy'};
    const member_2 = getMember(match.team_visit.name) || {country: 'uy'};

    return (<div className={disable ? 'match disabled': 'match'} key={match._id} >
        <Item elevation={4} >
          <div className='details'>
            
            {match.group == 'GOLD' && <div style={{color:"#FFD700"}}><MilitaryTechRoundedIcon/>  </div>}
            {match.group == 'SILVER' && <div style={{color:"#B5B7BB"}}><MilitaryTechRoundedIcon/>  </div> }
            {(match.group != 'GOLD' && match.group!== 'SILVER') && <span className='title'><Typography fontSize={11}>{match.group}</Typography></span>}
            <span className='date'><Typography>
              {match.date === 'TBD' ?
                <strong>{match.date}</strong>
                :new Date(match.date).toLocaleDateString('es-es', { weekday:"long", month:"long", day:"numeric", hour: "2-digit", minute: "2-digit"}) 
              }</Typography></span>
              
            {profile?._id && <div className='edit'><EditIcon/></div>}
          </div>
          <div className='player'>
            <div className='img'>
              <CircleFlag countryCode={member_1.country.toLowerCase()} height="25"/>
            </div>
            <Typography><span className={match.result && !match.result.winner ? 'member winner' : 'member'}>{match.team_local.name}</span></Typography>
            {renderResult(match.result, 0)}
          </div>
          <div className='player'>
            <div className='img'>
              <CircleFlag countryCode={member_2.country.toLowerCase()} height="25"/>
            </div>
            <Typography><span className={match.result && match.result.winner ? 'member winner' : 'member'}>{match.team_visit.name}</span></Typography>
            {renderResult(match.result, 1)}
          </div>
        </Item>
      </div>);
  }

  return (
    <>
      {renderMatch(match, disabled)}
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  profile: getProfile(state),
});

export default connect(mapStateToProps)(Match);


