import React, { ReactElement } from 'react';
import { connect } from "react-redux";
import './styles.scss'
import ResponsiveMenu from '../../components/menu/menu';
import { IStoreDispatchProps } from '../../store/storeComponent';
import { getApplication } from '../../store/selectors';
import { RootState } from "../../store/store";
import { IApplicationState } from '../../store/reducers/application';
import Group from './group';
import { userGetTournament } from '../../network/services/tournament.service';

export interface IGroupsProps {
  application: IApplicationState;
}

const Groups: React.FC<IGroupsProps> = ({application, ...props }): ReactElement => {
  const { data: tournament, isLoading, isSuccess } = userGetTournament(application.tournament, application.category);

  return (
    <div className='groups'>
      {isLoading && <div>Cargando...</div>}
      {isSuccess && tournament.groups.map(group => 
        <Group group={group} key={group.name}></Group>
      )}
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  application: getApplication(state),
});

export default connect(mapStateToProps)(Groups);