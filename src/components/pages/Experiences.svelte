<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>
<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet">Experiences</p>
<div class="tile is-ancestor">
	<div class="tile is-parent" transition:fly="{{y: 200, duration: 900, delay:600, easing: quintOut}}">
		<div class="tile is-child box has-background-dark has-text-white-bis">
			<p class="title has-text-white-bis">Key To Business</p>
			<div class="p-3">
				<p>Front End Junior Developer</p>
				<p>09/06/2020 – alla data attuale</p>
			</div>
			<div class="box has-background-primary has-text-white-bis has-text-centered ">
				<blockquote>
					Attualmente sto lavorando sul progetto FEU ( Front-End Unico ) 
					di Poste dove ho il compito di creare ed implementare componenti e funzionalita.
				</blockquote>
			</div>
			<div class="has-text-centered has-text-white-bis">
				<div class="mb-4">
					<p>Technologie utilizzate</p>
				</div>
				<div class="box has-background-primary has-text-white-bis p-3">
					<p>JavaScript</p>
				</div>
				<div class="box has-background-primary has-text-white-bis p-3">
					<p>JQuery</p>
				</div>
				<div class="box has-background-primary has-text-white-bis p-3">
					<p>Bootstrap</p>
				</div>

			</div>
		</div>
	</div>
	<div class="tile is-parent" transition:fly="{{y: 200, duration: 900, delay:600, easing: quintOut}}">
		<div class="tile is-child box has-background-dark has-text-white-bis">
			<p class="title has-text-white-bis">Key To Business</p>
			<div class="p-3">
				<p>Angular Junior Developer</p>
				<p>03/03/2020 - 09/06/2020</p>
			</div>
			<div class="box has-background-danger has-text-white-bis has-text-centered ">
				<blockquote>
					Ho svolto un corso di formazione in Angular presso Key to Business, 
					dove ho potuto apprendere ed applicare i concetti studiati partecipando ad un progetto interno. 
					Nel progetto ho utilizzato i ReactiveForm, anche in maniera dinamica, aggiungendo e 
					rimuovendo FormGroup da un FormArray. 
					I dati dell'applicazione vengono salvati e recuperati tramite Google Firebase, 
					e nello specifico, ho utilizzato la libreria angular/fire per interfacciarmi con il 
					database ed i servizi offerti da Firebase; inoltre questo mi ha permesso di utilizzare 
					gli observable e i principali operatori rxjs per manipolare questo flusso di dati. 
					Per questo progetto è stata utilizza la libreria UI Angular Material con la quale 
					abbia sviluppato l'interfaccia dell'applicazione. 
				</blockquote>
			</div>
			<div class="has-text-centered has-text-white-bis">
				<div class="mb-4">
					<p>Technologie utilizzate</p>
				</div>
				<div class="box has-background-danger has-text-white-bis p-3">
					<p>Angular 9</p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="tile is-ancestor">
	<div class="tile is-parent is-6" transition:fly="{{y: 200, duration: 900, delay:600, easing: quintOut}}">
		<div class="tile is-child box has-background-dark has-text-white-bis">
			<p class="title has-text-white-bis">Immobiliare.it Spa</p>
			<div class="p-3">
				<p>Front End Junior Developer</p>
				<p>05/02/2019 – 02/08/2019</p>
			</div>
			<div class="box has-background-primary has-text-white-bis has-text-centered ">
				<blockquote>
					Ho svolto uno stage di 6 mesi nella sede di Roma di Immobiliare.it, 
					suddiviso in 5 mesi di formazione sulle tecnologie usate per il sviluppo Front End 
					ed un mese di nei team, dove ho svolto la mansione di web developer incaricato con 
					la creazione di pagine web statiche usando i concetti studiati in precedenza. 
				</blockquote>
			</div>
			<div class="has-text-white-bis">
				<div class="mb-4 has-text-centered">
					<p>Technologie studiate e applicate</p>
				</div>
				<div class="box has-background-primary has-text-white-bis p-3">
					<p>HTML - dalle basi a HTML5</p>
				</div>
				<div class="box has-background-primary has-text-white-bis p-3">
					<p>CSS - Flexbox, Selectors, SASS, BEM</p>
				</div>
				<div class="box has-background-primary has-text-white-bis p-3">
					<p>JavaScript - basi, Callbacks, Scope, Functional Programming</p>
				</div>
				<div class="box has-background-primary has-text-white-bis p-3">
					<p>Tool & Framework - basi Bash, Git, NPM, basi NodeJS</p>
				</div>
			</div>
		</div>
	</div>
</div>
