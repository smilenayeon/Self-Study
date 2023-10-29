import "./App.css";
import Header from "./componenets/Header";
import Main from "./componenets/Main";
import Footer from "./componenets/Footer";
import React, { useState, createContext } from "react";

const themeContext = createContext();
const userContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState ("");

  return (
    <userContext.Provider value={{user, setUser}}>
    <themeContext.Provider value={{ isDark, setIsDark }}>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </themeContext.Provider>
    </userContext.Provider>
  );
}

export { themeContext, userContext };
export default App;
