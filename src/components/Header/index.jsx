import { Container } from './styles';
import config from '../../../config.json';

export function Header() {
  return (
    <Container>
      <img src={config.banner || 'https://source.unsplash.com/random/1512x230'}/> 
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />

        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </Container>
  );
}
