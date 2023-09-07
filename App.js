const heading1 = React.createElement("h1", {id:"heading1", key:"1"}, "I am h1 tag.");
const heading2 = React.createElement("h1", {id:"heading2", key:"2"}, "No I am the h1 tag.");
const child = React.createElement("div", {id:"child"},[heading1, heading2] );
const parent = React.createElement("div", {id:"parent"}, child );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);