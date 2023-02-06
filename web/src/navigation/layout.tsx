import { Outlet } from 'react-router-dom';
import ResponsiveMenu from '../components/menu/menu';

interface ILayoutProps {
}

const Layout = ({ ...props }: ILayoutProps): React.ReactElement => {
  return (
      <div className="layout">
        <ResponsiveMenu/>
        <Outlet />
      </div>
  );
};

export { Layout };