import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from './Screens/Home'
import todasPopulares from "./Screens/todasPopulares"
import todasCartel from "./Screens/todasCartel"
import DetallePelicula from "./Screens/DetallePelicula"
import SearchResults from './Screens/SearchResults'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home}  />
        <Route path='/detalle/id/:id' component={DetallePelicula} /> 
        <Route path='/todasPopulares' component={todasPopulares} /> 
        <Route path='/todasCartel' component={todasCartel} /> 
        <Route path='/busqueda/:busqueda' component={SearchResults} /> 
      </Switch>
      <Footer />
    </>
  );
}

export default App;