import { useState } from 'react';
import { verses } from '../verses/hopeful_verses.js';

export default function GenerateVerse() {
	const [verse, setVerse] = useState({});
	const getRandomVerse = () => {
		const randomIndex = Math.floor(Math.random() * verses.length);
		const verse = verses[randomIndex];
		setVerse({reference: verse.reference, text: verse.text});
	};

	return (
		<>
			<p className='mt-10 stroke-current'>{verse.reference}</p>
			<h2 className='mb-10 max-w-1/2 text-center'>{verse.text}</h2>
			<button
				className='bg-transparent border-[#f3c199] border-1 rounded-md mt-2'
				onClick={getRandomVerse}
			>
				Generate Verse
			</button>
		</>
	);
}
