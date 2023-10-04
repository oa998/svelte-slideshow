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
			const f = new FormData();
			const email = 'bbb@bbb.com';
			const password = 'bbbbbb';
			fetch('https://nginx-anything-storage-glovbogi2a-uc.a.run.app/auth/login', {
				method: 'POST',
				headers: {
					accept: 'application/json',
					['content-type']: 'application/x-www-form-urlencoded; charset=UTF-8'
				},
				body: JSON.stringify({
					email,
					password
				}),
				credentials: 'include'
			});
		}}>LOG IN (form-data-nginx)</button
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
			const f = new FormData();
			f.set('email', 'bbb@bbb.com');
			f.set('password', 'bbbbbb');
			fetch('https://login.blah.wiki/auth/login', {
				method: 'POST',
				headers: {
					accept: '*/*',
					['content-type']: 'application/x-www-form-urlencoded; charset=UTF-8'
				},
				body: f,
				credentials: 'include'
			});
		}}>Login from wiki</button
	>

	<form method="POST" action="https://login.blah.wiki/auth/login" use:enhance={login}>
		<input type="text" id="email" name="email" hidden value="bbb@bbb.com" />
		<input type="text" id="password" name="password" hidden value="bbbbbb" />
		<button type="submit">Sign In FORM LOGIN.BLAH.WIKI</button>
	</form>

	<form
		method="POST"
		action="https://nginx-anything-storage-glovbogi2a-uc.a.run.app/auth/login"
		use:enhance={login}
	>
		<input type="text" id="email" name="email" hidden value="bbb@bbb.com" />
		<input type="text" id="password" name="password" hidden value="bbbbbb" />
		<button type="submit">Sign In FORM NGINX</button>
	</form>
</div>
