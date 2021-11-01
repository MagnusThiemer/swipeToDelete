window.addEventListener('DOMContentLoaded', () => {
    const url = 'https://icanhazdadjoke.com/';
    const fetchJoke = () => {
        axios.get(url, {
                headers:{
                    Accept: "application/json"
                }
            }).then(response => {
            paragraphElement.textContent = response.data.joke;
        })
    };
    const paragraphElement = document.querySelector('#containerPElement');
    const newJokeButtonElement = document.querySelector('#containerButtonElement');
    fetchJoke();
    newJokeButtonElement.addEventListener('click', fetchJoke)
})