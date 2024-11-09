import { ReactComponent as Logo } from './logo.svg';
import { OrbitProgress } from "react-loading-indicators";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo width='50%' height='50%' />
      <p>Тьма надвигается!</p>
      <OrbitProgress variant="disc" color="#ffffff" size="medium" speedPlus="-5" text="" textColor="" />
      </header>

    </div>
  );
}

export default App;