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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChartInIcon from "@mui/icons-material/BarChart";
import AddIcon from "@mui/icons-material/Add";

import { IProject } from "../../../network/services/project/project.service";
import "./styles.scss";
import { AppList } from "../../application/appList";
import ModalContainer from "../../shared/confirmationModal/modalContainer/ModalContainer";
import ApplicationModal from "../../application/card/applicationModal";
import { ROUTES } from "../../../navigation/constants";
import { Score } from "../../shared/score";

export interface IProjectItemProps {
  project: IProject;
  deleteConfirmation: any;
  onEditProject: any;
}

const ProjectItem = ({
  project,
  deleteConfirmation,
  onEditProject,
}: IProjectItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [showCreateApplicationModal, setShowCreateApplicationModal] =
    useState(false);
  const onShowCreateApplicationModal = () => {
    setShowCreateApplicationModal((prev) => !prev);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const editProject = () => {
    handleClose();
    onEditProject(project);
  };

  const deleteProject = () => {
    handleClose();
    deleteConfirmation(project);
  };

  const displayAppList = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavigateDashboard = () => {
    navigate(`${ROUTES.RISKS}/${project._id}`);
  };

  return (
    <div className={`item-container ${isExpanded ? "active" : ""}`}>
      <div className={`project-item ${isExpanded ? "active" : ""} `}>
        <IconButton
          className={isExpanded ? "expanded" : "collapsed"}
          aria-label="expand"
          onClick={displayAppList}
        >
          <ExpandMoreIcon />
        </IconButton>

        <label className="project-name" onClick={displayAppList}>
          {project?.name}
        </label>

        <Score
          tasksQty={project?.analytics?.tasks}
          mitigationsQty={project?.analytics?.mitigations}
          risksQty={project?.analytics?.risks}
        />
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
          <MenuItem className="context-menu" onClick={editProject}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <span>Edit Project</span>
          </MenuItem>
          <MenuItem className="context-menu" onClick={deleteProject}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <span>Delete</span>
          </MenuItem>
          <MenuItem
            className="context-menu"
            onClick={onShowCreateApplicationModal}
          >
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <span>Create new App</span>
          </MenuItem>
          <MenuItem className="context-menu" onClick={handleNavigateDashboard}>
            <ListItemIcon>
              <ChartInIcon fontSize="small" />
            </ListItemIcon>
            <span>See Dashboard</span>
          </MenuItem>
        </Menu>
      </div>
      {isExpanded && <AppList project={project} />}

      {showCreateApplicationModal && (
        <ModalContainer onShowModal={onShowCreateApplicationModal}>
          <ApplicationModal
            onShowModal={onShowCreateApplicationModal}
            project={project}
          />
        </ModalContainer>
      )}
    </div>
  );
};

export default ProjectItem;
