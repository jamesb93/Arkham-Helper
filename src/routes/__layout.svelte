<script>
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		margin-top: 1em;
		max-width: clamp(23ch, 80%, 46ch);
	}
</style>
