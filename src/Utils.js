export const createDomNodeMixin = {
  createDomNode(node, element, ...classes) {
    let nodeInside = node;
    nodeInside = document.createElement(element);
    if (classes.length) {
      nodeInside.classList.add(...classes);
    }
    return nodeInside;
  },

  createStringInsideDrop(x, y, z) {
    let result;
    switch (y) {
      case '-':
        result = x > z ? `${x}${y}${z}` : `${z}${y}${x}`;
        break;
      case '÷':
        result = x > z && z !== 0 ? `${x * z}${y}${z}` : `${(x + 1) * z}${y}${x + 1}`;
        break;
      default:
        result = `${x}${y}${z}`;
        break;
    }
    return result;
  },

  createSolutionDataResult(x, y, z) {
    let result;
    switch (y) {
      case '-':
        result = x > z ? x - z : z - x;
        break;
      case '÷':
        result = x > z ? x : ((x + 1) * z) / (x + 1);
        break;
      case '×':
        result = x * z;
        break;
      default:
        result = x + z;
        break;
    }
    return result;
  },
};
