(() => {

    function isClass(element) {
        return typeof element === "function" &&
            /^class\s/.test(Function.prototype.toString.call(element))
    }

    function anElement(element, children) {
        if (isClass(element)) {
            const component = new element();
            return component.render();
        }
        if (typeof element === "function") return element();
        const anElement = document.createElement(element);
        children.forEach(child => {
            if (typeof child === "object") anElement.appendChild(child);
            else anElement.innerHTML += child;
        });
        return anElement;
    }

    function createElement(element, props, ...children) {
        return anElement(element, children);
    }

    window.React = {
        createElement,
    }

    window.ReactDOM = {
        render: (element, domElement) => { domElement.appendChild(element) }
    }
})()