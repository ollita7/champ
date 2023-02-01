import React, { ReactElement, useState } from 'react';
import './styles.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead, {tableHeadClasses} from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Matches } from '../../components/matches';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton'; 
import { CircleFlag } from 'react-circle-flags'
import { getStandings } from '../../network/services/match/match.services';
import { mdiWhiteBalanceAuto } from '@mdi/js';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  position: 'relative',
  padding: '16px 5px',
  textAlign: 'center',
  color: 'white',
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  position: 'relative',
  '&:nth-of-type(odd)': {
    //backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  }
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  boxShadow: 'none'
}));

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  '.more-icon':{
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  },
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export interface IGroupsProps {
  group: any;
}

const Group: React.FC<IGroupsProps> = ({group, ...props }): ReactElement => {
  const [expanded, setExpanded] = React.useState(false);
  const standing = getStandings(group.name);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='group' key={group.name}>
      <Card sx={{ minWidth: 275 }}>
        <h2 className='name' >
          <Typography color="#00aeef">{group.name}</Typography>
          </h2>
        <CardContent>
          <StyledTableContainer>
              <Table aria-label="simple table">
                <TableHead >
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell>PJ</StyledTableCell>
                    <StyledTableCell>SF</StyledTableCell>
                    <StyledTableCell>GF</StyledTableCell>
                    <StyledTableCell>PG</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody className='table'>
                  {standing.map((s, index) => (
                    <StyledTableRow
                      key={s.member.name}
                      className='table-row'
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row" >
                        <div className='country'>
                          <CircleFlag countryCode={s.member.country.toLowerCase()} height="25"/>
                          <span className='member'>{s.member.name} </span>
                        </div>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">{s.pj}</StyledTableCell>
                      <StyledTableCell component="th" scope="row">{s.sf}</StyledTableCell>
                      <StyledTableCell component="th" scope="row">{s.gf}</StyledTableCell>
                      <StyledTableCell component="th" scope="row"><strong>{s.pts}</strong></StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
        </CardContent>
        <CardActions>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            name='Ver Partidos'
            title='dasd'
            value='fsdfsad'
            className='expand-more'
          >
            <span className='ver' >Ver Partidos</span>
            <ExpandMoreIcon className='more-icon'/>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Matches group={group}/>
        </Collapse>
      </Card>
    </div>
  )
}

export default Group;
