let affordableBlocksVs = document.querySelector('.affordableBlocksVs')
let affordableSpanValue1 = document.querySelector('.affordableSpanValue1')
let affordableSpanValue2 = document.querySelector('.affordableSpanValue2')
let affordable1SpanValue1 = document.querySelector('.affordable1SpanValue1')
let affordable1SpanValue2 = document.querySelector('.affordable1SpanValue2')
let affordable2SpanValue1 = document.querySelector('.affordable2SpanValue1')
let affordable2SpanValue2 = document.querySelector('.affordable2SpanValue2')

affordableBlocksVs.addEventListener('click', function(){
    affordableBlocksVs.classList.toggle('activeBlocksVs')
    affordableSpanValue1.classList.toggle('activeSpanVl1')
    affordableSpanValue2.classList.toggle('activeSpanVl2')
    affordable1SpanValue1.classList.toggle('activeSpanVl1')
    affordable1SpanValue2.classList.toggle('activeSpanVl2')
    affordable2SpanValue1.classList.toggle('activeSpanVl1')
    affordable2SpanValue2.classList.toggle('activeSpanVl2')
})

function afeal1(){
    let reveals = document.querySelectorAll('.affordableTitle1')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }

}
window.addEventListener('scroll', afeal1)
afeal1()

function afeal2(){
    let reveals = document.querySelectorAll('.affordableTitle2')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }

}
window.addEventListener('scroll', afeal2)
afeal2()

function afeal3(){
    let reveals = document.querySelectorAll('.affordableBlock4')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }

}
window.addEventListener('scroll', afeal3)
afeal3()

function afeal4(){
    let reveals = document.querySelectorAll('.affordableBlock6')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }

}
window.addEventListener('scroll', afeal4)
afeal4()

function afeal5(){
    let reveals = document.querySelectorAll('.affordableBlock7')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }

}
window.addEventListener('scroll', afeal5)
afeal5()

function afeal6(){
    let reveals = document.querySelectorAll('.affordableBlock8')
    for(let i = 0; i < reveals.length;i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active');
        }
    }

}
window.addEventListener('scroll', afeal6)
afeal6()