import { IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './styles.scss';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IProject } from "../../../network/services/project/project.service";
import { Link, NavLink } from "react-router-dom";


export interface IAppCardProps {
  project: IProject,
  deleteConfirmation: any
}

const AppCard: React.FC<IAppCardProps> = ({ project, deleteConfirmation, ...props }): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteProject = () => {
    handleClose();
    deleteConfirmation(project);
  }

  return (
    <div className="project-card">

      <label className="name">
        <Link to={'applications/' + project?._id}>
          {project?.name}
        </Link>
      </label>

      <div className="scoreContainer">
        <div className="label-text">
          <label className="text">Maintainability Score:</label>
          <label className="score">{undefined}</label>
        </div>
        <div className="label-text">
          <label className="text">Security Score:</label>
          <label className="score">{undefined}</label>
        </div>
        <div className="label-text">
          <label className="text"># Risks:</label>
          <label className="score">{project?.analytics?.risks}</label>
        </div>
      </div>

      <IconButton className="options"
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}

      >
        <MenuItem onClick={handleClose}>
          <Link to={'project/' + project?._id}>
            <MenuItem className="context-menu">
              <ListItemIcon>
                <EditIcon fontSize="small" />
              </ListItemIcon>
              <span>Edit</span>
            </MenuItem>
          </Link>

        </MenuItem>
        <MenuItem onClick={deleteProject}>
          <MenuItem className="context-menu">
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <span>Delete</span>
          </MenuItem>
        </MenuItem>

      </Menu>
    </div>
  );
}
export default (AppCard);
