(() => {

    function handleClass(element, props) {
        const component = new element(props);
        return component.render();
    }

    function handleHTMLElement(element, props, children) {
        const anElement = document.createElement(element);
        children.forEach(child => {
            if (typeof child === "object")
                anElement.appendChild(child);
            else
                anElement.innerHTML += child;
        });
        Object.keys(props || {}).forEach(propName => {
            if (isAnEventAttribute(propName)) {
                anElement.addEventListener(
                    propName.substring(2).toLowerCase(),
                    props[propName]
                );
            } else {
                anElement.setAttribut(propName, props[propName]);
            }
        })
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