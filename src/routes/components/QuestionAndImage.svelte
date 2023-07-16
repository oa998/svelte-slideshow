<script lang="ts">
	import Center from '../components/Center.svelte';
	import TriviaHalfSlide from '../components/TriviaHalfSlide.svelte';
	import Unveil from '../components/Unveil.svelte';
	import ShadowText from './ShadowText.svelte';

	let revealed = false;
	let hint = false;
	export let blanks1: string;
	export let blanks2: string;
	export let clue: string;
	export let answer: string;
	export let img: string;
</script>

<TriviaHalfSlide>
	<Center class="rounded-xl flex flex-col gap-20" slot="left">
		<ShadowText class="text-5xl px-10 question-shadow scale-125">{clue}</ShadowText>
		{#if revealed}
			<ShadowText class="text-5xl px-10 answer-shadow text-yellow-200 font-mono"
				>{answer}</ShadowText
			>
		{:else if hint}
			<ShadowText class="text-5xl px-10 question-shadow font-mono">{blanks2}</ShadowText>
		{:else}
			<ShadowText class="text-5xl px-10 question-shadow font-mono">{blanks1}</ShadowText>
		{/if}
	</Center>
	<Center class="rounded-xl overflow-hidden border border-white relative" slot="right">
		<Unveil on:reveal={() => (revealed = true)} on:hint={() => (hint = true)} {img} />
	</Center>
</TriviaHalfSlide>
