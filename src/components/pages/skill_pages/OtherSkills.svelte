<script>
    import { fly } from 'svelte/transition';
</script>

<div class="tile is-child is-12 box"  transition:fly="{{x: 200, duration: 900, delay: 200}}">
	<p class="title">Tech Skills</p>
	<div>
		<h3>
			Sistemi operativi conosciuti:
		</h3>
		<div class="ml-6">
			<p>
				Windows 7, 8, 10;
			</p>
			<p>
				Linux: Ubuntu, Xubuntu;
			</p>
		</div>
	</div>
	<div class="mt-5">
		<h3>			
			Software di emulazione di macchine virtuali conosciuti:
		</h3>
		<div class="ml-6">
			<p>
				Oracle VirtualBox;
			</p>
		</div>
	</div>
</div>
