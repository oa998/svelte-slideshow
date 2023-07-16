<script lang="ts">
	import { browser } from '$app/environment';
	import Center from '../../components/Center.svelte';
	import QuestionAndImage from '../../components/QuestionAndImage.svelte';
	import ShadowText from '../../components/ShadowText.svelte';
	import WavyBackground from '../../components/WavyBackground.svelte';
	export let data;
	const { qna, previous, next } = data;

	if (browser) {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight') {
				window.location.pathname = `/svelte-slideshow/trivia/${next}`;
			} else if (e.key === 'ArrowLeft') {
				window.location.pathname = `/svelte-slideshow/trivia/${previous}`;
			}
		});
	}

	const unblur = (s: MouseEvent) => {
		s.target.classList.remove('blur-md');
	};
</script>

{#if qna.type === 'QUESTION'}
	<QuestionAndImage {...qna} />
{:else if qna.type === 'START'}
	<WavyBackground>
		<Center class="flex flex-col gap-10">
			<ShadowText class="text-5xl px-10 question-shadow scale-150">{qna.text}</ShadowText>
			<br />
			<ShadowText class="text-5xl px-10 question-shadow text-yellow-200 font-mono"
				>{qna.exampleClue}</ShadowText
			>
			<ShadowText class="text-5xl px-10 question-shadow font-mono">{qna.exampleBlanks}</ShadowText>
			<ShadowText class="text-5xl px-10 answer-shadow font-mono blur-md" on:click={unblur}
				>{qna.exampleAnswer}</ShadowText
			>
		</Center>
	</WavyBackground>
{:else if qna.type === 'END'}
	<WavyBackground>
		<Center class="flex flex-col gap-10">
			<ShadowText class="text-5xl px-10 answer-shadow scale-150">Happy Friday!</ShadowText>
		</Center>
	</WavyBackground>
{/if}
