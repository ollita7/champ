import { IMitigation } from "../../../../network/services/risk/risk.service";
import { MitigationItem } from "../item";
import "./styles.scss";


export interface IMitigationListProps {
  mitigations  : IMitigation[];
}

//TODO: integrate with endpoint
const MitigationList = ( {mitigations}  : IMitigationListProps ) => {
  return (
    <div className="mitigation-list-container">
      <div className="mitigation-list">
        {/* {data?.map((mitigation), index) => ( */}
          <MitigationItem />
        {/* ))} */}
        {/* {!data?.length && <div>No Mitigations</div>} */}
        { mitigations?.map((risk, index) => (
          <MitigationItem 
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MitigationList;
