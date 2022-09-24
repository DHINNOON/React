import React from "react";

const Hello = () => {
    return React.createElement(
        "div", { id: "Hello", className: "Ds" },
        React.createElement("h1", null, "Hi dhinoo")
    );
};

export default Hello;