import { useEffect, useState } from 'react';

import './assets/styles/App.css';
import { months } from './data/months';
import { Day, Month } from './modules/Month';
import { MonthView } from './components/MonthView';
import NavigationBar from './components/NavigationBar';
import { ColorSchemeSwitcher } from './components/ColorSchemeSwitcher';


function App() {
  const [open, setOpen] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => window.location.hash = '', 100);
  }

  useEffect(() => {
    // Scroll to the element with the ID matching the hash
    const hash = window.location.hash;
    if (hash) {

      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        // If the element exists, scroll to it
        if (element) {
          element.scrollIntoView();
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <header>
        <h1>
          <button className="menu-toggle" onClick={() => setOpen(open => !open)}>☰</button>
          <span className="title">Persona 5 Royal</span>
          <ColorSchemeSwitcher />
        </h1>
      </header>
      <main className="wrapper">
        <NavigationBar open={open} setOpen={() => setOpen(false)} />
        <div className="main-content">
          {
            months.map(month => <MonthView key={month.name} data={new Month(month.month, month.name, month.days as Day[], month.stats)} />)
          }
        </div>
      </main>
      <button className="go-to-top" onClick={scrollToTop} title="Scroll to top">↑</button>
    </>
  );
}

export default App;
