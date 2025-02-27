import GenerateVerse from './features/GenerateVerse';

function App() {
	return (
		<div className='min-h-screen flex justify-center items-center flex-col'>
			<h1 className='text-2xl font-bold'>Bible Verse Generator</h1>
			<GenerateVerse />
		</div>
	);
}

export default App;
