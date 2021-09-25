import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Organisms/Navbar';
import './App.css';

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/age">
          </Route>
          <Route path="/weight">
          </Route>
          <Route path="/height">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
