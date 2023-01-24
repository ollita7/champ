import { useState } from "react";
import { useParams } from 'react-router-dom';
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { OverallScore } from "../../components/dashboard/overallScore";
import { RiskList } from "./risk/list";
import { TaskList } from "./task/list";
import { MitigationList } from "./mitigation/list";
import "./styles.scss";

import { useList, IRiskQueryParams } from '../../network/services/risk/risk.service';
import { useScore } from "../../network/services/analytics/analytics.service";
import { LoadingSpinner } from "../../components/shared/loadingSpinner";

export interface IDashboardProps {}

//TODO: need to integrate with endpoint
const Dashboard = () => {
  const params = useParams();

  let queryParams = {
    page: 1,
    size: 10,
    project_id: params['idProject'],
    application_id: params['idAplication'],
    component_id:  params['idComponent']

  };

  let analytcsQueryParams = {
    project_id: params['idProject'],
    application_id: params['idAplication'],
    component_id:  params['idComponent']
  };

  let { data, isLoading, isError, isSuccess } = useList(queryParams);
  let { data: analytics, isError: analyticsIsError, isSuccess: analyticsIsSuccess } = useScore(analytcsQueryParams);

  const [isExpandedTask, setIsExpandedTask] = useState(false);
  const [isExpandedRisk, setIsExpandedRisk] = useState(true);
  const [isExpandedMitigation, setIsExpandedMitigation] = useState(false);

  const displayTaskList = () => {
    setIsExpandedTask(!isExpandedTask);
  };

  const displayRiskList = () => {
    setIsExpandedRisk(!isExpandedRisk);
  };

  const displayMitigationList = () => {
    setIsExpandedMitigation(!isExpandedMitigation);
  };

  return (
    <div id="dashboard" className="page-content">
      <div className="top title">
        {/* <IconButton
          className={isExpandedRisk ? "expanded" : "collapsed"}
          aria-label="expand"
          onClick={displayRiskList}
        >
          <ExpandMoreIcon />
        </IconButton> */}
        <h3 onClick={displayRiskList}>Risks ({data?.risks.length})</h3>
        
      </div>
      <div className="row">
        <div className="lists-wrapper">
          <div className="list">
          {isLoading ? <LoadingSpinner /> : (
            <>
              {<RiskList risks={data?.risks} total={data?.total} />}
            </>
          )}
                
          </div>

          {/* <div className="list">
            <div className="title">
              <IconButton
                className={isExpandedMitigation ? "expanded" : "collapsed"}
                aria-label="expand"
                onClick={displayMitigationList}
              >
              <ExpandMoreIcon />
              </IconButton>
              <h3 onClick={displayMitigationList}>Mitigations (8)</h3>

            </div>
            {isExpandedMitigation && <MitigationList />}
          </div> */}

          {/* <div className="list">
            <div className="title">
              <IconButton
                className={isExpandedTask ? "expanded" : "collapsed"}
                aria-label="expand"
                onClick={displayTaskList}
              >
                <ExpandMoreIcon />
              </IconButton>
              <h3 onClick={displayTaskList}>Tasks (8)</h3>

            </div>
            {isExpandedTask && <TaskList />}
          </div> */}
        </div>

        <OverallScore tasksQty={analytics?.tasks} MitigationsQty={analytics?.mitigations} RisksQty={analytics?.risks} />
      </div>
    </div>
  );
};

export default Dashboard;
