import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './Screens/Home'
import Header from "./Components/Header";
import ServiceScreen from './Screens/ServiceScreen'
import WorkScreen from "./Screens/WorkScreen";
import ContactScreen from "./Screens/ContactScreen";

function App() {
  return (
      <Router>
          <Header/>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={ServiceScreen} />
            <Route path='/work' exact component={WorkScreen} />
            <Route path='/contact' exact component={ContactScreen} />
        </Switch>
      </Router>
  );
}

export default App;
