let adaptiveBlock = document.querySelector('.adaptiveBlock')
let menuBlock2 = document.querySelector('.menuBlock2')
let adaptiveSpan = document.querySelector('.adaptiveSpan')

adaptiveBlock.addEventListener('click', function(){
    menuBlock2.classList.toggle('active')
    adaptiveSpan.classList.toggle('plusAd')
    let SumAdaptive = adaptiveSpan.classList.contains('plusAd')
    let plusAdaptive = document.querySelector('.plusAd')
    if(SumAdaptive){
        plusAdaptive.innerHTML = "x"
    }else{
        adaptiveSpan.innerHTML = '='
    }
})