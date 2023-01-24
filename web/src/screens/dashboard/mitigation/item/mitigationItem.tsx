import { useState } from "react";
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

import "./styles.scss";
import { TaskList } from "../../task/list";

const MitigationItem = () => {
  
  const [isExpanded, setIsExpanded] = useState(false);

  const displayAppList = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={`mitigation-container ${isExpanded ? "active" : ""}`}>
      <div className="mitigation-item">
        <div className="item-wrapper">
          {/* <ListItemIcon>
            <WysiwygIcon />
          </ListItemIcon> */}
          <IconButton
              className={isExpanded ? "expanded" : "collapsed"}
              aria-label="expand"
              onClick={displayAppList}
            >
              <ExpandMoreIcon />
            </IconButton>
          <div className="mitigation-info">
            <span className="name">Mitigation Test</span>
            <span className="path">project/application/component</span>
          </div>
        </div>
      </div>
      {isExpanded && <TaskList/>}
    </div>

  );
};

export default MitigationItem;
