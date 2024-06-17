import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Listado from "./components/Listado";
import {  Route , Routes} from "react-router-dom";
import Footer from "./components/Footer";
import  Header from './components/Header';
import CardList from "./components/CardList";
import Results from "./components/Results";
import SeriesListado from "./components/SeriesListado";
import CardSeries from  "./components/CardSeries"
import Popular from "./components/Popular"


function App() {
  const [count, setCount] = useState(0);

  const addFav = ()=>{
    console.log("funciona");
  }
  return (
    <>
      

      <Header/>
      <Routes>
         <Route path="/" Component={Login} />
         <Route path="/listado" Component={Listado} />
         <Route path="/all" Component={Popular} />
         <Route path="/series" Component={SeriesListado} />
         <Route path="/moviedetail" Component = {( props) =>  <CardList addFav = {addFav} {...props} />} />
         <Route path="/seriesdetail" Component=  {  CardSeries  } />
         <Route path="/results" Component={Results}/>
      </Routes>
      <Footer/> 
      
    </>
  );
}

export default App;
