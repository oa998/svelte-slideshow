<script>
	import { enhance } from '$app/forms';
	const login = () => {
		return async () => {};
	};
</script>

<div class="flex flex-col min-w-max gap-2 p-2 text-white">
	<button
		class="bg-red-400 w-full p-5"
		on:click={() => {
			fetch('https://nginx-anything-storage-glovbogi2a-uc.a.run.app/auth/login', {
				method: 'POST',
				headers: {
					accept: 'application/json',
					['content-type']: 'application/json'
				},
				body: JSON.stringify({
					email: 'bbb@bbb.com',
					password: 'bbbbbb',
					loc: 'ui'
				}),
				credentials: 'include'
			});
		}}>LOG IN</button
	>
	<button
		class="w-full bg-blue-400 p-5"
		on:click={() => {
			console.log('getit');
			fetch('https://nginx-anything-storage-glovbogi2a-uc.a.run.app/app', {
				method: 'GET',
				credentials: 'include'
			})
				.then((r) => r.text().then(console.log))
				.catch((e) => console.log('errorrrrr', e))
				.then(() => console.log('called /'));
		}}>Get It</button
	>

	<button
		class="bg-red-400 w-full p-5"
		on:click={() => {
			fetch('https://test.blah.wiki/auth/login', {
				method: 'POST',
				headers: {
					accept: 'application/json',
					['content-type']: 'application/json'
				},
				body: JSON.stringify({
					email: 'bbb@bbb.com',
					password: 'bbbbbb',
					loc: 'ui'
				}),
				credentials: 'include'
			});
		}}>Login from wiki</button
	>

	<form method="POST" action="https://test.blah.wiki/auth/login" use:enhance={login}>
		<input type="text" id="email" name="email" hidden value="bbb@bbb.com" />
		<input type="text" id="password" name="password" hidden value="bbbbbb" />
		<button type="submit">Sign In FORM</button>
	</form>
</div>
