<script lang="ts">
	import Icon from '@iconify/svelte';
	let elements = [
		'<span>Span 1</span>',
		'<span>Span 2</span>',
		'<span>Span 3</span>',
		'<span>Span 4</span>',
		'<span>Span 5</span>',
		'<span>Span 6</span>',
		'<span>Span 7</span>'
	];
	let copy: string[] = [];
	let iDragTo = 0;
	let iDragFrom = 0;

	const addClass = (e: MouseEvent) => {
		(e.target as HTMLDivElement)!.classList.add('drag-active');
	};
	const removeClass = (e: MouseEvent) => {
		(e.target as HTMLDivElement)!.classList.remove('drag-active');
	};
	const drop = (e: MouseEvent) => {
		if (iDragFrom === iDragTo) return;
		const [min, max] = [Math.min(iDragFrom, iDragTo), Math.max(iDragFrom, iDragTo)];
		const l1 = elements.slice(0, min);
		const l2 = elements.slice(min + 1, max);
		const l3 = elements.slice(max + 1);
		const [e1, e2] = [elements[min], elements[max]];
		let list = [];
		if (iDragFrom > iDragTo) {
			list = l1
				.concat(e2)
				.concat(e1)
				.concat(l2)
				.concat(l3)
				.filter((item) => item !== undefined);
		} else {
			list = l1
				.concat(l2)
				.concat(e1)
				.concat(e2)
				.concat(l3)
				.filter((item) => item !== undefined);
		}
		elements = list;
		removeClass(e);
	};
</script>

<button
	class="border border-black p-2 m-1 rounded-sm"
	on:click={() => {
		if (elements.length > 0) {
			copy = elements;
			elements = [];
		} else {
			elements = copy;
			copy = [];
		}
	}}
>
	toggle
</button>

<button
	class="bg-blue-100 border border-black p-2 m-1 rounded-sm"
	on:click={() => {
		const els = [...document.querySelectorAll('.content')].map((h) => h.innerHTML.trim());
		elements = [];
		setTimeout(() => {
			elements = els;
		});
	}}
>
	save
</button>

<button
	on:click={() => {
		for (let i = elements.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[elements[i], elements[j]] = [elements[j], elements[i]];
		}
	}}
>
	randomize
</button>

<div class="select-none">this is not selectable?</div>
<div id="grid-wrapper" class="grid">
	<div />
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div>
		<div
			class="flex flex-row gap-3 h-2 bg-blue-400"
			on:dragover|preventDefault={(e) => {
				iDragTo = 0;
				addClass(e);
			}}
			on:dragleave|preventDefault={removeClass}
			on:drop={drop}
		/>
	</div>
	{#each elements as htmlStr, i}
		<div>{i + 1}</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex flex-row gap-3 active:border border-black flex_wrapper"
			on:dragstart={() => {
				iDragFrom = i;
			}}
			on:dragover|preventDefault={(e) => {
				iDragTo = i + 1;
				addClass(e);
			}}
			on:dragleave|preventDefault={removeClass}
			on:drop={drop}
		>
			<div draggable="true" class="select-none flex items-center">
				<Icon icon="ic:baseline-drag-handle" style="font-size:large" color="gray" />
			</div>
			<div class="content" contenteditable>
				{@html htmlStr}
			</div>
		</div>
	{/each}
</div>

<style>
	#grid-wrapper {
		grid-template-columns: 20px 1fr;
	}
	:global(.drag-active) {
		border-bottom: solid black 1px;
	}
</style>
