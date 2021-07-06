export let createDomNodeMixin = {

    createDomNode(node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node;
    },

    processing(str) {
        if (str.includes('+')) {
            return +str.split('+')[0] + +str.split('+')[1];
        }
        if (str.includes('-')) {
            return +str.split('-')[0] - +str.split('-')[1];
        }
        if (str.includes('×')) {
            return +str.split('×')[0] * +str.split('×')[1];
        }
        if (str.includes('÷')) {
            return +str.split('÷')[0] / +str.split('÷')[1];
        }
    },

}
