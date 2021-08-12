<script>
	import { Router } from 'svelte-routing';
	import routes from './component-routes';
	import Navbar from './components/Navbar.svelte';
	import MainBody from './components/MainBody.svelte';
	import Footer from './components/Footer.svelte';
	
	export let url = "";
	
	let verticalPosition;
	let isBurgerMenuVisible = false;
</script>
<svelte:window bind:scrollY={verticalPosition}/>
<Router url={url}>
	<!-- START Hero section -->
	<section class="hero nasty-bg is-fullheight">
		<Navbar {routes} {isBurgerMenuVisible}></Navbar>
		<MainBody {routes} {verticalPosition}></MainBody>
	</section>
</Router>

<Footer></Footer>
