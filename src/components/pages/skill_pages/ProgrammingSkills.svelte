<script>
    import { fly } from 'svelte/transition';
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

<div class="tile is-child is-12 box"  transition:fly="{{x: 200, duration: 900, delay: 600}}">
    <p class="title">Programming Skills</p>
    {#each programmingSkills as singleSkill }
        <span class="is-clearfix">{singleSkill.tech}</span>
        <progress class="progress is-small {singleSkill.color}" value="{singleSkill.level}" max="100">{singleSkill.level}</progress>
    {/each}
</div>
