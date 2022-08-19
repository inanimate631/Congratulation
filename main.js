const congratulation = document.querySelector('.congratulation')

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 32){
        congratulation.style.transform = `translateX(-110%)`
    }
})