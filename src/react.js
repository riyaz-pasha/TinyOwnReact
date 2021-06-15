(() => {

    function handleClass(element, props) {
        const component = new element(props);
        return component.render();
    }

    function extractEvent(propName) {
        return propName.substring(2).toLowerCase();
    }

    function appendChild(child, anElement) {
        if (typeof child === "object")
            anElement.appendChild(child);
        else
            anElement.innerHTML += child;
    }

    function appendChildren(children, anElement) {
        return children.forEach(child => appendChild(child, anElement));
    }

    function appendProp(propName, propValue, anElement) {
        if (shouldAddEventListener(propName))
            return anElement.addEventListener(extractEvent(propName), propValue);
        return anElement.setAttribute(propName, propValue);
    }

    function appendProps(props, anElement) {
        return Object.entries(props || {})
            .forEach(([propName, propValue]) => appendProp(propName, propValue, anElement))
    }

    function handleHTMLElement(element, props, children) {
        const anElement = document.createElement(element);
        appendChildren(children, anElement);
        appendProps(props, anElement)
        return anElement;
    }

    function anElement(element, props, children) {
        if (isClass(element)) return handleClass(element, props);
        if (isFunction(element)) return element(props);
        return handleHTMLElement(element, props, children);
    }

    function createElement(element, props, ...children) {
        return anElement(element, props, children);
    }

    class Component {
        constructor(props) {
            this.props = props;
        }
    }

    window.React = {
        createElement,
        Component,
    }

    window.ReactDOM = {
        render: (element, domElement) => { domElement.appendChild(element) }
    }
})()