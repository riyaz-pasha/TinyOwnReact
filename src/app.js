const helloWorld = React.createElement("h1", null, "Hello World!.")
const Hello = function () {
    return React.createElement("p", null, "Functional Component");
}
const HelloFunctionalComponent = React.createElement(Hello, null, null);
const parentWithMultipleChildren = React.createElement(
    "div",
    null,
    helloWorld,
    HelloFunctionalComponent,
    "I'm a parent component"
)
class ClassComponentExample {
    render() {
        return React.createElement("h3", null, "Rendering Class components as well");
    }
}
const classComponent = React.createElement(ClassComponentExample, null, null);
const FunctionalComponentWithProps = ({ name }) => {
    return React.createElement("p", null, `Functional component with prop - ${name}`)
}
const functionalComponentWithProp = React.createElement(FunctionalComponentWithProps, { name: "Riyaz" }, null);
ReactDOM.render(functionalComponentWithProp, document.getElementById("root"))