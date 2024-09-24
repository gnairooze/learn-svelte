<script>
	import Thing from './Thing.svelte';
	import { getRandomNumber } from './utils.js';

	let count = 0;

	function increment() {
		count += 1;
	}

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = colors[0];

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleThingClick() {
		things = things.slice(1);
	}

	let promise = getRandomNumber();

	function handleRandomNumberClick() {
		promise = getRandomNumber();
	}
</script>

<h1>Logic</h1>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

{#if count > 10}
	<p>{count} is greater than 10</p>
{:else if count < 5}
    <p>{count} is less than 5</p>
{:else}
    <p>{count} is between 0 and 10</p>
{/if}

<h1 style="color: {selected}">Pick a colour</h1>

<div>
  {#each colors as color}
	  <button
		    aria-current={selected === color}
		    aria-label={color}
		    style="background: {color}"
		    on:click={() => selected = color}
	  ></button>
	{/each}
</div>

<style>
	h1 {
		transition: color 0.2s;
	}

	div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
	}

	button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px,-2px);
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
	}

	button[aria-current="true"] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}
</style>

<hr />

<h2>keyed each blocks</h2>

<button on:click={handleThingClick}>
	Remove first thing
</button>

{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}

<hr />

<h2>await blocks</h2>

<button on:click={handleRandomNumberClick}>
	generate random number
</button>

{#await promise}
<p>...waiting</p>
{:then number}
<p>The number is {number}</p>
<!--<div>{@html number}</div>>-->
{:catch error}
<p style="color: red">{error.message}</p>
{/await}