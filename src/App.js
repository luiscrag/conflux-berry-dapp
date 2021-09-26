import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./views";
import { isConfluxInstalled } from "./utils/ConfluxPortal";

function App() {

  useEffect(() => {
    const isConflux = isConfluxInstalled();

  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
