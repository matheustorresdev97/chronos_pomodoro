import { DefaultLayout } from '../../layouts/DefaultLayout';

import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};


export function Home(props: HomeProps) {
  const { state, setState } = props;

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