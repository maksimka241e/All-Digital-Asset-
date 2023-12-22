let helpBlockMin1 = document.querySelector('.helpBlockMin1');
let helpBlock1 = document.querySelector('.helpBlock8');
let helpSpan1 = document.querySelector('.helpSpan1')

let toggleMenu = function toggleMenu() {
    helpBlock1.classList.toggle('active')
    helpSpan1.classList.toggle('minus')
    let span1Minus = helpSpan1.classList.contains('minus')
    let minus = document.querySelector('.minus')
    if(span1Minus){
      minus.innerHTML = '-'
    }else{
      helpSpan1.innerHTML = '+'
    }
};

helpBlockMin1.addEventListener('click', function(e) {
  e.stopPropagation();
  
  toggleMenu();
});

document.addEventListener('click', function (e) {
  let target = e.target;
  let its_menu = target == helpBlock1 || helpBlock1.contains(target);
  let its_hamburger = target == helpBlockMin1;
  let menu_is_active = helpBlock1.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
});

// block2
let helpBlockMin2 = document.querySelector('.helpBlockMin2');
let helpBlock2 = document.querySelector('.helpBlock10');
let helpSpan2 = document.querySelector('.helpSpan2')

let toggleMenu1 = function toggleMenu1() {
    helpBlock2.classList.toggle('active');
    helpSpan2.classList.toggle('minus')
    let span2Minus = helpSpan2.classList.contains('minus')
    let minus = document.querySelector('.minus')
    if(span2Minus){
      minus.innerHTML = '-'
    }else{
      helpSpan2.innerHTML = '+'
    }
};

helpBlockMin2.addEventListener('click', function(e) {
  e.stopPropagation();

  toggleMenu1();
});

document.addEventListener('click', function (e) {
  let target = e.target;
  let its_menu = target == helpBlock2 || helpBlock2.contains(target);
  let its_hamburger = target == helpBlockMin2;
  let menu_is_active = helpBlock2.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu1();
  }
});

// block3

let helpBlockMin3 = document.querySelector('.helpBlockMin3');
let helpBlock3 = document.querySelector('.helpBlock12');
let helpSpan3 = document.querySelector('.helpSpan3')

let toggleMenu2 = function toggleMenu2() {
    helpBlock3.classList.toggle('active');
    helpSpan3.classList.toggle('minus')
    let span3Minus = helpSpan3.classList.contains('minus')
    let minus = document.querySelector('.minus')
    if(span3Minus){
      minus.innerHTML = '-'
    }else{
      helpSpan3.innerHTML = '+'
    }
};

helpBlockMin3.addEventListener('click', function(e) {
  e.stopPropagation();

  toggleMenu2();
});

document.addEventListener('click', function (e) {
  let target = e.target;
  let its_menu = target == helpBlock3 || helpBlock3.contains(target);
  let its_hamburger = target == helpBlockMin3;
  let menu_is_active = helpBlock3.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu2();
  }
});

// block4

let helpBlockMin4 = document.querySelector('.helpBlockMin4');
let helpBlock4 = document.querySelector('.helpBlock14');
let helpSpan4 = document.querySelector('.helpSpan4')

let toggleMenu3 = function toggleMenu3() {
    helpBlock4.classList.toggle('active');
    helpSpan4.classList.toggle('minus')
    let span4Minus = helpSpan4.classList.contains('minus')
    let minus = document.querySelector('.minus')
    if(span4Minus){
      minus.innerHTML = '-'
    }else{
      helpSpan4.innerHTML = '+'
    }
};

helpBlockMin4.addEventListener('click', function(e) {
  e.stopPropagation();

  toggleMenu3();
});

document.addEventListener('click', function (e) {
  let target = e.target;
  let its_menu = target == helpBlock4 || helpBlock4.contains(target);
  let its_hamburger = target == helpBlockMin4;
  let menu_is_active = helpBlock4.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu3();
  }
});

// block5

let helpBlockMin5 = document.querySelector('.helpBlockMin5');
let helpBlock5 = document.querySelector('.helpBlock16');
let helpSpan5 = document.querySelector('.helpSpan5')

let toggleMenu4 = function toggleMenu4() {
    helpBlock5.classList.toggle('active');
    helpSpan5.classList.toggle('minus')
    let span5Minus = helpSpan5.classList.contains('minus')
    let minus = document.querySelector('.minus')
    if(span5Minus){
      minus.innerHTML = '-'
    }else{
      helpSpan5.innerHTML = '+'
    }
};

helpBlockMin5.addEventListener('click', function(e) {
  e.stopPropagation();

  toggleMenu4();
});

document.addEventListener('click', function (e) {
  let target = e.target;
  let its_menu = target == helpBlock5 || helpBlock5.contains(target);
  let its_hamburger = target == helpBlockMin5;
  let menu_is_active = helpBlock5.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu4();
  }
});

// block5

let helpBlockMin6 = document.querySelector('.helpBlockMin6');
let helpBlock6 = document.querySelector('.helpBlock18');
let helpSpan6 = document.querySelector('.helpSpan6')

let toggleMenu5 = function toggleMenu5() {
    helpBlock6.classList.toggle('active');
    helpSpan6.classList.toggle('minus')
    let span6Minus = helpSpan6.classList.contains('minus')
    let minus = document.querySelector('.minus')
    if(span6Minus){
      minus.innerHTML = '-'
    }else{
      helpSpan6.innerHTML = '+'
    }
};

helpBlockMin6.addEventListener('click', function(e) {
  e.stopPropagation();

  toggleMenu5();
});

document.addEventListener('click', function (e) {
  let target = e.target;
  let its_menu = target == helpBlock6 || helpBlock6.contains(target);
  let its_hamburger = target == helpBlockMin6;
  let menu_is_active = helpBlock6.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu5();
  }
});

function revel1(){
  let reveals = document.querySelectorAll('.processText')
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
window.addEventListener('scroll', revel1)
revel1()