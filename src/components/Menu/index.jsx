import { StyledMenu } from './styles';
import { Logo } from './components/Logo';
import { Search } from './components/Search';

export function Menu({ searchValue, setSearchValue }) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
    </StyledMenu>
  );
}
