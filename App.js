import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", {id:"heading1"}, "I am h1 tag.");
const child = React.createElement("div", {id:"child"}, heading );
const parent = React.createElement("div", {id:"parent"}, child );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// // Plain JSX
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

// const Title = () => {
//     return (<h1>Namaste React Title</h1>);
// }

// // const HeadingComponent = () => {
// //     return
// //     (<div id="container">
// //         <Title />
// //         <h1>Namaste React Functional Component   </h1>
// //     </div>);
// // }

// const number = 1000;
// const HeadingComponent = () => {
//     return (
//         <div id="container">
//             {/* <Title /> */}
//             {Title()}
//             <h1 id="heading">Namaste React using JSX</h1>
//             <h2>The number is {number}</h2>
//         </div>);
// }


// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<HeadingComponent />);