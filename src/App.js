import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './Screens/Home'
import Header from "./Components/Header";
import ServiceScreen from './Screens/ServiceScreen'
import WorkScreen from "./Screens/WorkScreen";
import ContactScreen from "./Screens/ContactScreen";
import AboutScreen from "./Screens/AboutScreen";

function App() {
  return (
      <Router>
          <Header/>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={ServiceScreen} />
            <Route path='/about' component={AboutScreen} />
            <Route path='/work' component={WorkScreen} />
            <Route path='/contact' component={ContactScreen} />
        </Switch>
      </Router>
  );
}

export default App;
