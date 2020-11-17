<script>
	import OtherSkills from './skill_pages/Other.svelte';
	import TechSkills from './skill_pages/TechSkills.svelte';
</script>
<div>
	<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet">Skills</p>
	<div class="tile is-ancestor">
		<div class="tile is-parent is-6">
			<TechSkills></TechSkills>
		</div>
		<div class="tile is-parent is-6 is-vertical">
			<OtherSkills></OtherSkills>
		</div>
	</div>
</div>
