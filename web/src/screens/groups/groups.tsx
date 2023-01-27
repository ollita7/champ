import React, { ReactElement, useState } from 'react';
import './styles.scss'

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ResponsiveMenu from '../../components/menu/menu'
import Group from './group';

import data from '../../db/data.json';

export interface IGroupsProps {

}

const Groups: React.FC<IGroupsProps> = ({ ...props }): ReactElement => {
  return (
    <div className='groups'>
      <ResponsiveMenu/>
      {/*
      <Breadcrumbs aria-label="breadcrumb" className='breadcrumbs'>
        <Link underline="hover" color="inherit" href="/">
          {data.tournament.name}
        </Link>
        <Typography color="text.primary">{data.tournament.date}</Typography>
      </Breadcrumbs>
      */}
      {data.tournament.groups.map(group => 
        <Group group={group} key={group.name}></Group>
      )}
    </div>
  )
}

export default Groups;
