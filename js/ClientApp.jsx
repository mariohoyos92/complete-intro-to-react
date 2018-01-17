import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function MyTitle() {
  return ce("div", null, ce("h1", null, "My Second Component"));
};

const MyFirstComponent = function MyFirstComponent() {
  return ce(
    "div",
    null,
    ce(MyTitle),
    ce(MyTitle),
    ce(MyTitle),
    ce(MyTitle),
    ce(MyTitle)
  );
};

render(ce(MyFirstComponent), document.getElementById("app"));
