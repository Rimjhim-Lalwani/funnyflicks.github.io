import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Joke from "./components/Joke";
import Landing from "./components/Landing";
import Cards from "./components/cards";
import Manga from "./components/manga";
import Game1 from "./components/game1";
import Navbar from "./components/navbar";
import Game2 from "./components/game2";
import ReactDOM from 'react-dom'

 
const App = () => {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/landing" element={<Landing/>}></Route>
        <Route exact path="/cards" element={<Cards/>}></Route> 
        <Route exact path="/manga" element={<Manga/>}></Route>  
        <Route exact path="/jokes" element={<Joke/>}></Route> 
        <Route exact path="/snake" element={<Game1/>}></Route>
        <Route exact path="/tictactoe" element={<Game2/>}></Route> 
        </Routes> 
        <Landing/>
        <Cards/>
        <Manga/>
        <Joke/>
        <Footer/>
     
      </BrowserRouter>
        
    );
}
 
export default App;