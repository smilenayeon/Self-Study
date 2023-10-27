
import './App.css';
import Header from "./componenets/Header";
import Main from "./componenets/Main";
import Footer from "./componenets/Footer";
import React,{createContext} from  "react";


const themeContext = createContext();


function App() {

const  theme = {style: {backgroundColor:"pink"} }

  return (

    <themeContext.Provider value={theme}>
    <div className="app">

    <Header />
    <Main/>
    <Footer />
      
    </div>
    </themeContext.Provider>
  );
}

export {themeContext};
export default App;
