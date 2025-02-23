const root = ReactDOM.createRoot(document.getElementById("root"));
const element = React.createElement("div", { id: "header" }, [
  React.createElement("h1", {}, "This is h1 tag"),
  React.createElement("h2", {}, "This is h2 tag"),
]);
console.log("element : ", element);
root.render(element);
