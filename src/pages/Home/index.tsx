import { DefaultLayout } from '../../layouts/DefaultLayout';

import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};


export function Home(props: HomeProps) {
  const { state, setState } = props;

  return (
    <DefaultLayout>
      <Container>
        <CountDown {...props} />
      </Container>

      <Container>
        <MainForm {...props}  />
      </Container>
    </DefaultLayout>
  );
}