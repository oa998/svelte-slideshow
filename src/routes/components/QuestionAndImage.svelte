<script lang="ts">
	import Center from '../components/Center.svelte';
	import TriviaHalfSlide from '../components/TriviaHalfSlide.svelte';
	import Unveil from '../components/Unveil.svelte';

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
		<div class="text-5xl px-10 question-shadow">{clue}</div>
		{#if revealed}
			<div class="text-5xl px-10 answer-shadow text-yellow-200 font-mon">{answer}</div>
		{:else if hint}
			<div class="text-5xl px-10 question-shadow font-mon">{blanks2}</div>
		{:else}
			<div class="text-5xl px-10 question-shadow font-mon">{blanks1}</div>
		{/if}
	</Center>
	<Center class="rounded-xl overflow-hidden border border-white relative" slot="right">
		<Unveil on:reveal={() => (revealed = true)} on:hint={() => (hint = true)} {img} />
	</Center>
</TriviaHalfSlide>

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
</style>
