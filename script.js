'use strict'

const button = document.querySelector('#btn');
const input = document.querySelector('#text');
const square = document.querySelector('#square');
const e_btn = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const rangeSpan = document.querySelector('#range-span');


button.addEventListener('click', function() {
    square.style.backgroundColor = input.value;
})

e_btn.style.display = 'none';

range.addEventListener('input', function() {
    rangeSpan.textContent = range.value;
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
})