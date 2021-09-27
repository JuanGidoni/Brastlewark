import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Footer } from "./Molecules";
import { Item, Navbar } from './Organisms';
import { Layout } from "./Templates";
import { Main, Filter } from "./Pages";

const App = () => {
  return (
    <Router>
      <Layout className="container-fluid p-0 m-0">
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/filter/:id/:type" exact>
              <Filter />
            </Route>
            <Route path="/item/:id" exact>
              <Item />
            </Route>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="*">
              <>Not found</>
            </Route>
          </Switch>
          <Footer className="w-100 h-auto text-center py-1 text-primary border-top border-primary mt-1">@copyright - 2021</Footer>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
