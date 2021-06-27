import { createDomNodeMixin } from "./Utils";

export class Modal {
    constructor(score) {
        this.overlay = null;
        this.modal = null;
        this.btn = null;
        this.result = null;
        this.score = score;
    }

    create() {
        this.modal = this.createDomNode(this.modal, 'div', 'modal');
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');
        this.overlay.style.zIndex = 10;
        this.result = this.createDomNode(this.result, 'div');
        this.btn = this.createDomNode(this.btn, 'button', 'btn__modal');
        this.btn.innerHTML = 'OK';
        this.result.innerHTML = `Your Score: ${this.score}`;
        this.modal.append(this.result);
        this.modal.append(this.btn);
        this.overlay.append(this.modal);     
        document.body.append(this.overlay);

        this.btn.addEventListener('click', () => {           
            this.overlay.remove();
        });

    }

   
}

Object.assign(Modal.prototype, createDomNodeMixin);