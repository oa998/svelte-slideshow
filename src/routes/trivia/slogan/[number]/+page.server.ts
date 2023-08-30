import { redirect } from '@sveltejs/kit';

const questions = [
	{
		title: 'Famous Slogans',
		subtitles: [
			'Popular business advertisement 🎥 ("Just Do It!" - Nike)',
			'Popular character quote 👤 ("Did I do that?!" - Urkel)',
			'Popular character nickname 👤 ("Man of Steel" - Superman)'
		]
	},
	{
		question: `"The Happiest Place on Earth" 🎥`,
		answer: 'Disneyland / Disneyworld',
		imgurl: 'https://i.imgur.com/HBXTy9G.png'
	},
	{
		question: `"Bazinga!" 👤`,
		answer: 'Sheldon, The Big Bang Theory',
		imgurl: 'https://i.imgur.com/fJfJVDN.png'
	},
	{
		question: `"Betcha can’t eat just one" 🎥`,
		answer: `Lay's`,
		imgurl: 'https://i.imgur.com/2i3gHRk.png'
	},
	{
		question: `"Live in your world. Play in ours." 🎥`,
		answer: 'Playstation',
		imgurl: 'https://i.imgur.com/g87laqt.png'
	},
	{
		question: `"Stupid is as stupid does." 👤`,
		answer: 'Forrest Gump',
		imgurl: 'https://i.imgur.com/bydrM1A.png'
	},
	{
		question: `"That was easy." 🎥`,
		answer: 'Staples',
		imgurl: 'https://i.imgur.com/NzOBgFM.png'
	},
	{
		question: `"The Bionic Redneck" 👤`,
		answer: `"Stone Cold" Steve Austin`,
		imgurl: 'https://i.imgur.com/g1qKGNx.png'
	},
	{
		question: `"Yippee Ki-Yay" 👤`,
		answer: 'John McClane',
		imgurl: 'https://i.imgur.com/LnZL4An.png'
	},
	{
		question: `"When you care enough to send the very best." 🎥`,
		answer: 'Hallmark',
		imgurl: 'https://i.imgur.com/6cdJf2R.png'
	},
	{
		question: `"The power is yours!" 👤`,
		answer: 'Captain Planet',
		imgurl: 'https://i.imgur.com/1Q7BvGa.png'
	},
	{
		question: `"The Refrigerator" 👤`,
		answer: 'William Anthony Perry',
		imgurl: 'https://i.imgur.com/2IJiT0A.png'
	},
	{
		question: `"The Uncola" 🎥`,
		answer: '7-Up',
		imgurl: 'https://i.imgur.com/JM3gqTd.png'
	},
	{
		question: `"Alrighty then" 👤`,
		answer: 'Ace Ventura',
		imgurl: 'https://i.imgur.com/iH1I8EA.gif'
	},
	{
		question: `Happy Friday!`
	}
];

export function load({ params }: { params: { number: string } }) {
	const number = +params.number;
	if (!questions[number]) {
		throw redirect(307, '/');
	}
	return {
		qna: questions[number],
		number: number,
		previous: Math.max(0, number - 1),
		next: Math.min(questions.length - 1, number + 1),
		max: questions.length - 2
	};
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return questions.map((q, i) => ({ number: '' + i }));
}

export const prerender = true;
