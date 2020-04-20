"use strict";

const toggle = document.querySelector('#toggle');
const toggle2 = document.querySelector('#toggle2');
const body = document.querySelector('div');


toggle.addEventListener('click', () =>{
    body.classList.toggle('dark');
    body.classList.toggle('light');

});

toggle2.addEventListener('click', () =>{
    body.classList.toggle('dark');
    body.classList.toggle('light');

});

