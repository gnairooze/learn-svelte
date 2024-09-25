<script>
	let name = 'world';
	let a = 1;
	let b = 2;
</script>

<h1>bindings</h1>

<input bind:value={name} />

<h2>Hello {name}!</h2>

<div>
	<label>
		<input type="number" bind:value={a} min="0" max="10" />
		<input type="range" bind:value={a} min="0" max="10" />
	</label>
</div>

<div>
	<label>
		<input type="number" bind:value={b} min="0" max="10" />
		<input type="range" bind:value={b} min="0" max="10" />
	</label>
</div>

<p>{a} + {b} = {a + b}</p>
