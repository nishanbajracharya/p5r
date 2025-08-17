import { useState } from 'react';

import './assets/styles/App.css';
import { months } from './data/months';
import { Day, Month } from './modules/Month';
import { MonthView } from './components/MonthView';
import NavigationBar from './components/NavigationBar';


function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header><h1><button className="menu-toggle" onClick={() => setOpen(open => !open)}>☰</button>Persona 5 Royal</h1></header>
      <main className="wrapper">
        <NavigationBar open={open} setOpen={() => setOpen(false)} />
        <div className="main-content">
          {
            months.map(month => <MonthView key={month.name} data={new Month(month.month, month.name, month.days as Day[], month.stats)} />)
          }
        </div>
      </main>
    </>
  );
}

export default App;
