const mainTitle = document.querySelector('h1')
const changeColorInp = document.querySelector('#changeColorInp')
const changeTextInp = document.querySelector('#changeColorInp')
const btn = document.querySelector('button')

function changeColor(kolor){
    mainTitle.style.color=kolor
}

btn.addEventListener('click', function(){
    mainTitle.textContent = changeTextInp.value
    changeColor(changeColorInp.value)
    this.style.backgroundColor = '#ff0'
})

