import { DefaultLayout } from '../../layouts/DefaultLayout';

import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';


export function Home() {
  return (
    <DefaultLayout>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </DefaultLayout>
  );
}