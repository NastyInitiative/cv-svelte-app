<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>
<div in:fly={{y: 200,duration: 1000, easing:quintOut}}>
	<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet" in:fly={{y: 30,duration: 800, delay: 200, easing:quintOut}}>About</p>
	<div class="tile is-ancestor about" in:fly={{y: 30,duration: 800, delay: 600, easing:quintOut}}>
		<div class="tile is-parent " >
			<div class="tile is-child box notification is-primary">
				<!-- <p class="title">About the author</p> -->
				<blockquote>
					Mi chiamo Alexandru e sono un Junior Front-End Developer. Ho creato questo sito come sfida, per espandere le 
					mie conoscenze e skills nel mondo dello Web Development e un giorno spero di diventare un bravo Full-Stack 
					Web Developer.
					Il mio obiettivo è padroneggiare quanto piu possibile le tecnologie Front-End per poi iniziare a creare
					delle basi solide nello sviluppo Back-End (devo ancora decidere con quale linguaggio iniziare, forse sempre in JavaScript 
					o PHP).
				</blockquote>
			</div>
		</div>
	</div>
</div>