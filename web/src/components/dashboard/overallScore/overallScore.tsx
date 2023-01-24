import "./styles.scss";

export interface IOverallScoreProps {
  tasksQty: number;
  MitigationsQty: number;
  RisksQty: number;
}

const OverallScore = ({ tasksQty, MitigationsQty, RisksQty }) => {
  return (
    <div className="overall-score-container">
      <div className="score-title">
        <h3>Overall Score</h3>
      </div>
      <div className="score-content">
        <div className="score">
          <div className="sub-title">Risks</div>
          <div className="final-score risks">{RisksQty}</div>
        </div>
        <div className="score">
          <div className="sub-title">Mitigations</div>
          <div className="final-score mitigations">{MitigationsQty}</div>
        </div>
        <div className="score">
          <div className="sub-title">Tasks</div>
          <div className="final-score tasks">{tasksQty}</div>
        </div>
      </div>
    </div>
  );
};

export default OverallScore;
