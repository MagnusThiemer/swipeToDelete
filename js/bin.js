window.addEventListener('DOMContentLoaded', () => {
    let binArray = JSON.parse(localStorage.getItem('bin'));
    let savedArray = JSON.parse(localStorage.getItem('saved'));
    const container = document.querySelector('#container');
    console.log(binArray, savedArray)
    const emptyBinButtonElement = document.querySelector('#emptyBinButton');

    const generateBinList = (array) => {
        array.forEach(element => {
            let jokeLi = document.createElement('li');
            jokeLi.classList.add('container__li');
            jokeLi.id = element.id;
            let jokeP = document.createElement('p');
            jokeP.classList.add('container__p')
            jokeP.textContent = element.joke;
            jokeLi.appendChild(jokeP);
            container.appendChild(jokeLi);
        });
    }
    emptyBinButtonElement.addEventListener('click', () => {
        binArray = [];
        localStorage.setItem('bin', binArray);
        container.innerHTML = '';
        console.log('clicked')
    })
    generateBinList(binArray);
})