import "./styles.scss";
import SearchIcon from '@mui/icons-material/Search';
import { IProjectQueryParams } from "../../../network/services/project/project.service";

type IProps = {
  handleFilter: (data: IProjectQueryParams) => void,
}

const Search = ({ handleFilter }: IProps) => {

  const handleKeyUp = (event) => {
    const value = event.target.value;
    value.length >= 3 ?
      handleFilter({
        criteria: value
      }) : handleFilter({
        criteria: ''
      })
  }

  return (
    <div id="search-input" className="input-container" >
      <div className="input-form-wrapper">
        <SearchIcon className="search-icon" />
        <input type="text" className="input-form" onKeyUp={handleKeyUp}  />
      </div>
    </div>
  );
};

export default Search;


