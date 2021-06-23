import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './Screens/Home'
import Header from "./Components/Header";
import ServiceScreen from './Screens/ServiceScreen'
import WorkScreen from "./Screens/WorkScreen";
import ContactScreen from "./Screens/ContactScreen";
import AboutScreen from "./Screens/AboutScreen";
import {Loader} from "./Components/Loader";
import WebDevelopmentScreen from "./Screens/WebDevelopmentScreen";
import AppdevScreen from "./Screens/AppdevScreen"
import WebDesignScreen from "./Screens/WebDesignScreen"

function App() {

  return (
      <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={AboutScreen} />
            <Route path='/work' component={WorkScreen} />
            <Route path='/contact' component={ContactScreen} />
            <Route path='/loader' component={Loader} />
            <Route path='/services' exact component={ServiceScreen} />
            <Route path='/services/webdesign' component={WebDesignScreen} />
            <Route path='/services/webdev' component={WebDevelopmentScreen} />
            <Route path='/services/appdev' component={AppdevScreen} />
        </Switch>
      </Router>
  );
}

export default App;
