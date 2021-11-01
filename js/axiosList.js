window.addEventListener('DOMContentLoaded', () => {
    const url = 'https://icanhazdadjoke.com/';

    const fetch10Jokes = () => {
        let container = document.querySelector('#container');
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
                let jokeP = document.createElement('p');
                jokeP.classList.add('container__p')
                jokeP.textContent = response.data.joke;
                jokeLi.appendChild(jokeP);
                let deleteButton = document.createElement('button');
                let saveButton = document.createElement('button');
                deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
                saveButton.innerHTML = '<i class="fas fa-bookmark"></i>';
                jokeLi.appendChild(saveButton);
                jokeLi.appendChild(deleteButton);
/*                 deleteButton(jokeLi, i);
                saveButton(jokeLi, i); */
                container.appendChild(jokeLi);
            })
        }
    };
    const paragraphElement = document.querySelector('#containerPElement');
    const newJokeButtonElement = document.querySelector('#containerButtonElement');

    newJokeButtonElement.addEventListener('click', fetch10Jokes)
    fetch10Jokes();



    /* SWIPE FUNCTION */
    
})