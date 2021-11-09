window.addEventListener('DOMContentLoaded', () => {
    let binArray = JSON.parse(localStorage.getItem('bin'));
    let savedArray = JSON.parse(localStorage.getItem('saved'));
    const container = document.querySelector('#container');
    const emptyBinButtonElement = document.querySelector('#emptyBinButton');

    const generateBinList = (array) => {
        array.forEach(element => {
            let jokeLi = document.createElement('li');
            jokeLi.classList.add('container__li');
            jokeLi.id = element.id;
            let jokeP = document.createElement('p');
            jokeP.classList.add('container__p')
            jokeP.textContent = element.joke;
            let deleteButton = document.createElement('div');
/*             let saveButton = document.createElement('div'); */
            deleteButton.classList.add('container__delete-button');
/*             saveButton.classList.add('container__save-button'); */
            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
/*             saveButton.innerHTML = '<i class="fas fa-bookmark"></i>'; */
/*             jokeLi.appendChild(saveButton); */
            jokeLi.appendChild(deleteButton);
            jokeLi.appendChild(jokeP);
            container.appendChild(jokeLi);
        });
    }
    emptyBinButtonElement.addEventListener('click', () => {
        binArray = [];
        localStorage.removeItem('bin');
        container.innerHTML = '';
    })
    generateBinList(binArray);
})