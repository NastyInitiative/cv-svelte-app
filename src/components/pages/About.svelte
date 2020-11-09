<script>
	import { fly } from 'svelte/transition';
</script>

<div class="tile is-ancestor about">
	<div class="tile is-parent " transition:fly="{{x: 200, duration: 900, delay:600}}">
		<div class="tile is-child box notification is-primary">
			<p class="title">About the author</p>
			<blockquote>
				Mi chiamo Alexandru e sono un Junior Front-End Developer. Ho creato questo sito come sfida, per espandere le 
				mie conoscenze e skills nel mondo dello Web Development e un giorno spero di diventare un bravo Full-Stack 
				Web Developer.
				Per ora il mio obiettivo è padroneggiare quanto piu possibile le tecnologie Front-End per poi iniziare a creare
				delle basi solide nello sviluppo Back-End (devo ancora decidere con quale linguaggio iniziare, forse sempre in JavaScript 
				o PHP).
			</blockquote>
		</div>
	</div>
	<div class="tile is-parent " transition:fly="{{x: 200, duration: 900, delay:600}}">
		<div class="tile is-child box notification is-danger">
			<p class="title">Other info</p>
			<blockquote>
				Sono appasionato d'informatica, in modo speciale del gaming e mi piace informarmi del mondo tech in generale.
				Quando voglio staccarmi dal monitor, trovo rifugio nella musica o nella lettura, cosi posso staccare completamente 
				il cervello e ripartire con idee fresche.
			</blockquote>
		</div>
	</div>
</div>
