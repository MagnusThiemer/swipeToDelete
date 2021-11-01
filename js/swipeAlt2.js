let coordinateStart;
let coordinateMove;
let container = document.querySelector('#container');
let targetItem;

container.addEventListener('touchstart', (event) => {
    if(event.target.tagName == `P`){
        console.log(event.target);
        coordinateStart = event.touches[0].clientX;
        targetItem = event.target;
    }
})

container.addEventListener('touchmove', (event) => {
    coordinateMove = event.touches[0].clientX;
    if(coordinateMove < coordinateStart){
        targetItem.style.transform = `translateX(${coordinateMove - coordinateStart}px)`; 
        console.log(targetItem.style.transform);
    }
})