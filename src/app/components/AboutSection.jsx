'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { FloatingDockDemo } from './FloatingDockDemo';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className=' pl-2 flex gap-2 flex-wrap'>
				<li>Node.js</li>
				<li>Express</li>
				<li>PostgreSQL</li>
				<li>Sequelize</li>
				<li>JavaScript</li>
				<li>React</li>
				<li>Nextjs</li>
				<li>Flask</li>
				<li>Docker</li>
				<li>Mongodb</li>
				<li>AWS</li>
				<li>Dynamodb</li>
				<li>CI/CD</li>
				<li>Django</li>
				<li>Opensearch</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className='list-disc pl-2'>
				<li>
					Software engineering at Université de Sousse Institut Supérieur des
					Sciences Appliquées et de Technologie de Sousse
				</li>
			</ul>
		),
	},
	{
		title: 'Certifications',
		id: 'certifications',
		content: (
			<ul className='list-disc pl-2'>
				<li>CKA kubernetes administrator</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className='text-white' id='about'>
			<div className='md:grid md:grid-cols-2 md gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image src='/images/about-image.png' width={500} height={500} />
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
					<p className='text-base md:text-sm lg:text-lg'>
						I am a full stack web developer with a passion for creating
						interactive and responsive web applications. I have experience
						working with JavaScript, React, Nextjs ,Redux, Node.js, Express,
						PostgreSQL, Flask, Mongodb, Dynamodb, Opensearch, Django, Aws, CI/CD
						Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
						looking to expand my knowledge and skill set. I am a team player and
						I am excited to work with others to create amazing applications.
					</p>
					<div className='flex flex-row justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}
						>
							{' '}
							Skills{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}
						>
							{' '}
							Education{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('certifications')}
							active={tab === 'certifications'}
						>
							{' '}
							Certifications{' '}
						</TabButton>
					</div>
					<div className='mt-8'>
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
					{/* <FloatingDockDemo /> */}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
