const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListner('click', () => container.classList.add('show-nav'))
close.addEventListner('click', () => container.classList.remove('show-nav'))