const Pet = (props) => {
    return React.createElement("div", {},
        React.createElement("h2", null, props.name),
        React.createElement("h3", null, props.animal),
        React.createElement("h3", null, props.breed)
    );
}
const App = () => {
    return React.createElement("div",
    null, 
    React.createElement("h1", null, "Adopt Me!")
    ,
    React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Havanese"}),
    React.createElement(Pet, {name: "Pepper", animal: "Bird", breed: "Cockatiel"}),
    React.createElement(Pet, {name: "Doink", animal: "Cat", breed: "Mixed"}),
    React.createElement(Pet, {name: "Sparky", animal: "Dog", breed: "Mixed"})
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));