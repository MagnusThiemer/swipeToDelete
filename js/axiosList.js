window.addEventListener('DOMContentLoaded', () => {
    const url = 'https://icanhazdadjoke.com/';
    let container = document.querySelector('#container');
    const binCounterElement = document.querySelector('#binCounter');
    const savedCounterElement = document.querySelector('#savedCounter');
/*     localStorage.setItem('bin', [23, 35, 55, 'hello']);
    console.log(localStorage.bin);
    const bin = localStorage.bin
    console.log(localStorage.bin); */

    /* ---------- LOCAL STORAGE EXAMPLE ---------- */
    let binArray = [];
    let savedArray = [];

    /* -----------UPDATE LOCAL STORAGE ARRAYS ----------- */
    if(localStorage.getItem('bin')){
        binArray = JSON.parse(localStorage.getItem('bin'))
        console.log(binArray)
        binCounterElement.textContent = binArray.length;
        binCounterElement.style.display = 'flex'
    }

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
                jokeLi.id = `_${response.data.id}`;
                let jokeP = document.createElement('p');
                jokeP.classList.add('container__p')
                jokeP.textContent = response.data.joke;
                let deleteButton = document.createElement('div');
                let saveButton = document.createElement('div');
                deleteButton.classList.add('container__delete-button');
                saveButton.classList.add('container__save-button');
                deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
                saveButton.innerHTML = '<i class="fas fa-bookmark"></i>';
                jokeLi.appendChild(saveButton);
                jokeLi.appendChild(deleteButton);
                jokeLi.appendChild(jokeP);
                container.appendChild(jokeLi);
            })
        }
    };
    const newJokeButtonElement = document.querySelector('#containerButtonElement');

    newJokeButtonElement.addEventListener('click', fetch10Jokes)
    fetch10Jokes();

    container.addEventListener('click', (event) => {
        if(event.target.tagName === 'I' && event.target.parentNode.classList.contains('container__delete-button')){
            deleteJoke(event.target.parentNode.parentNode.id);
        } else if (event.target.classList.contains('container__delete-button')){
            deleteJoke(event.target.parentNode.id);
        } else if (event.target.tagName === 'I' && event.target.parentNode.classList.contains('container__save-button')){
            saveJoke(event.target.parentNode.parentNode.id);
        } else if (event.target.classList.contains('container__save-button')){
            saveJoke(event.target.parentNode.id);
        }
    })

    function deleteJoke(elementId){
        let joke = document.querySelector(`#${elementId}`).querySelector('.container__p').textContent;
        binArray.push({
            id: elementId, 
            joke: joke
        });
        localStorage.setItem('bin', JSON.stringify(binArray));
        console.log(JSON.parse(localStorage.getItem('bin')));
        const binCounterElement = document.querySelector('#binCounter');
        binCounterElement.style.display = 'flex';
        binCounterElement.classList.add('animate__animated', 'animate__heartBeat')
        binCounterElement.textContent = binArray.length;
        let removeJoke = document.querySelector(`#${elementId}`);
        removeJoke.classList.add('animate__animated', 'animate__fadeOutLeft', 'height__0', 'animate__fast');
        setTimeout(() => {
            removeJoke.style.minHeight = '0';
        }, 400)
        setTimeout(() => {
            container.removeChild(removeJoke);
            binCounterElement.classList.remove('animate__heartBeat')
        }, 800)
    }

    function saveJoke(elementId){
        let joke = document.querySelector(`#${elementId}`).querySelector('.container__p').textContent;
        savedArray.push({
            id: elementId,
            joke: joke
        });
        localStorage.setItem('saved', JSON.stringify(savedArray));
        console.log(JSON.parse(localStorage.getItem('saved')));

        
        savedCounterElement.style.display = 'flex';
        savedCounterElement.classList.add('animate__animated', 'animate__heartBeat')
        savedCounterElement.textContent = savedArray.length;

        let saveJoke = document.querySelector(`#${elementId}`);
        saveJoke.classList.add('animate__animated', 'animate__zoomOutDown', 'height__0', 'animate__fast');
        setTimeout(() => {
            saveJoke.style.minHeight = '0';
        }, 400)
        setTimeout(() => {
            container.removeChild(saveJoke);
            savedCounterElement.classList.remove('animate__heartBeat')
        }, 800)

    }
})