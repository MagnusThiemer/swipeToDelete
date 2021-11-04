window.addEventListener('DOMContentLoaded', () => {
    const url = 'http://jsonplaceholder.typicode.com/users'
    axios.get(url).then(response => {
        /* console.log(response.data[1]) */
    })
})