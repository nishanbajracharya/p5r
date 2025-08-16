import './assets/styles/App.css';
import { months } from './data/months';
import { Day, Month } from './modules/Month';
import { MonthView } from './components/MonthView';

function App() {
  return (
    <>
      {
        months.map(month => <MonthView key={month.name} data={new Month(month.month, month.name, month.days as Day[])} />)
      }
    </>
  );
}

export default App;
