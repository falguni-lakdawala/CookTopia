import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Page from "./pages/Page";
import page_not_found from "./pages/page_not_found";


function App() {




  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Page} />
            <Route path="/home" component={Page} />
            <Route path="/search" component={Page} />
            <Route path="/shoppinglist" component={Page} />
            <Route path="/recipes" component={Page} />
            <Route path="/team" component={Page} />
            <Route path="/signup" component={Page} />
            <Route path="/profile" component={Page} />
            <Route path='/recipecontent' component={Page}/>
            <Route path="*" component={page_not_found} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
