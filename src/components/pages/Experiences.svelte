<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
import CardGroup from '../../shared/CardGroup.svelte';
</script>
<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet" in:fly={{y: 100, delay: 200,duration: 800, easing:quintOut}}>Experiences</p>
<div class="tile is-ancestor">
	<div class="tile is-parent" in:fly={{y: 100, delay: 400,duration: 800, easing:quintOut}}>
		<div class="tile is-child box has-background-dark has-text-white-bis">
			<p class="title has-text-white-bis">Key To Business</p>

			<CardGroup padding={'p-2'} isBoxed={false} hasPrimaryBg={false} hasTextCentered={false} hasTwoColumns={false}>
				<span slot="firstParagraph">
					<p>Front End Junior Developer</p>
					<p>09/06/2020 – alla data attuale</p>
				</span>
			</CardGroup>

			<CardGroup padding={'p-3'} hasTwoColumns={false}>
 				<blockquote slot="firstParagraph">
					Attualmente sto lavorando sul progetto FEU ( Front-End Unico ) 
					di Poste dove ho il compito di creare ed implementare componenti e funzionalita.
				</blockquote>
			</CardGroup>

			<CardGroup padding={'pb-0 pt-2'} margin={'mb-0'} isBoxed={false} hasPrimaryBg={false} hasTwoColumns={false}>
				<p slot="firstParagraph">Technologie utilizzate</p>
			</CardGroup>

			<CardGroup padding={'p-3'} hasTwoColumns={false}>
				<p slot="firstParagraph">JavaScript</p>
			</CardGroup>

			<CardGroup padding={'p-3'} hasTwoColumns={false}>
				<p slot="firstParagraph">JQuery</p>
			</CardGroup>

			<CardGroup padding={'p-3'} hasTwoColumns={false}>
				<p slot="firstParagraph">Bootstrap</p>
			</CardGroup>
		</div>
	</div>
	<div class="tile is-parent" in:fly={{y: 100, delay: 600,duration: 800, easing:quintOut}}>
		<div class="tile is-child box has-background-dark has-text-white-bis">
			<p class="title has-text-white-bis">Key To Business</p>

			<CardGroup padding={'p-2'} isBoxed={false} hasPrimaryBg={false} hasTextCentered={false} hasTwoColumns={false}>
				<span slot="firstParagraph">
					<p>Angular Junior Developer</p>
					<p>03/03/2020 - 09/06/2020</p>
				</span>
			</CardGroup>

			<CardGroup padding={'p-3'} hasTwoColumns={false} hasPrimaryBg={false} hasDangerBg={true}>
				<blockquote slot="firstParagraph" >
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
			</CardGroup>
			<CardGroup padding={'pb-0 pt-2'} margin={'mb-0'} isBoxed={false} hasPrimaryBg={false} hasTwoColumns={false}>
				<p slot="firstParagraph">Technologie utilizzate</p>
			</CardGroup>

			<CardGroup padding={'p-3'} hasTwoColumns={false} hasPrimaryBg={false} hasDangerBg={true}>
				<p slot="firstParagraph">Angular 9</p>
			</CardGroup>
		</div>
	</div>
</div>
<div class="tile is-ancestor">
	<div class="tile is-parent is-6" in:fly={{y: 100, delay: 800,duration: 800, easing:quintOut}}>
		<div class="tile is-child box has-background-dark has-text-white-bis">
			<p class="title has-text-white-bis">Immobiliare.it Spa</p>
			
			<CardGroup padding={'p-2'} isBoxed={false} hasPrimaryBg={false} hasTextCentered={false} hasTwoColumns={false}>
				<span slot="firstParagraph">
					<p>Front End Junior Developer</p>
					<p>09/06/2020 – alla data attuale</p>
				</span>
			</CardGroup>

			<CardGroup padding={'p-3'} hasTwoColumns={false}>
				<blockquote slot="firstParagraph">
					Ho svolto uno stage di 6 mesi nella sede di Roma di Immobiliare.it, 
					suddiviso in 5 mesi di formazione sulle tecnologie usate per il sviluppo Front End 
					ed un mese di nei team, dove ho svolto la mansione di web developer incaricato con 
					la creazione di pagine web statiche usando i concetti studiati in precedenza. 
				</blockquote>
			</CardGroup>
			   
			<CardGroup padding={'p-3'} hasTwoColumns={false}>
				<p slot="firstParagraph">HTML - dalle basi a HTML5</p>
			</CardGroup>

			<CardGroup padding={'p-3'} hasTwoColumns={false}>
				<p slot="firstParagraph">CSS - Flexbox, Selectors, SASS, BEM</p>
			</CardGroup>

			<CardGroup padding={'p-3'} hasTwoColumns={false}>
				<p slot="firstParagraph">JavaScript - basi, Callbacks, Scope, Functional Programming</p>
			</CardGroup>

			<CardGroup padding={'p-3'} hasTwoColumns={false}>
				<p slot="firstParagraph">Tool & Framework - basi Bash, Git, NPM, basi NodeJS</p>
			</CardGroup>
	
		</div>
	</div>
</div>
