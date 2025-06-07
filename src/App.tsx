import './styles/theme.css';
import './styles/index.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';

export default function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  )
}