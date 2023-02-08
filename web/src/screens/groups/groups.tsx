import React, { ReactElement, useState } from 'react';
import './styles.scss'
import ResponsiveMenu from '../../components/menu/menu'
import Group from './group';

import data from '../../db/data.json';

export interface IGroupsProps {

}

const Groups: React.FC<IGroupsProps> = ({ ...props }): ReactElement => {
  return (
    <div className='groups'>
      {data.tournament.groups.map(group => 
        <Group group={group} key={group.name}></Group>
      )}
    </div>
  )
}

export default Groups;
