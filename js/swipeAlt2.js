let coordinateStart;
let coordinateMove;
let container = document.querySelector('#container');
let targetItem;
let targetItemParent;

container.addEventListener('touchstart', (event) => {
    targetItem = event.target;
    if(event.target.tagName == `P`){
        coordinateStart = event.touches[0].clientX;
    }
});
container.addEventListener('touchmove', (event) => {
    if(targetItem.tagName == 'P'){
        targetItemParent = targetItem.parentNode;
        coordinateMove = event.touches[0].clientX;
        if(coordinateMove < coordinateStart && coordinateMove > coordinateStart - (targetItemParent.clientWidth * 0.4)){
            targetItem.style.transform = `translateX(${coordinateMove - coordinateStart}px)`; 
        }
    }
});
container.addEventListener('touchend', (event) => {
    if(targetItem.tagName == 'P')
    if(coordinateMove < coordinateStart - (targetItemParent.clientWidth * 0.2)){
        targetItem.style.transform = `translateX(-${targetItemParent.clientWidth * 0.4}px)`;
    } else {
        targetItem.style.transform = `translateX(0)`;
    }
})

