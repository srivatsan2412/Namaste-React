import React from "react";
import  ReactDOM  from "react-dom/client";

// React.createElement => Object => HTML(DOM)
const heading = React.createElement(
    "h1",
    {
        id: "title",
        key: "h1",
    },
    "Heading 1"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title1",
        key: "h2",
    },
    "Heading 2"
);

//JSX (Its not a string)
// How does JSX execute
// JSX (using Babel) => React.createElement => Object => HTML(DOM)

// React Element
const headingJSX1 = <h1 id="title" key="h1">Namaste React</h1>;

// React Element
const headingJSX2 = (
    <h2 id="title1" key="h2">
        Namaste React Title2
    </h2>
);

// functional component
const HeadingJSX3 = () => (
    <h2 id="title1" key="h2">
        Namaste React functional component
    </h2>
);

// functional component
const HeadingJSX4 = () => (
    <h2 id="title1" key="h2">
        Namaste React functional component 2
    </h2>
);

// React component with different ways of adding a React element, component etc
const HeaderComponent = () => {
    return (
    <div>
        {headingJSX1}
        <HeadingJSX3 />  
        {HeadingJSX4()}
        <h1>Namaste React functional component</h1>
        <h2>This is h2 tag</h2>
    </div>)
}


const container = React.createElement(
    "div",
    {
        id: "container",
        key: "c1",
    },
    [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);