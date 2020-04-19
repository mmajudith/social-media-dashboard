const toggle = document.querySelector('#toggle');
const body = document.querySelector('div');

toggle.addEventListener('click', () =>{
    body.classList.toggle('dark');
    body.classList.toggle('light');

});

