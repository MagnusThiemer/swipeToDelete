window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container');
    let binArray = JSON.parse(localStorage.getItem('bin'))

    container.addEventListener('click', (event) => {
        if(event.target.tagName === 'I' && event.target.parentNode.classList.contains('container__delete-button')){
            deleteFromBin(event.target.parentNode.parentNode.id);
        } else if (event.target.classList.contains('container__delete-button')){
            deleteFromBin(event.target.parentNode.id);
        }
    })

    const deleteFromBin = (id) => {
        binArray = binArray.filter(item => item.id !== id);
        let removeJoke = document.querySelector(`#${id}`);
        removeJoke.classList.add('animate__animated', 'animate__fadeOutLeft', 'height__0', 'animate__fast');
        setTimeout(() => {
            removeJoke.style.minHeight = '0';
        }, 400)
        setTimeout(() => {
            container.removeChild(removeJoke);
        }, 800)
        if(binArray.length > 0){
            localStorage.setItem('bin', JSON.stringify(binArray));
        } else {
            localStorage.removeItem('bin');
        }
    }
})