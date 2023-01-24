import React, { ReactElement, useState } from 'react';
import './styles.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ResponsiveMenu from '../../components/menu/menu'
import ReactCountryFlag from "react-country-flag"

import data from '../../db/data.json';

export interface IGroupsProps {

}

const Groups: React.FC<IGroupsProps> = ({ ...props }): ReactElement => {
  const [expanded, setExpanded] = React.useState<string | false>(data.tournament.groups[0].name);
  
  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='matches'>
      <ResponsiveMenu name="Campeonato" date={data.tournament.date}/>
      <Breadcrumbs aria-label="breadcrumb" className='breadcrumbs'>
        <Link underline="hover" color="inherit" href="/">
          {data.tournament.name}
        </Link>
        <Typography color="text.primary">{data.tournament.date}</Typography>
      </Breadcrumbs>
      <div>
        {data.tournament.groups.map(group =>
          <Accordion expanded={expanded === data.tournament.groups[0].name} onChange={handleChange(group.name)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{group.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {group.matches.map(match => 
                  <div className='match'>
                    <div className='details'>{match.date}</div>
                    <div className='player_1'>{match.player_1.name}</div>
                    <div className='player_2'>{match.player_2.name}</div>
                  </div>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    </div>
  )
}

export default Groups;
