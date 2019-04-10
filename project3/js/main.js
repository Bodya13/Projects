window.onload = function(){
    let box1 = document.querySelector('.checkbox-1');
    let tab1 = document.querySelector('.tab-1');
    let box2 = document.querySelector('.checkbox-2');
    let tab2 = document.querySelector('.tab-2');
    let box3 = document.querySelector('.checkbox-3');
    let tab3 = document.querySelector('.tab-3');

    box1.addEventListener('click', function(){
        tab1.classList.toggle('tab-1');
        tab1.classList.toggle('tab-1');
    });
    box2.addEventListener('click', function(){
        tab2.classList.toggle('tab-2');
    });
    box3.addEventListener('click', function(){
        tab3.classList.toggle('tab-3');
    });
}
