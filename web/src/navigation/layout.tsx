import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { LeftMenu } from '../components/leftMenu';
interface ILayoutProps {
}

const Layout = ({ ...props }: ILayoutProps): React.ReactElement => {

  return (
    <>
      <Header />
      <div id="layout">
        {/* <LeftMenu /> */}
        <Outlet />
      </div>
    </>
  );
};

export { Layout };