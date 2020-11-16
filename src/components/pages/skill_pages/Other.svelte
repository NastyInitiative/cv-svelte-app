<script>
    import { fly, slide } from 'svelte/transition';
</script>

<div class="tile is-child box has-background-dark" transition:fly="{{y: 200, duration: 900, delay:600}}">
	<p class="title has-text-white-bis">Hardware Skills</p>
	<div class="box has-background-danger has-text-white-bis has-text-centered">
		<p>Ottima capacità di maintanance e building PC</p>
		<p>Buona capacità nella configurazione reti Wi-Fi e router ADSL</p>
	</div>
</div>
<div class="tile is-child box has-background-dark" transition:fly="{{y: 200, duration: 900, delay:600}}">
	<p class="title has-text-white-bis">Language Skills</p>
	<div class="box has-text-centered has-background-danger has-text-white-bis">
		<p>Rumeno - madre lingua</p>
	</div>
	<div class="box has-text-centered has-background-danger has-text-white-bis">
		<p>Italiano - madre lingua</p>
	</div>
	<div class="has-text-centered has-text-white-bis">
		<div class="mb-4">
			<p>Inglese</p>
		</div>
		<div class="box has-background-danger  has-text-white-bis">
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
		<div class="box has-background-danger has-text-white-bis">
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
		<div class="box has-background-danger has-text-white-bis">
			<p>Produzione scritta</p>
			<p>B1</p>
		</div>
	</div>
</div>

