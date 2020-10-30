 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

export function toggleBurgerMenu() {
    document.addEventListener('DOMContentLoaded', () => {
	   
		const navBarBurger = document.querySelector(".navbar-burger");
		const menuButton = document.querySelector(".show-menu");
		const menu = document.querySelector(".lg-screen-menu");

		navBarBurger.addEventListener('click', () => {
			const target = navBarBurger.dataset.target;
			const $target = document.getElementById(target);
			navBarBurger.classList.toggle('is-active');
        	$target.classList.toggle('is-active');
		});

		menuButton.addEventListener('click', () => {
			menu.classList.toggle("show-menu");
		})
    })
}

export default getRandomInt 