import React, { ReactElement, useState } from 'react';
import './styles.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead, {tableHeadClasses} from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Matches } from '../../components/matches';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ReactCountryFlag from "react-country-flag";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    //backgroundColor: '#464646',
    //color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    //backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  boxShadow: 'none'
}));

export interface IGroupsProps {
  group: any;
}

const Group: React.FC<IGroupsProps> = ({group, ...props }): ReactElement => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleMatches = () =>{
    setShowDetail(!showDetail);
  }

  return (
    <div className='group' key={group.name}>
      <Card sx={{ minWidth: 275 }}>
        <Typography color="text.primary"><h2 className='name'>{group.name}</h2></Typography>
        <CardContent>
          <StyledTableContainer>
              <Table aria-label="simple table">
                <TableHead >
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell>P</StyledTableCell>
                    <StyledTableCell>SF</StyledTableCell>
                    <StyledTableCell>SC</StyledTableCell>
                    <StyledTableCell>Pts</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {group.members.map((member) => (
                    <StyledTableRow
                      key={member.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        <ReactCountryFlag style={{
                            fontSize: '2em',
                            lineHeight: '2em',
                        }}countryCode={member.country} svg /> 
                        <span className='member'>{member.name} </span>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">0</StyledTableCell>
                      <StyledTableCell component="th" scope="row">0</StyledTableCell>
                      <StyledTableCell component="th" scope="row">0</StyledTableCell>
                      <StyledTableCell component="th" scope="row">0</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={toggleMatches}> {showDetail ? <ExpandLessIcon/>: <ExpandMoreIcon/>} Ver partidos</Button>
        </CardActions>
        {showDetail && <Matches group={group}/>}
      </Card>
    </div>
  )
}

export default Group;
