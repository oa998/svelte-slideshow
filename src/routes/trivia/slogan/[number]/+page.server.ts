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
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/4%20-%20HBXTy9G.png'
	},
	{
		question: `"Bazinga!" 👤`,
		answer: 'Sheldon, The Big Bang Theory',
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/7%20-%20fJfJVDN.png'
	},
	{
		question: `"Betcha can’t eat just one" 🎥`,
		answer: `Lay's`,
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/1%20-%202i3gHRk.png'
	},
	{
		question: `"Live in your world. Play in ours." 🎥`,
		answer: 'Playstation',
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/3%20-%20g87laqt.png'
	},
	{
		question: `"Stupid is as stupid does." 👤`,
		answer: 'Forrest Gump',
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/12%20-%20bydrM1A.png'
	},
	{
		question: `"That was easy." 🎥`,
		answer: 'Staples',
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/6%20-%20NzOBgFM.png'
	},
	{
		question: `"The Bionic Redneck" 👤`,
		answer: `"Stone Cold" Steve Austin`,
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/11%20-%20g1qKGNx.png'
	},
	{
		question: `"Yippee Ki-Yay" 👤`,
		answer: 'John McClane',
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/13%20-%20LnZL4An.png'
	},
	{
		question: `"When you care enough to send the very best." 🎥`,
		answer: 'Hallmark',
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/5%20-%206cdJf2R.png'
	},
	{
		question: `"The power is yours!" 👤`,
		answer: 'Captain Planet',
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/8%20-%201Q7BvGa.png'
	},
	{
		question: `"The Refrigerator" 👤`,
		answer: 'William Anthony Perry',
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/10%20-%202IJiT0A.png'
	},
	{
		question: `"The Uncola" 🎥`,
		answer: '7-Up',
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/2%20-%20JM3gqTd.png'
	},
	{
		question: `"Alrighty then" 👤`,
		answer: 'Ace Ventura',
		imgurl: 'https://storage.googleapis.com/photos_and_stuff/9%20-%20iH1I8EA.gif'
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
