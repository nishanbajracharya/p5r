import './assets/styles/App.css';
import April from './data/april.json';
import { Day, Month } from './modules/Month';
import { MonthView } from './components/MonthView';

function App() {
  return (
    <>
      <MonthView data={new Month(April.month, April.name, April.days as Day[])} />
    </>
  );
}

export default App;
