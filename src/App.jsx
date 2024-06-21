import "./App.css";
// import Login from "./components/Login";
import Movie from "./components/Movies.jsx"
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Results from "./components/Results";
import SeriesListado from "./components/SeriesListado";
import CardSeries from "./components/CardSeries";
import Popular from "./components/Popular";
import CardVideo from "./components/CardVideo";
import CardVideoSeries from "./components/CardVideoSeries";

function App() {
  const addFav = () => {
    console.log("funciona");
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Popular} />
        <Route path="/movies" Component={Movie} />
         <Route path="/all" Component={Popular} /> 
        <Route path="/series" Component={SeriesListado} />
        <Route
          path="/moviedetail"
          Component={(props) => <CardList addFav={addFav} {...props} />}
        />
        <Route path="/seriesdetail" Component={CardSeries} />
        <Route path="/results" Component={Results} />
        <Route path="/watch" Component={CardVideo} />
        <Route path="/watchSeries" Component={CardVideoSeries} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
