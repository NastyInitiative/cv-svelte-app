<script>
    import { quintOut } from 'svelte/easing';
    import { fly} from 'svelte/transition';
    import ProgressBar from '../../../shared/ProgressBar.svelte';
    import ProgressCircle from '../../../shared/ProgressCircle.svelte';
    import ProgressDots from '../../../shared/ProgressDots.svelte';
    import Progress from '../../../shared/Progress.svelte';
    let programmingSkills = [
		{item: 'HTML', level: 80, color: '#00d1b2'},
		{item: 'CSS', level: 65, color: '#00d1b2'},
		{item: 'JavaScript', level: 70, color: '#00d1b2'},
		{item: 'jQuery', level: 80, color: '#00d1b2'},
		{item: 'BootStrap', level: 65, color: '#00d1b2'},
		{item: 'Bulma', level: 60, color: '#00d1b2'},
		{item: 'Svelte', level: 80, color: '#00d1b2'},
		{item: 'Angular', level: 40, color: '#00d1b2'},
		{item: 'Vue', level: 80, color: '#00d1b2'},
		{item: 'Go', level: 75, color: '#00d1b2'}
    ];
    let os = [
        {item: 'Windows (7, 8, 10)', level: 80, color: '#00d1b2'},
        {item: 'Linux (Ubuntu/Xubuntu)', level: 70, color: '#00d1b2'},
    ];


</script>
<!-- <div class="tile is-child box m-10 has-background-dark has-text-white-bis" in:fly={{y: 100,duration: 800, delay: 400, easing:quintOut}}> -->
<div class="tile is-child box m-10 glass-bg has-text-white-bis" in:fly={{y: 100,duration: 800, delay: 400, easing:quintOut}}>
    <p class="title has-text-white-bis">Tech Skills</p>
    <Progress progress={programmingSkills} ></Progress>
    
    <div class="has-text-white-bis" >
        <div class="mb-4 pt-4">
            <h2 class="has-text-centered ">
                Sistemi operativi conosciuti
            </h2>
        </div>
        <Progress progress={os}></Progress>
    </div>
    <div class="mt-5">
        <div class="mb-4">
            <h3 class="has-text-centered">			
                Software di emulazione di macchine virtuali conosciuti
            </h3>
        </div>
        <div class="box box-with-shadow  has-text-centered has-background-primary has-text-white-bis">
            <p> Oracle VirtualBox </p>
        </div>
    </div>
    <div class="mt-6">
        <p class="title has-text-white-bis">Hardware Skills</p>
        <div class="box has-background-primary has-text-white-bis has-text-centered">
            <p>Ottima capacità di maintanance e building PC</p>
            <p>Buona capacità nella configurazione reti Wi-Fi e router ADSL</p>
        </div>
    </div>
    
</div>

