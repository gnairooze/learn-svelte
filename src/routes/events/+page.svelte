<script>
	import Outer from './Outer.svelte';
	import BigRedButton from './BigRedButton.svelte';
	import horn from './horn.mp3';

	let m = { x: 0, y: 0 };

	/*function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}*/

	function handleMessage(event) {
		alert(event.detail.text);
	}

	const audio = new Audio();
	audio.src = horn;

	function handleBigRedClick() {
		audio.load();
		audio.play();
	}
</script>

<!--<div on:pointermove={handleMove}>
	The pointer is at {m.x} x {m.y}
</div>-->

<div on:pointermove={(e)=> {
    m.x = e.clientX;
    m.y = e.clientY;
}}>
	<h1>events</h1>
	The pointer is at {m.x} x {m.y}
</div>

<style>
	div {
		position: fixed;
		left: 200;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 1rem;
		border-style: double;
	}

	.next {
		position: fixed;
		left: 200;
		top: 200px;
		width: 100%;
		height: 100%;
		padding: 1rem;
	}
</style>

<div class="next">	
	<button on:click|once={() => alert('clicked')}>
		Click me
	</button>
	
	<hr />
	
	<Outer on:message={handleMessage} />

	<hr />
	
	<BigRedButton on:click={handleBigRedClick} />
</div>