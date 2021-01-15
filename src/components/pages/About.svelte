<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>
<div in:fly={{y: 200,duration: 1000, easing:quintOut}}>
	<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet" in:fly={{y: 30,duration: 800, delay: 200, easing:quintOut}}>About</p>
	<div class="tile is-ancestor about" in:fly={{y: 30,duration: 800, delay: 600, easing:quintOut}}>
		<div class="tile is-parent " >
			<div class="tile is-child box notification is-primary">
				<blockquote>
					Ho creato questo sito come esercizio e sfida, per espandere le 
					mie conoscenze e skills nel mondo dello Web Development e spero di diventare un eccellente Full-Stack 
					Web Developer.
					Il mio obiettivo è padroneggiare il piu possibile le tecnologie Front-End per poi iniziare a porre
					delle basi solide nello sviluppo Back-End (ancora da decidere con quale linguaggio iniziare, forse sempre in JavaScript/TypeScript 
					o PHP ecc. ).
				</blockquote>
			</div>
		</div>
	</div>
</div>