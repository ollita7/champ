import Tooltip from '@mui/material/Tooltip';
import './styles.scss';

export interface IScoreProps {
  tasksQty: number | undefined;
  mitigationsQty: number | undefined;
  risksQty: number | undefined;
}

const Score = ({ tasksQty, mitigationsQty, risksQty }: IScoreProps) => {

  return (
    <div className="scoreContainer">
      <Tooltip title="Risks" arrow placement="top">
        <div className="label-text r">
          <label className="text">R</label>
          <label className="score">{risksQty}</label>
        </div>
      </Tooltip>
      <Tooltip title="Mitigations" arrow placement="top">
        <div className="label-text ms">
          <label className="text">M</label>
          <label className="score">{mitigationsQty}</label>
        </div>
      </Tooltip>
      <Tooltip title="Tasks" arrow placement="top">
        <div className="label-text ss">
          <label className="text">T</label>
          <label className="score">{tasksQty}</label>
        </div>
      </Tooltip>
    </div>
  );
};

export default Score;
