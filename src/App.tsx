import { useEffect } from 'react'
import './App.css'

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    };
  }
}

function App() {
  useEffect(() => {
    // Initialize Telegram WebApp
    window.Telegram.WebApp.ready();
    
    // Expand the app to full size
    window.Telegram.WebApp.expand();
  }, []);

  return (
    <div className="app">
      <h1>Welcome to My Telegram Mini App!</h1>
      <div className="card">
        <p>
          This is a simple Telegram Mini App built with React and TypeScript.
        </p>
        <button onClick={() => window.Telegram.WebApp.close()}>
          Close App
        </button>
      </div>
    </div>
  )
}

export default App
