window.addEventListener('DOMContentLoaded', () => {
    console.log('swipe');
    const containerElement = document.querySelector('#container');

    containerElement.addEventListener('touchstart', (event) => {
        let touchStartPoint;
        let touchEndPoint;
        let targetJokeId = event.target.id;
        if(!targetJokeId){
            targetJokeId = event.target.parentNode.id;
        }
        let targetJoke = document.querySelector(`#${targetJokeId}`);
        if(event.target.tagName === 'P' || event.target.tagName === 'LI'){
            touchStartPoint = event.touches[0].clientX;
            event.target.addEventListener('touchmove', (event) => {
                touchEndPoint = event.touches[0].clientX
            });
            event.target.addEventListener('touchend', () => {
                if(touchStartPoint - touchEndPoint > 120){
                    document.querySelector(`#${targetJokeId}DeleteButton`).style.display = 'block';
                    /* deleteButton(targetJoke); */
                } else if(touchStartPoint - touchEndPoint < -120){
/*                     saveButton(targetJoke); */
                    document.querySelector(`#${targetJokeId}SaveButton`).style.display = 'block';
                }
            })
        }
    })
})