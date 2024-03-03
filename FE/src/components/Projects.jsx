import React from 'react';
import people from './data/project.js';

export default function Example() {
	return (
		<div className='container mx-auto px-8 bg-white flex flex-col h-screen'>
			<div className='bg-white py-12'>
				<h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
					Explore a thousand of projects and pathway to success
				</h1>
			</div>
			<div className='container mx-auto px-5 pb-8'>
				<ul
					role='list'
					className='gap-4 divide-y divide-gray-100 pb-6'
				>
					{people.map((person) => (
						<li
							key={person.email}
							className='flex justify-between gap-x-6 py-8 border-solide border-2 px-4 hover:bg-gray-50 transition-colors duration-200 ease-in-out'
						>
							<div className='flex min-w-0 gap-x-4'>
								<img
									className='h-12 w-12 flex-none rounded-full bg-gray-50'
									src={person.imageUrl}
									alt=''
								/>
								<div className='min-w-0 flex-auto'>
									<p className='text-sm font-semibold leading-6 text-gray-900'>
										{person.name}
									</p>
									<p className='mt-1 truncate text-xs leading-5 text-gray-500'>
										{person.languages}
									</p>
								</div>
							</div>
							<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
								<p className='text-sm leading-6 text-gray-900'>
									{person.field}
								</p>
								{person.lastSeen ? (
									<p className='mt-1 text-xs leading-5 text-gray-500'>
										Last seen {person.date}
									</p>
								) : (
									<div className='mt-1 flex items-center gap-x-1.5'>
										<p className='text-xs leading-5 text-gray-500'>
											{person.level === 'Easy' ? (
												<span className='text-green-500'>
													{person.level}
												</span>
											) : person.level === 'Medium' ? (
												<span className='text-yellow-400'>
													{person.level}
												</span>
											) : (
												<span className='text-red-500'>
													{person.level}
												</span>
											)}
										</p>
									</div>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
