import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChartInIcon from "@mui/icons-material/BarChart";
import AddIcon from "@mui/icons-material/Add";
import "./styles.scss";
import { IApplication } from "../../../network/services/application/application.service";
import { ROUTES } from "../../../navigation/constants";
import AppComponentList from "../appComponent/appComponentList/appComponentList";
import { Score } from "../../shared/score";
import ModalContainer from "../../shared/confirmationModal/modalContainer/ModalContainer";
import ComponentModal from "../../shared/componentModal";

export interface IAppItemProps {
  app: IApplication;
  onEdit: (app) => void;
  onDelete: (app) => void;
}

const AppItem = ({ app, onEdit, onDelete }: IAppItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showCreateComponentModal, setShowCreateComponentModal] = useState(false);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = () => {
    onEdit(app);
    handleClose();
  };
  const handleDelete = () => {
    onDelete(app);
    handleClose();
  };

  const handleNavigateApplicationScreen = () => {
    navigate(`${ROUTES.APPLICATION}/` + app._id);
  };

  const handleNavigateDashboard = () => {
    navigate(`${ROUTES.RISKS}/${app.project}/${app._id}`);
  };

  const displayComponentList = () => {
    setIsExpanded(!isExpanded);
  };

  const onShowCreateComponentModal = () => {
    setShowCreateComponentModal((prev) => !prev);
    handleClose();
  };

  return (
    <div className={`item-app-container ${isExpanded ? "active" : ""}`}>
      <div className={`app-item ${isExpanded ? "active" : ""}`}>
        <div className="item-wrapper">
          <IconButton
            className={isExpanded ? "expanded" : "collapsed"}
            aria-label="expand"
            onClick={displayComponentList}
          >
            <ExpandMoreIcon />
          </IconButton>
          <span className="name" onClick={handleNavigateApplicationScreen}>
            {app.name}
          </span>
          <Score
            tasksQty={app?.analytics?.tasks}
            mitigationsQty={app?.analytics?.mitigations}
            risksQty={app?.analytics?.risks}
          />
        </div>
        <div className="menu-wrapper">
          <Divider orientation="vertical" flexItem className="divider" />
          <IconButton
            className="options"
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
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
              <span>Edit App</span>
            </MenuItem>
            <MenuItem className="context-menu" onClick={handleDelete}>
              <ListItemIcon>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
              <span>Delete</span>
            </MenuItem>
            <MenuItem
              className="context-menu"
              onClick={onShowCreateComponentModal}
            >
              <ListItemIcon>
                <AddIcon fontSize="small" />
              </ListItemIcon>
              <span>Create new Component</span>
            </MenuItem>
            <MenuItem
              className="context-menu"
              onClick={handleNavigateDashboard}
            >
              <ListItemIcon>
                <ChartInIcon fontSize="small" />
              </ListItemIcon>
              <span>See Dashboard</span>
            </MenuItem>
            <MenuItem
              className="context-menu"
              onClick={handleNavigateApplicationScreen}
            >
              <ListItemIcon>
                <MoreHorizIcon fontSize="small" />
              </ListItemIcon>
              <span>View Details</span>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {isExpanded && <AppComponentList application={app} />}

      {showCreateComponentModal && (
        <ModalContainer onShowModal={onShowCreateComponentModal}>
          <ComponentModal
            onShowModal={onShowCreateComponentModal}
            appId={app?._id}
            projectId={app?.project}
          />
        </ModalContainer>
      )}
    </div>
  );
};

export default AppItem;
