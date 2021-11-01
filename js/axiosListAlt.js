
window.addEventListener('DOMContentLoaded', () => {
    const url = 'https://icanhazdadjoke.com/';
    let jokesArray = [];
    
    const fillJokesArray = () => {
        for(let i = 0; i < 10; i++){
            axios.get(url, {
                headers:{
                    Accept: "application/json"
                }
            }).then(response => {
                jokesArray.push({id: response.data.id, joke: response.data.joke})
            })
        }
    };
    fillJokesArray();
    console.log(jokesArray);
})