<script>
	import { fly } from 'svelte/transition';
	import {Router, Route, Link, navigate, link} from 'svelte-routing';
	import ProgrammingSkills from './skill_pages/ProgrammingSkills.svelte';
	import OtherSkills from './skill_pages/OtherSkills.svelte';
	import { slide  } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	export let bg = "skills-bg";
</script>

<div class="tile is-ancestor">
	<div class="tile is-parent is-6">
		<ProgrammingSkills></ProgrammingSkills>
	</div>
	<div class="tile is-parent is-6">
		<OtherSkills></OtherSkills>
	</div>
</div>
