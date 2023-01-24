import { useState } from "react";
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./styles.scss";
import { IRisk } from "../../../../network/services/risk/risk.service";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../navigation/constants";
import { MitigationList } from "../../mitigation/list";

export interface IRiskItemProps {
  risk: IRisk;
}

const RiskItem = ({ risk }: IRiskItemProps) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const displayAppList = () => {
    setIsExpanded(!isExpanded);
  };

  const setTitle =()=>{
    return(
      <>
      <span className="name">{risk?.name}</span>
      in
      <span className="name">{risk?.info[0].component_type} Component</span>
      on
      <Link to={`${ROUTES.APPLICATION}/${risk?.info[0].app_id}`}>{risk?.info[0].path}</Link>
      </>
    )
  }


  return (
    
    <div className={`risk-container ${isExpanded ? "active" : ""}`}>
      <div className="risk-item">
        <div className="item-wrapper">
          {/* <ListItemIcon>
            <ReportGmailerrorredIcon />
          </ListItemIcon> */}
          <IconButton
            className={isExpanded ? "expanded" : "collapsed"}
            aria-label="expand"
            onClick={displayAppList}
          >
            <ExpandMoreIcon />
          </IconButton>
          <div className="risk-info">
            {setTitle()}
          </div>
        </div>

      </div>
      {isExpanded && <MitigationList mitigations={risk?.mitigations}/>}
    </div>
  );
};


export default RiskItem;
