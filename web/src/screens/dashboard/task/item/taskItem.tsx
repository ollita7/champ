import { ListItemIcon } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import Chip from "@mui/material/Chip";
import "./styles.scss";

const TaskItem = () => {
  return (
    <div className="task-item">
      <div className="item-wrapper">
        <ListItemIcon>
          <ReportGmailerrorredIcon />
        </ListItemIcon>
        <div className="task-info">
          <div className="info-wrapper">
            <span className="name">Fix security</span>
            <span className="path">project/application/component</span>
          </div>
          <Chip className="status" label="TO DO" />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
