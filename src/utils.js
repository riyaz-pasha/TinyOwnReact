function isClass(element) {
    return isFunction(element) &&
        /^class\s/.test(Function.prototype.toString.call(element))
}

function isFunction(element) {
    return typeof element === "function";
}

function shouldAddEventListener(propName) {
    return /^on.*$/.test(propName)
}
