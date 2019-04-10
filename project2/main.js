var btn = document.querySelector('.btn');
var list = document.querySelector('.drop-nav');

btn.onclick = function(){
    list.classList.toggle('drop-open');
}