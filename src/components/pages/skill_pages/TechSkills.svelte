<script>
    import { quintOut } from 'svelte/easing';
    import { fly} from 'svelte/transition';
    import ProgressBar from '../../../shared/ProgressBar.svelte';
    let programmingSkills = [
		{tech: 'HTML', level: 80, color: 'is-lightorange'},
		{tech: 'CSS', level: 65, color: 'is-info'},
		{tech: 'JavaScript', level: 70, color: 'is-warning'},
		{tech: 'jQuery', level: 70, color: 'is-link'},
		{tech: 'BootStrap', level: 65, color: 'is-purple'},
		{tech: 'Bulma', level: 50, color: 'is-primary'},
		{tech: 'Svelte', level: 60, color: 'is-orange'},
		{tech: 'Angular', level: 40, color: 'is-danger'},
		{tech: 'Vue', level: 80, color: 'is-primary'}
    ];
</script>
<div class="tile is-child box m-10 has-background-dark has-text-white-bis" in:fly={{y: 100,duration: 800, delay: 400, easing:quintOut}}>
    <p class="title has-text-white-bis">Tech Skills</p>
    {#each programmingSkills as singleSkill }
        <ProgressBar level={singleSkill.level}>{singleSkill.tech}</ProgressBar>
    {/each}
    <div class="has-text-white-bis" >
        <div class="mb-4">
            <h2 class="has-text-centered ">
                Sistemi operativi conosciuti
            </h2>
        </div>
        <div class="box has-text-centered has-background-primary has-text-white-bis">
            <p> Windows: 7, 8, 10 </p>
            <p> Linux: Ubuntu, Xubuntu </p>
        </div>
    </div>
    <div class="mt-5">
        <div class="mb-4">
            <h3 class="has-text-centered">			
                Software di emulazione di macchine virtuali conosciuti
            </h3>
        </div>
        <div class="box has-text-centered has-background-primary has-text-white-bis">
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
