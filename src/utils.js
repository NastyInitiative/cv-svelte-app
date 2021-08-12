import * as animateScroll from 'svelte-scrollto';

export function coolScroll(elem) {
    animateScroll.scrollTo({element: elem, duration: 1400, easing: quadInOut })
}

 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}


export default getRandomInt ;