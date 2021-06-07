export class Raindrops {
    constructor() {
        this.raindrops = null;
        this.wrapper = null;
        this.section1 = null;
        this.section2 = null;
        this.space = null; 
        this.span = null;
        this.sea = null;
        this.start = 0;
        this.topSea = 0;
        this.res = 0;
    }



    initRaindrops() {
        this.raindrops = this.createDomNode(this.raindrops, 'div', 'raindrops');
        this.wrapper = this.createDomNode(this.wrapper, 'div', 'wrapper');
        this.section1 = this.createDomNode(this.section1, 'section', 'section1');
        this.section2 = this.createDomNode(this.section2, 'section', 'section2');
        this.raindrops.prepend(this.wrapper);   
        this.wrapper.prepend(this.section2);
        this.wrapper.prepend(this.section1);
        this.space = this.createDomNode(this.space, 'div', 'space');
        this.section1.prepend(this.space);
        this.sea = this.createDomNode(this.sea, 'div', 'sea');     
        this.section1.append(this.sea);
        document.body.prepend(this.raindrops);
    }


    // createDrop(expression) {
    //     let d = document.createElement('div');
    //     d.classList = 'drop';
    //     d.style.top = 1 + 'vh';
    //     d.style.left = Math.round(62 * Math.random()) + 'vw';
    //     Raindrops.elements.span.innerHTML = expression;
    //     d.append(Raindrops.elements.span);
    //     Raindrops.elements.section1.prepend(d);
    // }

    createDomNode(node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node;
    }

}