'use client';
import React, { useState, useRef } from 'react';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import { ThreeDCardDemo } from './ThreeDCardDemo';
import { SparklesCore } from '@/components/ui/sparkles';
const projectsData = [
	{
		id: 1,
		title: 'Next js  Portfolio Website',
		description:
			'I built my Portfolio website with Nextjs tailwindcss and Shadcn',
		stack: 'Nextjs tailwindcss Shadcn',
		image: '/images/projects/1.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 2,
		title: 'The Wild oasis',
		description:
			'Cozy yet luxurious cabins, for you to enjoy with you loved ones',
		stack: 'Nextjs tailwindcss Supabase',
		image: '/images/projects/2.png',
		tag: ['All', 'Web'],
		gitUrl: '/https://github.com/Wassimkraiem/the-wild-next',
		previewUrl: 'https://the-wild-next.vercel.app/',
	},
	{
		id: 3,
		title: 'Advanced Video Search Api',
		description:
			'I built this api in my internship to help with the slow search of some saas',
		stack: 'Flask Dynamodb Opensearch ',
		image: '/images/projects/3.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState('All');
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id='projects'>
			<h2 className='text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-8'>
				My Projects
			</h2>
			<div className='text-white flex flex-row justify-center items-center gap-2 py-6'></div>
			<ul
				ref={ref}
				className='grid md:grid-cols-1  xl:grid-cols-2 2xl:grid-cols-3 2xl:gap-10 gap-2 md:gap-2 lg:gap-2'
			>
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial='initial'
						animate={isInView ? 'animate' : 'initial'}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ThreeDCardDemo
							title={project.title}
							description={project.description}
							stack={project.stack}
							image={project.image}
							link={project.previewUrl}
							git={project.gitUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
