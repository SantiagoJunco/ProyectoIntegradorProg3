import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from './Screens/Home'
import todasPopulares from "./Screens/todasPopulares"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home}  />
        <Route path='/detalle/id/:id' component={Home} /> 
        <Route path='/todasPopulares' component={todasPopulares} /> 
      </Switch>
      <Footer />
    </>
  );
}

export default App;
