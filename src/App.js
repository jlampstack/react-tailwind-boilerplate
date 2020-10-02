import React from 'react';

function App() {
	return (
		<div className='h-screen bg-c1-600 flex justify-center items-center'>
			<div className='w-64 h-64 border-2 border-c1-700 flex flex-col'>
				<div className='flex flex-col h-full justify-center'>
					<h1 className='text-center text-c1-800 leading-tight font-primary font-medium text-3xl'>
						REACT
						<br />
						TAILWIND
						<br />
						BOILERPLATE
					</h1>
					<div className='flex flex-col pt-4'>
						<div className='flex self-center'>
							<div className='w-6 h-6 bg-c1-100'></div>
							<div className='w-6 h-6 bg-c1-200'></div>
							<div className='w-6 h-6 bg-c1-300'></div>
							<div className='w-6 h-6 bg-c1-400'></div>
							<div className='w-6 h-6 bg-c1-500'></div>
							<div className='w-6 h-6 bg-c1-600'></div>
							<div className='w-6 h-6 bg-c1-700'></div>
							<div className='w-6 h-6 bg-c1-800'></div>
							<div className='w-6 h-6 bg-c1-900'></div>
						</div>
						<div className='flex self-center'>
							<div className='w-6 h-6 bg-c2-100'></div>
							<div className='w-6 h-6 bg-c2-200'></div>
							<div className='w-6 h-6 bg-c2-300'></div>
							<div className='w-6 h-6 bg-c2-400'></div>
							<div className='w-6 h-6 bg-c2-500'></div>
							<div className='w-6 h-6 bg-c2-600'></div>
							<div className='w-6 h-6 bg-c2-700'></div>
							<div className='w-6 h-6 bg-c2-800'></div>
							<div className='w-6 h-6 bg-c2-900'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
