<script>
	import OtherSkills from './skill_pages/Other.svelte';
	import SoftwareSkills from './skill_pages/SoftwareSkills.svelte';
</script>
<div>
	<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet">Skills</p>
	<div class="tile is-ancestor">
		<div class="tile is-parent is-6">
			<SoftwareSkills></SoftwareSkills>
		</div>
		<div class="tile is-parent is-6 is-vertical">
			<OtherSkills></OtherSkills>
		</div>
	</div>
</div>
