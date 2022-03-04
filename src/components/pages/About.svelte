<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>
<div in:fly={{y: 200,duration: 1000, easing:quintOut}} id="about" class="vh-full center-items">
	<div>
		<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet" in:fly={{y: 30,duration: 800, delay: 200, easing:quintOut}}>About</p>
		<div class="tile is-ancestor about" in:fly={{y: 30,duration: 800, delay: 600, easing:quintOut}}>
			<div class="tile is-parent " >
				<div class="tile is-child box notification is-primary card-hover-primary">
					<blockquote>
						Sono uno sviluppatore Web (Junior per ora), sulla strada di diventare Full-Stack, molto curioso (anche abbastanza smanettone)
						a cui piace studiare e usare tecnologie nuove e/o interessanti. 
						Ho iniziato il mio viaggio nel mondo della programmazione con l'obbietivo di dare scossa alla mia carriera lavorativa 
						e alla mia vita in generale e ne sono fiero della scelta fatta. 
					</blockquote>
				</div>
			</div>
		</div>
	</div>
	<!-- <div>
		<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet" in:fly={{y: 30,duration: 800, delay: 200, easing:quintOut}}>About</p>
		<div class="tile is-ancestor about" in:fly={{y: 30,duration: 800, delay: 600, easing:quintOut}}>
			<div class="tile is-parent " >
				<div class="tile is-child box notification is-primary">
					<blockquote>
						Sono uno sviluppatore Web (Junior per ora), sulla strada di diventare Full-Stack, molto curioso (anche abbastanza smanettone)
						a cui piace studiare e usare tecnologie nuove e/o interessanti. 
						Ho iniziato il mio viaggio nel mondo della programmazione con l'obbietivo di dare scossa alla mia carriera lavorativa 
						e alla mia vita in generale e ne sono fiero della scelta fatta. 
					</blockquote>
				</div>
			</div>
		</div>
	</div> -->
</div>