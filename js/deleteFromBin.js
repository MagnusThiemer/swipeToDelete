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
        let i = 0;
        console.log(binArray)
        binArray.forEach(element => {
            if(element.id === id){
                binArray.splice(i, 1);
                let removeJoke = document.querySelector(`#${id}`);
                removeJoke.classList.add('animate__animated', 'animate__fadeOutLeft', 'height__0', 'animate__fast');
                setTimeout(() => {
                    removeJoke.style.minHeight = '0';
                }, 400)
                setTimeout(() => {
                    container.removeChild(removeJoke);
                }, 800)
                localStorage.setItem('bin', JSON.stringify(binArray));
            };
            i++;
        })
    }
})