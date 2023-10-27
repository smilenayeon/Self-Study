
import './App.css';
import Header from "./componenets/Header";
import Main from "./componenets/Main";
import Footer from "./componenets/Footer";
import React,{useState, createContext} from  "react";

const themeContext = createContext();


function App() {

  const [isDark, setIsDark] = useState (false);

  return (

    <themeContext.Provider value={{isDark, setIsDark}}>
    <div className="app">

    <Header />
    <Main />
    <Footer />
      
    </div>
    </themeContext.Provider>
  );
}

export {themeContext};
export default App;
