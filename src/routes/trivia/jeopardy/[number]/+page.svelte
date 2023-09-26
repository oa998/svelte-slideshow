<script lang="ts">
	import { browser } from '$app/environment';
	import Center from '../../../components/Center.svelte';
	import ShadowText from '../../../components/ShadowText.svelte';
	export let data;
	const { qna, previous, number, next, max } = data;

	let show = false;

	$: unblur = () => {
		show = !show;
	};

	if (browser) {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight') {
				window.location.pathname = `/svelte-slideshow/trivia/jeopardy/${next}`;
			} else if (e.key === 'ArrowLeft') {
				window.location.pathname = `/svelte-slideshow/trivia/jeopardy/${previous}`;
			} else if (e.key === ' ') {
				unblur();
			}
		});
	}
</script>

<div
	class={`h-full w-full absolute bg-[#0014a0] p-10 bg-gradient-to-r from-[#0014a0] to-[#0d00a0] max-h-[100vh] overflow-hidden`}
>
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
		<Center class="flex flex-col border-[5px] border-opacity-25 border-white scale-150 gap-20">
			{#if !show && qna.category}
				<div class="text-5xl text-white max-w-5xl underline uppercase font-extrabold text-center">
					{qna.category}
				</div>
			{/if}
			<div
				class="text-5xl text-white max-w-5xl leading-[70px] uppercase font-extrabold text-center"
			>
				{(show ? qna.answer : qna.question) || ''}
			</div>
			{#if (show || !qna.question) && qna.imgurl}
				<img src={qna.imgurl} alt="jopardy" class="h-auto max-h-[30vh] max-w-[40vw] w-auto" />
			{/if}
		</Center>
		{#if number && max && number <= max}
			<div class="absolute bottom-5 right-5 text-md text-yellow-300">{number} / {max}</div>
		{/if}
	{/if}
</div>

<style>
	.question-shadow {
		text-shadow: #f33 0 0 5px, #f33 0 0 10px, #f33 0 0 20px, #f33 0 0 30px, #f33 0 0 40px,
			#f33 0 0 60px, #f33 0 0 10px, #f33 0 0 10px;
	}
	.answer-shadow {
		text-shadow: rgb(51, 51, 255) 0 0 5px, rgb(51, 51, 255) 0 0 10px, rgb(51, 51, 255) 0 0 20px,
			rgb(51, 51, 255) 0 0 30px, rgb(51, 51, 255) 0 0 40px, rgb(51, 51, 255) 0 0 60px,
			rgb(51, 51, 255) 0 0 10px, rgb(51, 51, 255) 0 0 10px;
	}

	.black-shadow {
		text-shadow: rgb(47, 0, 65) 0 0 5px, rgb(47, 0, 65) 0 0 10px, rgb(47, 0, 65) 0 0 20px,
			rgb(47, 0, 65) 0 0 30px, rgb(47, 0, 65) 0 0 40px, rgb(47, 0, 65) 0 0 60px,
			rgb(47, 0, 65) 0 0 10px, rgb(47, 0, 65) 0 0 10px;
	}
</style>
