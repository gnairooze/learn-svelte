<script>
    import Nested from "./Nested.svelte";

    let name = `SvelteKit`;
    let src = '/image.gif';

    let string = `this string contains some <strong>HTML!!!</strong>`;

	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>

<h1>Welcome to {name.toUpperCase()}</h1>

<img {src} alt='{name} dances' />

<p>This is a paragraph.</p>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Nested />

<p>{@html string}</p>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
