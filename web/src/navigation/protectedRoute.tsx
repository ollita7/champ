import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';
import { ROUTES } from './constants';
//import { Layout } from './layout';
import { IStoreDispatchProps } from '../store/storeComponent';
import { setProfile } from '../store/reducers/profile';
import { useGetProfile } from '../network/services/user/user.service';
import { getProfile } from '../store/selectors';
import { RootState } from "../store/store";
import { IProfileState } from '../store/reducers/profile';

interface IProps extends IStoreDispatchProps {
  profile: IProfileState;
}

const ProtectedRoute = ({ profile, ...props }: IProps): React.ReactElement => {
  const { data, isLoading, isError, isSuccess } = useGetProfile();
  
  useEffect(() => {
    props.dispatch(setProfile(data));
  }, [isSuccess]);

  return (
    <Fragment>
      {isLoading && <span>Loading page</span>}
      {isSuccess && profile.email && <></>}
      {isError && <Navigate to={ROUTES.LOGIN} />}
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  profile: getProfile(state),
});

export default connect(mapStateToProps)(ProtectedRoute);