import './styles/theme.css';
import './styles/index.css';

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext';

export default function App() {
  return (
  <TaskContextProvider>
    <Home />
  </TaskContextProvider>
  )
}