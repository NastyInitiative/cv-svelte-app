<script>
import { quintOut } from 'svelte/easing';

    import { fly, slide } from 'svelte/transition';
</script>

<div class="tile is-child box has-background-dark"in:fly={{y: 100,duration: 800, delay: 600, easing:quintOut}}>
	<p class="title has-text-white-bis">Soft Skills</p>
	<div class="has-text-centered has-text-white">
		<div class="mb-4">
			<p>Competenze comunicative</p>
		</div>
		<div class="box has-background-danger has-text-white-bis p-3">
			<blockquote class="has-text-centered">
				Buone competenze comunicative e relazionali acquisite durante il corso Java e Android
				Development organizzato da Elis dove ho avuto modo di interagire con persone, quindi, personalità
				diverse, aiutandomi a sviluppare queste competenze.
			</blockquote>
		</div>
	</div>
	<div class="has-text-centered has-text-white mt-5">
		<div class="mb-4">
			<p>Competenze organizzative e gestionali</p>
		</div>
		<div class="box has-background-danger has-text-white-bis p-3">
			<blockquote class="has-text-centered">
				Capacità di team working acquisita durante il corso di Java Developer organizzato da Elis dove ho
				avuto modo di lavorare in squandra con i miei colleghi.
			</blockquote>
		</div>
		<div class="box has-background-danger has-text-white-bis p-3">
			<blockquote class="has-text-centered">
				Capacità di problem solving acquisite durante il corso Java Developer ,dove ho avuto modo di
				confrontarmi con diverse situazioni, le quali richiedevano l'individuazione del problema e la sua
				risoluzione.
			</blockquote>
		</div>
	</div>
</div>
<div class="tile is-child box has-background-dark"in:fly={{y: 100,duration: 800, delay: 800 ,easing:quintOut}}>
	<p class="title has-text-white-bis">Language Skills</p>
	<div class="box has-text-centered has-background-danger has-text-white-bis p-2">
		<p>Rumeno - madre lingua</p>
	</div>
	<div class="box has-text-centered has-background-danger has-text-white-bis p-2">
		<p>Italiano - madre lingua</p>
	</div>
	<div class="has-text-centered has-text-white-bis">
		<div class="mb-4">
			<p>Inglese</p>
		</div>
		<div class="box has-background-danger has-text-white-bis p-2">
			<p>Comprensione</p>
			<div class="columns">
				<div class="column">
					<p>Ascolto - C1</p>
				</div>
				<div class="column">
					<p>Lettura - C1</p>
				</div>
			</div>
		</div>
		<div class="box has-background-danger has-text-white-bis p-2">
			<p>Parlato</p>
			<div class="columns">
				<div class="column ">
					<p>Interazione - B1</p>
				</div>
				<div class="column">
					<p>Produzione Orale - B1</p>
				</div>
			</div>
		</div>
		<div class="box has-background-danger has-text-white-bis p-2">
			<p>Produzione scritta</p>
			<p>B1</p>
		</div>
	</div>
</div>

