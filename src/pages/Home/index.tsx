import { DefaultLayout } from '../../layouts/DefaultLayout';

import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    document.title = 'Chronos Pomodoro';
  }, []);
  
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