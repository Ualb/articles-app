import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from "./views/index.js";
import NewArticle from "./views/newArticle.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes without layouts */}
      <Route path="/" exact component={Index} />
      <Route path="/article/" component={NewArticle} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
