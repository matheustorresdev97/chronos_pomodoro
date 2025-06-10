import './styles/theme.css';
import './styles/index.css';

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessageContainer';
import { MainRouter } from './routers/main.router';

export default function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  )
}