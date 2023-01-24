import React, { ReactElement } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import './styles.scss';

export interface ISearchProps {
}

const Search: React.FC<ISearchProps> = ({ ...props }): ReactElement => {

  return (
    <Paper
      component="form"
      id="search-form"
    >

      <InputBase
        className='input-search'
        placeholder="Search "
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

    </Paper>

  );
}

export default (Search);
