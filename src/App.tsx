import './styles/theme.css';
import './styles/index.css';

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessageContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AboutPomodoro } from './pages/AboutPomodoro';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-pomodoro/' element={<AboutPomodoro />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MessagesContainer>
    </TaskContextProvider>
  )
}