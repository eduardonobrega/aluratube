import { Menu } from '../components/Menu';
import { Header } from '../components/Header';
import { Timeline } from '../components/Timeline';

import config from '../../config.json';

import GlobalStyles from '../styles/global.js';

export default function HomePage() {
  return (
    <div>
      <GlobalStyles />
      <Menu />
      <Header />
      <Timeline playlists={config.playlists}/>
    </div>
  );
}
