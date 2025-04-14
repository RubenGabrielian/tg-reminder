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
      <header className="header">
        <h1>Reminders</h1>
      </header>

      <main className="main">
        <div className="empty-state">
          <div className="notes-illustration">
            <div className="note yellow">
              <div className="note-lines">
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            <div className="note blue">
              <div className="note-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            <div className="note green">
              <div className="note-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            <div className="decoration-dots"></div>
            <div className="decoration-waves"></div>
            <div className="bulb">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.5V3M12 21v-1.5M3 12h1.5M19.5 12H21M4.929 4.929l1.06 1.06M18.011 18.011l-1.06-1.06M18.011 5.989l-1.06 1.06M4.929 19.071l1.06-1.06M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <h2>No reminders</h2>
          <p>Create a reminder and it will show up here.</p>
        </div>
      </main>

      <nav className="bottom-nav">
        <button className="nav-button menu-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <button className="add-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <button className="nav-button search-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>
    </div>
  )
}

export default App
