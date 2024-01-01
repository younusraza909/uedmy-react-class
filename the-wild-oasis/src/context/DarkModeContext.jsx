import { useContext } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const ToggleContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
    'darkMode'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((mode) => !mode);

  return (
    <ToggleContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ToggleContext.Provider>
  );
}

export const useDarkModeContext = () => {
  const context = useContext(ToggleContext);

  if (!context) throw new Error('Context was used outside of provider');

  return context;
};

export default DarkModeProvider;
