<script>
	import { fly } from 'svelte/transition';
</script>

<div>
	
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
	<!-- <div class="tile is-parent " transition:fly="{{x: 200, duration: 900}}">
		<div class="tile is-child box notification is-primary">
			<p class="title">About the author</p>
			<blockquote>
				Mi chiamo Alexandru e sono un Junior Front-End Developer. Ho creato questo sito come sfida, per espandere le 
				mie conoscenze e skills nel mondo dello Web Development e un giorno spero di diventare un bravo Full-Stack 
				Web Developer.
				Il mio obiettivo è padroneggiare quanto piu possibile le tecnologie Front-End per poi iniziare a creare
				delle basi solide nello sviluppo Back-End (devo ancora decidere con quale linguaggio iniziare, forse sempre in JavaScript 
				o PHP).
			</blockquote>
		</div>
	</div> -->
	<div class="tile is-parent " transition:fly="{{x: 200, duration: 900, delay:600}}">
		<div class="tile is-child box notification is-dark">
			<!-- <p class="title">Other info</p> -->
			<blockquote>
				Sono appassionato d'informatica, in modo speciale del gaming e del mondo tech in generale.
				Quando voglio staccarmi dal monitor, trovo rifugio nella musica o nella lettura, cosi posso rinfrescare
				la mente e ripartire con idee fresche.
			</blockquote>
		</div>
	</div>
</div>
