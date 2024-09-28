<script>
	let name = 'world';
	let a = 1;
	let b = 2;
	let yes = false;
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

<hr />

<label>
	<input type="checkbox" bind:checked={yes} />
	Yes! Send me regular email spam
</label>

{#if yes}
	<p>
		Thank you. We will bombard your inbox and sell
		your personal details.
	</p>
{:else}
	<p>
		You must opt in to continue. If you're not
		paying, you're the product.
	</p>
{/if}

<button disabled={!yes}>Subscribe</button>
