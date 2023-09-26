import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

const questions = [
	{
		imgurl: `${base}/jeopardy/fj.png`
	},
	{
		category: 'The Silver Screen',
		question: `He was the first actor to star in 3 films that won the Oscar for Best Picture: those of 1934, 1935 & 1939`,
		answer: 'Who is Clark Gable?',
		imgurl: `${base}/jeopardy/cg.jpg`
	},
	{
		category: 'DISNEY CHARACTERS',
		question: `In the source material from more than 3 centuries ago, her name was Badr al-Budur, “full moon of full moons”`,
		answer: 'Who is Princess Jasmine?',
		imgurl: `${base}/jeopardy/aladdin.jpg`
	},
	{
		category: '19th CENTURY AMERICANS',
		question: `Demonstrating the dignity & humanity of black Americans, he sat for 160 known photographs, the most of any American in the 19th century`,
		answer: 'Who is FREDERICK DOUGLASS?',
		imgurl: `${base}/jeopardy/fd.jpg`
	},
	{
		category: 'TECH HISTORY',
		question: `For about 20 years after its invention, it had few practical uses; then suddenly it revolutionized grocery stores & home audio`,
		answer: 'What is the laser?',
		imgurl: `${base}/jeopardy/800.png`
	},
	{
		category: 'TELEVISION HISTORY',
		question: `In the opening scene of its July 21, 1969 pilot episode, a man carves the letter D into wet cement`,
		answer: 'What is SESAME STREET?',
		imgurl: `${base}/jeopardy/ss.jpg`
	},
	{
		imgurl: `${base}/jeopardy/hf.png`
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
