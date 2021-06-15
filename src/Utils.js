export let createDomNodeMixin = {

    createDomNode (node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node;
    },

}
