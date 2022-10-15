var numCounter = document.querySelector('.counter');
var btn = document.querySelector('.btn');

let num = 0;

btn.addEventListener('click', () => {
    numCounter.innerHTML = num++;
})

document.querySelector('.decrease_btn').addEventListener('click', () => {
    numCounter.innerHTML = num--;
})