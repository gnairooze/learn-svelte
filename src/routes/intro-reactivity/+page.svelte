<script>
    import Nested from "./Nested.svelte";

    let name = `SvelteKit`;
    let src = '/image.gif';

    let string = `this string contains some <strong>HTML!!!</strong>`;

	let count = 0;
	$: doubled = count * 2;

	$: {
		console.log(`the count is ${count}`);
		console.log(`this will also be logged whenever count changes`);
	}

	$: if (count >= 10) {
		alert(`${count} is dangerously high!`);
		count = 0;
	}

	function increment() {
		count += 1;
	}

	let numbers = [1, 2, 3, 4];

	function addNumber() {
		//numbers.push(numbers.length + 1);
		//numbers = numbers;
		//numbers = [...numbers, numbers.length + 1];
		numbers[numbers.length] = numbers.length + 1;
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>

<h1>intro & reactivity</h1>

<h2>Welcome to {name.toUpperCase()}</h2>

<img {src} alt='{name} dances' />

<p>This is a paragraph.</p>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Nested />

<p>{@html string}</p>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>
	{count} doubled is {doubled}
</p>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>
