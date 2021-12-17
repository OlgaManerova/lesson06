'use strict'

const block = document.querySelector('.block');

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createEl = function() {
    if (this.selector.charAt(0) == '.') {
        const div = document.createElement('div');
        div.classList.add('class');
        div.innerHTML = 'Создали div';
        block.append(div);
    } else if (this.selector.charAt(0) == '#') {
        const p = document.createElement('p');
        p.classList.add('id');
        p.innerHTML = 'Создали p';
        block.append(p);
    }
}

const DomElement1 = new DomElement('.block');
const DomElement2 = new DomElement('#best');

DomElement1.createEl();
DomElement2.createEl();