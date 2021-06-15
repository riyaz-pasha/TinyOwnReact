(() => {

    function handleClass(element) {
        const component = new element();
        return component.render();
    }

    function handleHTMLElement(element, children) {
        const anElement = document.createElement(element);
        children.forEach(child => {
            if (typeof child === "object")
                anElement.appendChild(child);
            else
                anElement.innerHTML += child;
        });
        return anElement;
    }

    function anElement(element, props, children) {
        if (isClass(element)) return handleClass(element);
        if (isFunction(element)) return element(props);
        return handleHTMLElement(element, children);
    }

    function createElement(element, props, ...children) {
        return anElement(element, props, children);
    }

    window.React = {
        createElement,
    }

    window.ReactDOM = {
        render: (element, domElement) => { domElement.appendChild(element) }
    }
})()