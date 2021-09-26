import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./views";
import { isConfluxInstalled } from "./utils/ConfluxPortal";

function App() {

  useEffect(() => {
    const isConflux = isConfluxInstalled();

    // Network Version
    const networkVersion = window.conflux.networkVersion
    console.log(networkVersion);
  }, []);

  return (
    <>
      <Header address="0x0" />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
