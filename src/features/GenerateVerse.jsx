import { useState } from 'react';
import { verses } from '../verses/hopeful_verses.js';

export default function GenerateVerse() {
	const [verse, setVerse] = useState({reference: verses[0].reference, text: verses[0].text});
	const getRandomVerse = () => {
		const randomIndex = Math.floor(Math.random() * verses.length);
		const verse = verses[randomIndex];
		setVerse({reference: verse.reference, text: verse.text});
	};

	return (
		<>
			<p className='mt-10 pb-1 text-2xl font-black text-stroke'>{verse.reference}</p>
			<h2 className='mb-10 max-w-1/2 text-center min-h-28'>{verse.text}</h2>
			<button
				className='bg-transparent border-[#f3c199] border-1 rounded-md'
				onClick={getRandomVerse}
			>
				Generate Verse
			</button>
		</>
	);
}
