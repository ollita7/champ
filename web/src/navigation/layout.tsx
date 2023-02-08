import { Outlet } from 'react-router-dom';
import { connect } from "react-redux";
import ResponsiveMenu from '../components/menu/menu';
import { IStoreDispatchProps } from '../store/storeComponent';
import { setProfile } from '../store/reducers/profile';
import { useGetUser } from '../network/services/user.service';
import { getProfile } from '../store/selectors';
import { RootState } from "../store/store";
import { IProfileState } from '../store/reducers/profile';

interface ILayoutProps extends IStoreDispatchProps {
  profile: IProfileState;
}

const Layout = ({ ...props }: ILayoutProps): React.ReactElement => {

  return (
      <div className="layout">
        <ResponsiveMenu/>
        <Outlet />
      </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  profile: getProfile(state),
});

export default connect(mapStateToProps)(Layout);