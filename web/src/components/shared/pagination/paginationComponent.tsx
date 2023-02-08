import "./styles.scss";

import Pagination from '@mui/material/Pagination';

type IProps = {
  count: number,
  onSetFilter: any,
  page: number
}

export const PaginationComponent = ({ page, count, onSetFilter }: IProps) => {

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onSetFilter({ page })
  };

  return (
    <div className="pagination-component">
      <Pagination count={count} page={page} color="primary" onChange={handleChange} />
    </div>
  );
};


