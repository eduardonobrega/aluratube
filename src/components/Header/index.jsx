import { Container } from './styles';
import config from '../../../config.json';

export function Header() {
  return (
    <Container>
      {/* <img src="Banner"/> */}
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
