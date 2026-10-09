const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Sample ReactJS h1 element",
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading, root);
