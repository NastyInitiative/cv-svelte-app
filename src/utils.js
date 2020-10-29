 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

export function toggleBurgerMenu() {
    document.addEventListener('DOMContentLoaded', () => {
	   
		const navBarBurger = document.querySelector(".navbar-burger");

		navBarBurger.addEventListener('click', () => {
			const target = navBarBurger.dataset.target;
			const $target = document.getElementById(target);
			navBarBurger.classList.toggle('is-active');
        	$target.classList.toggle('is-active');
		})
    })
}

export default getRandomInt 