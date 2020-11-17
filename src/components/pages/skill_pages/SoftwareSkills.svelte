<script>
    import { fly, slide } from 'svelte/transition';
    let programmingSkills = [
		{tech: 'HTML', level: '80', color: 'is-lightorange'},
		{tech: 'CSS', level: '65', color: 'is-info'},
		{tech: 'JavaScript', level: '70', color: 'is-warning'},
		{tech: 'jQuery', level: '70', color: 'is-link'},
		{tech: 'BootStrap', level: '65', color: 'is-purple'},
		{tech: 'Bulma', level: '50', color: 'is-primary'},
		{tech: 'Svelte', level: '40', color: 'is-orange'},
		{tech: 'Angular', level: '40', color: 'is-danger'}
    ];
</script>
<div class="tile is-child box m-10 has-background-dark has-text-white-bis" transition:slide="{{ duration: 900, delay: 800}}">
    <p class="title has-text-white-bis">Software Skills</p>
    {#each programmingSkills as singleSkill }
        <span class="is-clearfix is-clipped">
            <p>{singleSkill.tech} <span class="is-pulled-right">{singleSkill.level}%</span></p>
        </span>
        <progress class="progress is-small is-primary has-background-dark" value="{singleSkill.level}" max="100">{singleSkill.level}</progress>
    {/each}
    <div class="has-text-white-bis" transition:slide="{{ duration: 900, delay: 500}}">
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
    <div class="mt-5" transition:slide="{{ duration: 900, delay:800}}">
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

