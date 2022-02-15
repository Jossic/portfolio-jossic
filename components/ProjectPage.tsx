import userData, { images } from 'constants/data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
// import { Project } from 'types';

const ProjectPage = () => {
	const router = useRouter();
	const project = userData.projects.filter(
		(proj) => proj.slug === router.query.slug
	);
	const {
		title,
		description,
		type,
		technos,
		descriptionBack,
		descriptionFront,
	} = project[0];
	return (
		<section className='bg-white dark:bg-gray-800'>
			<div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
				<h1 className=' text-5xl md:text-8xl font-bold py-28 text-center md:text-left'>
					{title}
				</h1>
			</div>
			{/* Grid starts here */}
			<div className='bg-[#F1F1F1] dark:bg-gray-900'>
				<div className='max-w-6xl mx-auto py-20 pb-40'>
					<h2 className='text-3xl md:text-4xl font-bold text-center md:text-left'>
						Les technos
					</h2>
					<div className='flex flex-1 flex-row flex-wrap mt-8'>
						{technos.map((tech, index) => (
							<div className='h-16 w-16 mx-3 my-3' key={index}>
								<Image
									src={tech}
									alt={`techIcon${index}`}
									height='90'
									width='90'
								/>
							</div>
						))}
						{description}
						{type}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectPage;

// const ProjectCard = ({ title, link, imgUrl, number }: Project) => {
// 	return (
// 		<a href={link} className='w-full block shadow-2xl'>
// 			<div className='relative overflow-hidden'>
// 				<div className='h-72 object-cover'>
// 					<div className='transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full'>
// 						<Image
// 							src={imgUrl}
// 							alt='portfolio'
// 							height='288'
// 							width='552'
// 							layout='responsive'
// 						/>
// 					</div>
// 				</div>
// 				<h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
// 					{title}
// 				</h1>
// 				<h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>
// 					{number.length === 1 ? '0' + number : number}
// 				</h1>
// 			</div>
// 		</a>
// 	);
// };
