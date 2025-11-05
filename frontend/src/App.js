import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [path, setPath] = useState(window.location.pathname);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Listen for navigation changes (simple router without dependency)
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Render SignIn at /sign-in
  if (path === '/sign-in') {
    return <SignIn />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="/sign-in"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/sign-in');
            // trigger state update
            setPath('/sign-in');
          }}
        >
          Go to Sign In
        </a>
      </header>
    </div>
  );
}

export default App;
