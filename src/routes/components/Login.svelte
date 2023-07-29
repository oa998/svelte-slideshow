<script>
</script>

<div class="flex flex-col min-w-max gap-2 p-2 text-white">
	<button
		class="bg-red-400 w-full p-5"
		on:click={() => {
			fetch('/login', {
				method: 'POST',
				headers: {
					accept: 'application/json',
					['content-type']: 'application/json'
				},
				body: JSON.stringify({
					username: 'zzz@zzz.com',
					password: 'abc123ABC'
				}),
				credentials: 'include'
			});
		}}>LOG IN</button
	>
	<button
		class="w-full bg-blue-400 p-5"
		on:click={() => {
			console.log('getit');
			fetch('/', {
				method: 'GET',
				credentials: 'include'
			})
				.then((r) => r.text().then(console.log))
				.catch((e) => console.log('errorrrrr', e))
				.then(() => console.log('called /'));
		}}>Get It</button
	>
</div>
