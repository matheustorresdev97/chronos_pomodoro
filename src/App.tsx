import './styles/theme.css';
import './styles/index.css';
import { Heading } from './components/Heading';

export default function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cumque
        incidunt accusamus commodi quasi sit, doloribus in fugiat, repellat
        laudantium voluptas praesentium labore dolore unde
      </p>
    </>
  )
}