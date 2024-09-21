<script>
	import Nested from './Nested.svelte';
	import PackageInfo from './PackageInfo.svelte';

	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};
</script>

<Nested answer={42} />
<Nested />

<PackageInfo {...pkg} />
