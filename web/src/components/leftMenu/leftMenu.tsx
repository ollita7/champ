
import { MenuItem, MenuList, Paper } from '@mui/material';
import { mdiViewColumnOutline, mdiChartTimeline, mdiChartLine, mdiPlaylistEdit, mdiCardsVariant, mdiToyBrickOutline, mdiXml, mdiPackageUp, mdiChevronLeft } from '@mdi/js';
import Icon from '@mdi/react';
import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProfile } from '../../store/selectors';
import { Project } from './project';
import './styles.scss'
export interface ILeftMenuProps {
}

const LeftMenu: React.FC<ILeftMenuProps> = ({ ...props }): ReactElement => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const project = {
    imgSrc: "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png",
    title: "Nombre Proyecto",
    desc: "Descripcion proyecto"
  }

  return (
    <div className={`left-menu`}>
      
      <div className={`conainer-efect ${isActive ? 'open' : 'close'}`}>
      <div className={`arrow ${isActive ? 'open' : 'close'}`} onClick={toggleClass}>
        <Icon className='icon-close' path={mdiChevronLeft} size={1} />
      </div>
        <div className={`conainer-left-menu`}>
          <Project project={project} />
          <h3 className='title'>PLANNING</h3>
          <Paper className="context-menu">
            <MenuList>

              <MenuItem>
                <Icon className="icon-menu" path={mdiChartTimeline} size={1} />
                Roadmap
              </MenuItem>
              <MenuItem>
                <Icon className="icon-menu" path={mdiPlaylistEdit} size={1} />
                Backlog
              </MenuItem>
              <MenuItem>
                <Icon className="icon-menu" path={mdiViewColumnOutline} size={1} />
                Active Sprints
              </MenuItem>
              <MenuItem>
                <Icon className="icon-menu" path={mdiChartLine} size={1} />
                Reports
              </MenuItem>
            </MenuList>
          </Paper>

          <Paper className="main-menu">
            <MenuList>

              <MenuItem>
                <Icon className="icon-menu" path={mdiCardsVariant} size={1} />
                Issues
              </MenuItem>
              <MenuItem>
                <Icon className="icon-menu" path={mdiToyBrickOutline} size={1} />
                Components
              </MenuItem>
            </MenuList>
          </Paper>
          <h3 className='title'>DEVELOPMENT</h3>
          <Paper className="menu-container">
            <MenuList>
              <MenuItem>
                <Icon className="icon-menu" path={mdiXml} size={1} />
                Code
              </MenuItem>
              <MenuItem>
                <Icon className="icon-menu" path={mdiPackageUp} size={1} />
                Realeases
              </MenuItem>
            </MenuList>
          </Paper>
        </div>
      </div>
    </div>

  );
}
export default (LeftMenu);
