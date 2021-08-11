<script>
    import { quintOut } from 'svelte/easing';
    import { fly} from 'svelte/transition';
    import ProgressBar from '../../../shared/ProgressBar.svelte';
    import ProgressCircle from '../../../shared/ProgressCircle.svelte';
    let programmingSkills = [
		{tech: 'HTML', level: 80, color: '#00d1b2'},
		{tech: 'CSS', level: 65, color: '#00d1b2'},
		{tech: 'JavaScript', level: 70, color: '#00d1b2'},
		{tech: 'jQuery', level: 80, color: '#00d1b2'},
		{tech: 'BootStrap', level: 65, color: '#00d1b2'},
		{tech: 'Bulma', level: 60, color: '#00d1b2'},
		{tech: 'Svelte', level: 80, color: '#00d1b2'},
		{tech: 'Angular', level: 40, color: '#00d1b2'},
		{tech: 'Vue', level: 80, color: '#00d1b2'},
		{tech: 'Go', level: 65, color: '#00d1b2'}
    ];
    let os = [
        {os: 'Windows (7, 8, 10)', level: 80, color: '#00d1b2'},
        {os: 'Linux (Ubuntu/Xubuntu)', level: 70, color: '#00d1b2'},
    ];


</script>
<div class="tile is-child box m-10 has-background-dark has-text-white-bis" in:fly={{y: 100,duration: 800, delay: 400, easing:quintOut}}>
    <p class="title has-text-white-bis">Tech Skills</p>
    {#each programmingSkills as singleSkill }
        <ProgressBar level={singleSkill.level}>{singleSkill.tech}</ProgressBar>
    {/each}
    <!-- <div class="has-text-black-bis columns is-flex  is-justify-content-center is-flex-wrap-wrap is-justify-content-space-around"  >
        {#each programmingSkills as singleSkill }
            <div style="padding: 20px;" class="is-6 is-12-mobile is-align-content-center">
                <div class="has-text-centered has-text-white-bis pb-3"><p>{singleSkill.tech}</p></div>
                <ProgressCircle level={singleSkill.level} levelColor={singleSkill.color}></ProgressCircle>
            </div>
        {/each}
    </div> -->
    <div class="has-text-white-bis" >
        <div class="mb-4 pt-4">
            <h2 class="has-text-centered ">
                Sistemi operativi conosciuti
            </h2>
        </div>
        {#each os as singleOs }
            <ProgressBar level={singleOs.level}>{singleOs.os}</ProgressBar>
        {/each}
        <!-- <div class="has-text-black-bis columns is-flex  is-justify-content-center is-flex-wrap-wrap is-justify-content-space-around"  >
            {#each os as singleOs }
                <div style="padding: 20px;" class="is-6 is-12-mobile is-align-content-center">
                    <div class="has-text-centered has-text-white-bis pb-3"><p>{singleOs.os}</p> </div>
                    <ProgressCircle level={singleOs.level} levelColor={singleOs.color}> </ProgressCircle>
                </div>
            {/each}
        </div> -->
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

