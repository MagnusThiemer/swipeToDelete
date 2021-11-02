window.addEventListener('DOMContentLoaded', () => {
    const url = 'https://icanhazdadjoke.com/';
    let container = document.querySelector('#container');

    const fetch10Jokes = () => {
        let jokeArray = [];
        container.innerHTML = '';
        for(let i = 0; i < 10; i++){
            axios.get(url, {
                headers:{
                    Accept: "application/json"
                }
            }).then(response => {
                jokeArray.push(response.data.joke);
                let jokeLi = document.createElement('li');
                jokeLi.classList.add('container__li');
                jokeLi.id = `joke${i}`;
                let jokeId = `joke${i}`;
                let jokeP = document.createElement('p');
                jokeP.classList.add('container__p')
                jokeP.textContent = response.data.joke;
                let deleteButton = document.createElement('div');
                let saveButton = document.createElement('div');
                deleteButton.classList.add('container__delete-button');
                saveButton.classList.add('container__save-button');
                deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
                saveButton.innerHTML = '<i class="fas fa-bookmark"></i>';
                deleteButton.addEventListener('click', () => deleteJoke(jokeId));
                jokeLi.appendChild(saveButton);
                jokeLi.appendChild(deleteButton);
                jokeLi.appendChild(jokeP);
                container.appendChild(jokeLi);
            })
        }
    };
    const paragraphElement = document.querySelector('#containerPElement');
    const newJokeButtonElement = document.querySelector('#containerButtonElement');

    newJokeButtonElement.addEventListener('click', fetch10Jokes)
    fetch10Jokes();

    function deleteJoke(elementId){
        let removeJoke = document.querySelector(`#${elementId}`);
        removeJoke.classList.add('animate__animated', 'animate__fadeOutLeft');
        setTimeout(() => {
            container.removeChild(removeJoke);
        }, 700)
    }
})