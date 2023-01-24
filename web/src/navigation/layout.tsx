import { Outlet } from 'react-router-dom';
interface ILayoutProps {
}

const Layout = ({ ...props }: ILayoutProps): React.ReactElement => {

  return (
    <>
      <div id="layout">
        {/* <LeftMenu /> */}
        <Outlet />
      </div>
    </>
  );
};

export { Layout };