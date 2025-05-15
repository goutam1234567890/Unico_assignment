import React, { useContext, useEffect } from "react";
import Home from "./pages/Home";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { theme, toggleTheme } = useContext(GlobalContext);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);

  return (
    <div className="app-container">
      <header>
        <h1>Unico Product Cards</h1>
        <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle Theme">
          {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
