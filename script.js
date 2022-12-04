const body=document.getElementById('area');
const color1=document.getElementById('color1');
const color2=document.getElementById('color2');
const color3=document.getElementById('color3');
const color4=document.getElementById('color4');
color1.addEventListener('click',function(){
    body.style.backgroundColor='rgb(128,128,128)';
})
color2.addEventListener('click',function(){
    body.style.backgroundColor='white';
})
color3.addEventListener('click',function(){
    body.style.backgroundColor='blue';
})
color4.addEventListener('click',function(){
    body.style.backgroundColor='yellow';
})