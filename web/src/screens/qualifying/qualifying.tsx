import React, { ReactElement, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DensityLargeSharpIcon from '@mui/icons-material/DensityLargeSharp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DensitySmallSharpIcon from '@mui/icons-material/DensitySmallSharp';
import { Typography } from '@mui/material';
import { getQualifyings } from '../../network/services/match/match.services';
import ResponsiveMenu from '../../components/menu/menu';
import './styles.scss'
import { Match } from '../../components/matches/match';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

export interface IQualifyingProps {

}

const STAGES = {
  "QF": {order:3, title: "Cuartos de finales", icon: DensityLargeSharpIcon},
  "SF": {order: 2, title: "Semifinales", icon: DensitySmallSharpIcon},
  "F": {order: 1, title: "Final", icon: EmojiEventsIcon},
}

const Qualifying: React.FC<IQualifyingProps> = ({ ...props }): ReactElement => {
  const [cup, setCup] = React.useState<string>('GOLD');
  const [stage, setStage] = React.useState<string>('QF');
  
  const handleChange = (event: SelectChangeEvent) => {
    setCup(event.target.value as string);
  };

  const handleStage = (newStage: string) => {
    setStage(newStage);
  };

  const handleNext= (step: number) => {
    let newStage = stage;
    switch(stage){
      case 'QF':
        newStage = step === 1? 'SF' : 'QF';
        break;
      case 'SF':
        newStage = step === 1? 'F' : 'QF';
        break;
      case 'F':
        newStage = step === 1? 'F' : 'SF';
        break;
    }
    setStage(newStage);
  }
  
  return (
    <div className='qualifying'>
      <ResponsiveMenu/>
      <FormControl fullWidth className='select-cup'>
        <InputLabel id="demo-simple-select-label">Copa</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cup}
          label="Copa"
          onChange={handleChange}
        >
          <MenuItem value={'GOLD'}>Copa de Oro</MenuItem>
          <MenuItem value={'SILVER'}>Copa de Plata</MenuItem>
        </Select>
      </FormControl>
      <div className="select-stage">
          <div className={stage == 'QF'? 'stage selected': 'stage'} onClick={() => handleStage('QF')}>
            <DensitySmallSharpIcon/>
            <Typography>QF</Typography>
          </div>
          <div className={stage == 'SF'? 'stage selected': 'stage'} onClick={() => handleStage('SF')}>
            <DensityLargeSharpIcon/>
            <Typography>SF</Typography>
          </div>
          <div className={stage == 'F'? 'stage selected': 'stage'} onClick={() => handleStage('F')}>
            <EmojiEventsIcon/>
            <Typography>F</Typography>
          </div>
      </div>
      <div className='title-menu' >
        <div className={stage == 'QF' ? 'arrow hidden' : 'arrow'} onClick={() => handleNext(-1)}><ArrowBackIosNewSharpIcon /></div>
        <Typography><strong>{STAGES[stage].title}</strong></Typography>
        <div className={stage == 'F' ? 'arrow hidden' : 'arrow'} onClick={() => handleNext(1)}><ArrowForwardIosSharpIcon/></div>
      </div>
      <div className='matches' >
        {getQualifyings(cup, stage).map(match => <Match match={match}/>)}
      </div>
    </div>
  );
}

export default Qualifying;