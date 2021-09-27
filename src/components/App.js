import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Footer } from "./Molecules/Footer";
import Navbar from './Organisms/Navbar';

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
        <Footer className="w-100 h-auto text-center py-1 text-primary border-top border-primary mt-1">@copyright - 2021</Footer>
      </div>
    </Router>
  );
}

export default App;
