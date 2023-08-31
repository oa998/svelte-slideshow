<script lang="ts">
	import { browser } from '$app/environment';
	import Center from '../../../components/Center.svelte';
	import ShadowText from '../../../components/ShadowText.svelte';
	import TunnelBackground from '../../../components/TunnelBackground.svelte';
	export let data;
	const { qna, previous, number, next, max } = data;

	let blurred: HTMLButtonElement;
	let imgBlurred: HTMLImageElement;

	$: unblur = () => {
		blurred?.classList.remove('opacity-0');
		imgBlurred?.classList.remove('opacity-0');
	};

	if (browser) {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight') {
				window.location.pathname = `/svelte-slideshow/trivia/slogan/${next}`;
			} else if (e.key === 'ArrowLeft') {
				window.location.pathname = `/svelte-slideshow/trivia/slogan/${previous}`;
			} else if (e.key === ' ') {
				unblur();
			}
		});
	}
</script>

<TunnelBackground>
	{#if !!qna.title}
		<Center class="flex flex-col gap-24">
			<ShadowText class="text-5xl px-10 black-shadow scale-150 text-blue-400"
				>{qna.title}</ShadowText
			>
			{#each qna.subtitles as subtitle}
				<ShadowText class="text-5xl px-10 black-shadow ">{subtitle}</ShadowText>
			{/each}
		</Center>
	{:else}
		<Center class="flex flex-col gap-5">
			<ShadowText class="text-5xl px-10 black-shadow scale-150 ">{qna.question}</ShadowText>
			<br />
			<img
				src={qna.imgurl}
				alt="slogan"
				class="w-full h-auto max-w-xl max-h-[60vh] opacity-0"
				bind:this={imgBlurred}
			/>
			<br />
			<ShadowText
				class="text-5xl px-10 black-shadow font-mono opacity-0 scale-[200%] text-blue-500"
				bind:textElement={blurred}>{qna.answer}</ShadowText
			>
			{#if max && number <= max}
				<ShadowText class="absolute bottom-5 right-5 text-sm text-yellow-300"
					>{number} / {max}</ShadowText
				>
			{/if}
		</Center>
	{/if}
</TunnelBackground>
