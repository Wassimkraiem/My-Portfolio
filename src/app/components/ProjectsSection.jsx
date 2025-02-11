'use client';
import React, { useState, useRef } from 'react';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import { ThreeDCardDemo } from './ThreeDCardDemo';
const projectsData = [
	{
		id: 1,
		title: 'React Portfolio Website',
		description: 'My personal portfolio',
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
		image: '/images/projects/2.png',
		tag: ['All', 'Web'],
		gitUrl: '/https://github.com/Wassimkraiem/the-wild-next',
		previewUrl: 'https://the-wild-next.vercel.app/',
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
			<h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
				My Projects
			</h2>
			<div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
				<ProjectTag
					onClick={handleTagChange}
					name='All'
					isSelected={tag === 'All'}
				/>
			</div>
			<ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
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
							image={project.image}
							link={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
