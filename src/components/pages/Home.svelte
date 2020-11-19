<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<div transition:fly="{{y: 200, duration: 900, delay:800, easing: quintOut}}">
	<div class="pb-3">
		<p>Ciao, sono</p>
		<p class="animate-border">
			<a target="_blank" rel="noreferrer" href="https://linkedin.com/in/ionut-alexandru-pacuraru-4390b8182" class="animate-text show-title">
				<!-- <p class="main-text is-size-2-desktop is-size-3-mobile is-size-3-tablet" >🅽🅰🆂🆃🆈 🅸🅽🅸🆃🅸🅰🆃🅸🆅🅴</p>  -->
				<p class="main-text is-size-2-desktop is-size-3-mobile is-size-3-tablet" >Pacuraru Ionut Alexandru</p> 
			</a>
		</p>
		<p>e sono un Junior Front-End Developer</p>
	</div>
	<div class="tile is-ancestor about">
		<div class="tile is-parent " >
			<div class="tile is-child box notification is-dark">
				<blockquote>
					Sono appassionato d'informatica, in modo speciale del gaming e del mondo tech in generale.
					Quando voglio staccarmi dal monitor, trovo rifugio nella musica o nella lettura, cosi posso rinfrescare
					la mente e ripartire con idee fresche.
				</blockquote>
			</div>
		</div>
	</div>
</div>
