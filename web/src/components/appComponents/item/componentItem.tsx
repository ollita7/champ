import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Divider,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import WebhookIcon from "@mui/icons-material/Webhook";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChartInIcon from "@mui/icons-material/BarChart";
import { IComponent } from "../../../network/services/component/component.service";
import "./styles.scss";
import { ROUTES } from "../../../navigation/constants";
import { IApplication } from "../../../network/services/application/application.service";

export interface IComponentItemProps {
  application: IApplication | undefined;
  component: IComponent;
  onEdit: (component) => void;
  onDelete: (component) => void;
}

const ComponentItem = ({
  application,
  component,
  onDelete,
  onEdit,
}: IComponentItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

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
    navigate(`${ROUTES.RISKS}/${ application?.project }/${ application?._id }/${ component._id }`);
  };

  return (
    <div className="component-item">
      <div className="item-wrapper">
        <ListItemIcon>
          <WebhookIcon />
        </ListItemIcon>
        <span className="name">{component?.name}</span>
        <Chip
          className="status"
          label={component?.type?.name}
          variant="outlined"
        />
      </div>
      <div className="menu-wrapper">
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
          <MenuItem className="context-menu" onClick={handleNavigateDashboard}>
            <ListItemIcon>
              <ChartInIcon fontSize="small" />
            </ListItemIcon>
            <span>See dashboard</span>
          </MenuItem>
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
        </Menu>
      </div>
    </div>
  );
};

export default ComponentItem;
