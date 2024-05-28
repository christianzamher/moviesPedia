import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Listado from "./components/Listado";
import {  Route , Routes} from "react-router-dom";
import Footer from "./components/Footer";
import  Header from './components/Header';
import CardList from "./components/CardList";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      

      <Header/>
      <Routes>
         <Route path="/" Component={Login} />
         <Route path="/listado" Component={Listado} />
         <Route path="/moviedetail" Component={CardList} />
      </Routes>
      <Footer/> 
      
    </>
  );
}

export default App;
