var block1 = document.querySelector('.block-1');
var block2 = document.querySelector('.block-2');
var radioLabel = document.querySelector('.radioInp');
var radio2Label = document.querySelector('.radio2Inp');
var radioInp = document.querySelector('#radioInp');
var radio2Inp = document.querySelector('#radio2Inp');

    radioLabel.onclick = function(){
        if(radioInp.checked == false){
            block1.style.display = 'block';
            block2.style.display = 'none';
            radio2Label.style.color = '#EDEAEA';
            radioLabel.style.color = '#3D3C3C';
            radio2Label.style.backgroundColor = '#3D3C3C';
            radioLabel.style.backgroundColor = '#E9E4E4';
        }
    }
    radio2Label.onclick = function(){
        if(radio2Inp.checked == false){
            block2.style.display = 'block';
            block1.style.display = 'none';
            radioLabel.style.color = '#EDEAEA';
            radio2Label.style.color = '#3D3C3C';
            radioLabel.style.backgroundColor = '#3D3C3C';
            radio2Label.style.backgroundColor = '#E9E4E4';
        }
    }


