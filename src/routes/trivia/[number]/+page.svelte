<script lang="ts">
	import { browser } from '$app/environment';
	import QuestionAndImage from '../../components/QuestionAndImage.svelte';
	export let data;
	const qna = [
		{
			blanks1: '_ _ _ K _ _',
			blanks2: 'C _ _ K _ _',
			clue: 'Delicious file',
			answer: 'C O O K I E',
			img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.simplemost.com%2Fwp-content%2Fuploads%2F2016%2F08%2Fcookie-monster-favorite-cookies.jpg&f=1&nofb=1&ipt=3914c77ce9f1a5d4fa0a416d7387f2dbfa87f6cc59363ebb3397f82ba08095fe&ipo=images'
		},
		{
			blanks1: 'C _ _ _ _',
			blanks2: 'C _ C _ _',
			clue: 'Fast storage',
			answer: 'C A C H E',
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.techieindoor.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fredis_img-2.jpg&f=1&nofb=1&ipt=231df74528eaa1ccc547646fae389aef84e600d262adf52bcf63b4ca96ea54c6&ipo=images'
		},
		{
			blanks1: '_ _ _ _ X',
			blanks2: '_ _ _ U X',
			clue: 'Operating system',
			answer: 'L I N U X',
			img: 'https://www.binarymove.com/wp-content/uploads/2017/04/linux.png'
		},
		{
			blanks1: 'F _ _ _ _ _ _ _',
			blanks2: 'F _ _ _ W _ _ _',
			clue: 'Networking rules',
			answer: 'F I R E W A L L',
			img: 'https://images.techhive.com/images/article/2015/05/firewall_thinkstock-100583207-large.jpg'
		},
		{
			blanks1: '_ _ J _ _ _ _ _',
			blanks2: 'D _ J _ _ _ _ _',
			clue: 'Best path',
			answer: 'D I J K S T R A',
			img: 'https://i.ytimg.com/vi/dS1Di2ZHl4k/maxresdefault.jpg'
		},
		{
			blanks1: '_ _ E _ _',
			blanks2: '_ U E _ _',
			clue: 'Messages, waiting',
			answer: 'Q U E U E',
			img: 'https://www.baeldung.com/wp-content/uploads/sites/4/2023/02/marble-publish.png'
		},
		{
			blanks1: '_ _ _ _ _ _ A',
			blanks2: '_ _ _ _ _ N A',
			clue: 'User description',
			answer: 'P E R S O N A',
			img: 'https://media.discordapp.net/attachments/1030661591638745179/1130136990755586068/oa998_user_experience_persona_d2a886bb-65c9-413c-b618-611393dcefd2.png?width=1206&height=1206'
		},
		{
			blanks1: '_ _ _ _ W _ _ _',
			blanks2: '_ _ _ S W _ _ _',
			clue: '1-factor authentication',
			answer: 'P A S S W O R D',
			img: 'https://img.thrfun.com/img/214/251/passwords_x2.jpg'
		},
		{
			blanks1: 'W _ _ _ _ _ _ _ _',
			blanks2: 'W _ _ _ R _ _ _ _',
			clue: 'In depth planning',
			answer: 'W A T E R F A L L',
			img: 'https://www.wallpaperup.com/uploads/wallpapers/2015/05/09/682166/d5f82ee0fba5fb44dd97d2f8c832fe4e.jpg'
		}
	];

	let o: (typeof qna)[number];
	$: {
		if (qna[+data.params.number]) {
			o = qna[+data.params.number];
		}
	}

	if (browser) {
		const next = Math.min(qna.length - 1, +data.params.number + 1);
		const prev = Math.max(0, +data.params.number - 1);
		document.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight') {
				window.location.pathname = `/svelte-slideshow/trivia/${next}`;
			} else if (e.key === 'ArrowLeft') {
				window.location.pathname = `/svelte-slideshow/trivia/${prev}`;
			}
		});
	}
</script>

{#if o}
	<QuestionAndImage {...o} />
{/if}
