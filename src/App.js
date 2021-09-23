import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import {Home} from "./views";

function App() {
  return (
    <>
      <Header title="Berry Farming" />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
