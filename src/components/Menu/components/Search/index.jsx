import React from 'react';
import { StyledSearch } from './styles';

export function Search({ searchValue, setSearchValue }) {
  
  return (
    <StyledSearch>
      <input type="text" onChange={e => setSearchValue(e.target.value)} value={searchValue}/>
      <button>🔎</button>
    </StyledSearch>
  );
}
