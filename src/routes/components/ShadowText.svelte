<button class={`text-5xl px-10 question-shadow text-white ${$$props.class}`} on:click
	><slot /></button
>

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
