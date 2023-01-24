import { ListItemIcon } from "@mui/material";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { RiskItem } from "../item";
import "./styles.scss";
import { IStoreDispatchProps } from "../../../../store/storeComponent";
import { IRisk } from "../../../../network/services/risk/risk.service";

export interface IRiskListProps {
  risks: IRisk[];
  total: number;
}

//TODO: integrate with endpoint
const RiskList = ({ risks }: IRiskListProps) => {
  if(risks && risks.length > 0){
    return (
      <div className="risk-list">
      { risks?.map((risk, index) => (
        <RiskItem 
          key={index}
          risk={risk}
        />
        ))}
    </div>
    );
  } else{
    return (
      <div className="risk-list">
         <div className="risk-item">
          <div className="item-wrapper">
            <ListItemIcon>
              <ReportGmailerrorredIcon />
            </ListItemIcon>
            <div className="risk-info">
              No risks
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RiskList;
