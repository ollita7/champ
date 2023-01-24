import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChartInIcon from "@mui/icons-material/BarChart";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip";

import { ROUTES } from "../../../../navigation/constants";
import "./styles.scss";
import { IComponent } from "../../../../network/services/component/component.service";
import { IApplication } from "../../../../network/services/application/application.service";

export interface IComponentItemProps {
  app: IApplication;
  component: IComponent;
  onEdit: (component) => void;
  onDelete: (component) => void;
}

const AppComponentItem = ({
  app,
  component,
  onDelete,
  onEdit,
}: IComponentItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    onEdit(component);
    handleClose();
  };

  const handleDelete = () => {
    onDelete(component);
    handleClose();
  };

  const handleNavigateDashboard = () => {
    navigate(`${ROUTES.RISKS}/${app.project}/${app._id}/${component._id}`);
  };

  return (
    <div className="app-component-item">
      <div className="item-wrapper">
        <div className="chip-wrapper">
          <Chip
            className="status"
            label={component?.type?.name}
            variant="outlined"
          />
        </div>
        <span className="name">{component?.name} </span>
      </div>
      <div className="app-menu-wrapper">
        <Divider orientation="vertical" flexItem className="divider" />
        <IconButton
          className="options"
          aria-label="more"
          id="long-button"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem className="context-menu" onClick={handleEdit}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <span>Edit Component</span>
          </MenuItem>
          <MenuItem className="context-menu" onClick={handleDelete}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <span>Delete</span>
          </MenuItem>
          <MenuItem className="context-menu" onClick={handleNavigateDashboard}>
            <ListItemIcon>
              <ChartInIcon fontSize="small" />
            </ListItemIcon>
            <span>See Dashboard</span>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default AppComponentItem;
