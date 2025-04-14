import { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import './App.css'

function App() {
  useEffect(() => {
    // Initialize Telegram WebApp
    WebApp.ready();
    
    // Expand the app to full size
    WebApp.expand();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Reminders</h1>
      </header>

      <main className="main">
        <div className="empty-state">
          <div className="notes-illustration">
            <div className="note yellow"></div>
            <div className="note blue"></div>
            <div className="note green"></div>
            <div className="bulb"></div>
            <div className="dots"></div>
            <div className="waves"></div>
          </div>
          <h2>No reminders</h2>
          <p>Create a reminder and it will show up here.</p>
        </div>
      </main>

      <nav className="bottom-nav">
        <button className="nav-button menu-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <button className="add-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <button className="nav-button search-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>
    </div>
  )
}

export default App
