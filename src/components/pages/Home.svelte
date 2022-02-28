<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{y: 200,duration: 1000, easing:quintOut}}>
	<div class="pb-3">
		<p in:fly={{y: 30,duration: 600, delay: 200, easing:quintOut}}>Ciao, sono</p>
		<p class="animate-border">
			<a target="_blank" rel="noreferrer" href="https://linkedin.com/in/ionut-alexandru-pacuraru-4390b8182" class="animate-text show-title">
				<!-- <p class="main-text is-size-2-desktop is-size-3-mobile is-size-3-tablet" >🅽🅰🆂🆃🆈 🅸🅽🅸🆃🅸🅰🆃🅸🆅🅴</p>  -->
				<p in:fly={{y: 30, duration: 600, delay: 400 , easing:quintOut}} class="main-text is-size-2-desktop is-size-3-mobile is-size-3-tablet" >Pacuraru Ionut Alexandru</p> 
			</a>
		</p>
		<p in:fly={{y: 30,duration: 600, delay: 600, easing:quintOut}}>e sono un Junior Front-End Developer</p>
	</div>
	<div class="tile is-ancestor about" in:fly={{y: 30,duration: 600, delay: 800, easing:quintOut}}>
		<div class="tile is-parent " >
			<div class="tile is-child box notification glass-bg has-text-white-bis">
				<blockquote>
					Sono appasionato del mondo informatico, piu nello specifico, di quello del gaming, programmazione e hardware PC.
					Quando voglio staccarmi dal PC, trovo conforto e relax nella musica e lettura.
				</blockquote>
			</div>
		</div>
	</div>
</div>
