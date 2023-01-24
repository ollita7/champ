import React, { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { Option } from "./option";
import "./styles.scss";
import { User } from "./user";
import { ROUTES } from "../../navigation/constants";
export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = ({ ...props }): ReactElement => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="menu-container">
        <ul className="menu">
          <li>
            <Option
              title="Dashboard"
              options={[]}
              selected={location.pathname == ROUTES.HOME || location.pathname.includes('/risk/') }
              url={ROUTES.HOME}
            />
          </li>
          <li>
            <Option
              title="Projects"
              options={[]}
              selected={location.pathname.startsWith(ROUTES.PROJECTS)}
              url={ROUTES.PROJECTS}
            />
          </li>
        </ul>
        <ul className="user">
          <li>
            <User />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
