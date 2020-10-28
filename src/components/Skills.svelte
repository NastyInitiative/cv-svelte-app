<script>
	import {  fade, fly  } from 'svelte/transition';
</script>

<p transition:fly="{{ y: 200, duration: 2000 }}">Skills page</p>