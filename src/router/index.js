import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "containers/dashboard/dashboard";
import Home from "containers/home";
import MenuMap from "./MenuMap";
import NoPage from "components/NoPage";
import { LoadableImport } from "utils/utils";
export function rootRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" name="根布局" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export function childRouter() {
  return (
    <Switch>
      <Route exact path="/" name="首页" component={Home} />
      {MenuMap.map((item) => {
        if (item.children) {
          return item.children.map((item) => {
            return (
              <Route
                key={item.path}
                exact
                path={item.path}
                name={item.name}
                component={item.component}
              />
            );
          });
        } else {
          return (
            <Route
              key={item.path}
              exact
              path={item.path}
              name={item.name}
              component={item.component}
            />
          );
        }
      })}
      <Route
        exact
        path="/blog/detail"
        name="博客详情"
        component={LoadableImport(() => import("containers/blog/BlogDetail"))}
      />
      <Route
        exact
        path="/blog/search"
        name="博客搜索"
        component={LoadableImport(() => import("containers/blog/search"))}
      />

      <Route path="/*" name="404" component={NoPage} />
    </Switch>
  );
}
