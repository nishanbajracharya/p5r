import { useEffect, useState } from "react";

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
        <button onClick={() => setTheme('light')}><span>&#9788;</span></button> :
        <button onClick={() => setTheme('dark')}><span>&#9790;</span> </button>
      }
    </div>
  );
}