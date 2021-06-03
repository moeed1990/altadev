import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './Screens/Home'
import Header from "./Components/Header";

function App() {
  return (
      <Router>
          <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
