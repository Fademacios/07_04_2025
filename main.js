const mainTitle = document.querySelector('h1')
const changeColorInp = document.querySelector('#changeColorInp')
const btn = document.querySelector('button')

function changeColor(kolor){
    mainTitle.style.color=kolor
}

btn.addEventListener('click', function(){
    changeColor(changeColorInp.value)
    this.style.backgroundColor = '#ff0'
    document.getElementedByID("tytul").textContent = "Nowy tytuł"
})
