/*
 *  <div id="parent">
 *      <div id="child1">
 *          <h1>I'm H1 from React</h1>
 *          <h2>I'm H2 from React</h2>
 *      </div>
 *  </div>
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const container = React.createElement(
  "div",
  {
    style: {
      border: "1px solid red",
    },
  },
  [heading, heading]
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm H1 from React"),
    React.createElement("h2", {}, "I'm H2 from React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm H1 from React"),
    React.createElement("h2", {}, "I'm H2 from React"),
  ]),
]);

root.render(parent);
