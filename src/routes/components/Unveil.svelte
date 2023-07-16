<script lang="ts">
	import { browser } from '$app/environment';
	import { createEventDispatcher } from 'svelte';

	export let img: string;
	let started = false;
	let finished = false;
	const dispatch = createEventDispatcher();
	let can: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	const color = 240;
	const startBlur = 50;
	const startBrightness = 0.2;
	let percentProgress = 0;

	const setBlur = (blur: number, brightness: number) => {
		if (browser) {
			document.documentElement.style.setProperty('--reveal-blur', `${blur}px`);
			document.documentElement.style.setProperty(
				'--reveal-brightness',
				`${Math.min(1, brightness)}`
			);
		}
	};
	setBlur(startBlur, startBrightness);

	const progress = (v: number) => {
		percentProgress = 1 - v / 100;
		setBlur(startBlur * percentProgress, 1 - percentProgress + startBrightness);
		if (percentProgress < 0) dispatch('reveal');
		else if (percentProgress < 0.5) dispatch('hint');
	};

	let reveal = () => {};

	$: if (can) {
		ctx = can.getContext('2d')!;

		let end = Math.PI;
		const start = end;
		const d = can.height / 2.2;
		const delta = 0.005;

		reveal = () => {
			finished = true;
			progress(100.1);
			// dispatch('reveal');
		};

		const draw = () => {
			ctx.strokeStyle = `hsla(${Math.floor(color - (100 - 100 * percentProgress))}, 100%, 45%, 1)`;
			ctx.save();
			ctx.translate(can.width / 2, can.height / 2);
			ctx.beginPath();
			ctx.moveTo(0, 0);
			ctx.rotate(end);
			ctx.lineTo(0, d);
			ctx.closePath();
			ctx.stroke();
			ctx.restore();
			end += delta;
			if (end - start < Math.PI * 2 + delta && !finished) {
				progress(((end - start) / (Math.PI * 2)) * 100);
				requestAnimationFrame(draw);
			}
		};
		if (!started) {
			started = true;
			draw();
		}
	}

	if (browser) {
		document.addEventListener('keydown', (e) => {
			if (e.key === ' ') {
				reveal();
			}
		});
	}
</script>

<img class="w-full h-auto blur" src={img} alt="ok" />
<canvas width="150" height="150" bind:this={can} />

<style>
	:root {
		--reveal-blur: 50px;
		--reveal-brightness: 0;
	}
	.blur {
		filter: blur(var(--reveal-blur)) brightness(var(--reveal-brightness));
	}
	canvas {
		@apply absolute top-2 left-2 rounded-full bg-black;
	}
</style>
