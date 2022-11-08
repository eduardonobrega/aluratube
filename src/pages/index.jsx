import { Menu } from '../components/Menu';
import { Header } from '../components/Header';
import { Timeline } from '../components/Timeline';
import { useState } from 'react';


import config from '../../config.json';

import GlobalStyles from '../styles/global.js';

export default function HomePage() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div>
      <GlobalStyles />
      <Menu searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Header />
      <Timeline searchValue={searchValue} playlists={config.playlists} aluraTubes_fav={config.aluraTubes_fav}/>
    </div>
  );
}
