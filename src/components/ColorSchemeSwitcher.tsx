import { useEffect, useState } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';

export function ColorSchemeSwitcher() {
  const [theme, setTheme] = useState<'normal' | 'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <div className="color-scheme-switcher">
      {theme === 'dark' ?
        <button onClick={() => setTheme('light')}><IoSunny /></button> :
        <button onClick={() => setTheme('dark')}><IoMoon /></button>
      }
    </div>
  );
}