import logo from '../logo.svg';
import General from './General';
import Educational from './Educational';
import Practical from './Practical';
import '../styles/App.css';

const App = () => {
  return (
    <div className='app'>
      <h1 className='title'>Curriculum Vitae</h1>
      <General />
      <Educational />
      <Practical />
    </div>
  )
}

export default App;
