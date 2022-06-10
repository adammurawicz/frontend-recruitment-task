const infoBtn = document.querySelector('.info__btn')
const shadow = document.querySelector('.shadow')
const modal = document.querySelector('.modal')
const modalBtnClose = document.querySelector('.modal__btnClose')
const modalTextSpan = document.querySelector('.modal__text__span')
const modalBtnReset = document.querySelector('.modal__btnReset')
let numOfClick = 0

const mainAction = () => {
    showModal()
    countClicks()

    if(numOfClick > 5) {
        showResetBtn()
    }
}

const showModal = () => {
    shadow.style.display = 'block'
    modal.style.top = '50%'
}

const countClicks = () => {
    numOfClick++
    modalTextSpan.textContent = numOfClick
    localStorage.setItem('clicks', numOfClick)  
}

const showResetBtn = () => {
    modalBtnReset.style.visibility = 'visible'
}

const closeResetBtn = () => {
    modalBtnReset.style.visibility = 'hidden'
}

const resetClicks = () => {
    numOfClick = 0
    modalTextSpan.textContent = numOfClick
    localStorage.setItem('clicks', numOfClick) 
    closeResetBtn()
}

const closeModal = () => {
    shadow.style.display = 'none'
    modal.style.top = '-50%'
}



infoBtn.addEventListener('click', mainAction)
shadow.addEventListener('click', closeModal)
modalBtnClose.addEventListener('click', closeModal)
modalBtnReset.addEventListener('click', resetClicks)