import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
	IconBrandNodejs,
	IconBrandJavascript,
	IconBrandReact,
	IconBrandDocker,
	IconCloud,
	IconDatabase,
	IconServer,
	IconCode,
	IconTerminal,
	IconSettings,
	IconGitBranch,
} from '@tabler/icons-react';
import Image from 'next/image';

export function FloatingDockDemo() {
	const links = [
		{
			title: 'Node.js',
			icon: <IconBrandNodejs className='h-full w-full text-green-500' />,
			href: '#',
		},
		{
			title: 'Express',
			icon: <IconServer className='h-full w-full text-gray-500' />,
			href: '#',
		},
		{
			title: 'PostgreSQL',
			icon: <IconDatabase className='h-full w-full text-blue-500' />,
			href: '#',
		},
		{
			title: 'Sequelize',
			icon: <IconCode className='h-full w-full text-indigo-500' />,
			href: '#',
		},
		{
			title: 'JavaScript',
			icon: <IconBrandJavascript className='h-full w-full text-yellow-500' />,
			href: '#',
		},
		{
			title: 'React',
			icon: <IconBrandReact className='h-full w-full text-blue-400' />,
			href: '#',
		},
		{
			title: 'Next.js',
			icon: (
				<Image
					src='https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
					width={20}
					height={20}
					alt='Next.js Logo'
				/>
			),
			href: '#',
		},
		{
			title: 'Flask',
			icon: (
				<Image
					src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg'
					width={20}
					height={20}
					alt='Flask Logo'
				/>
			),
			href: '#',
		},
		{
			title: 'Docker',
			icon: <IconBrandDocker className='h-full w-full text-blue-500' />,
			href: '#',
		},
		// {
		// 	title: 'MongoDB',
		// 	icon: (
		// 		<Image
		// 			src='https://www.mongodb.com/assets/images/global/leaf.png'
		// 			width={20}
		// 			height={20}
		// 			alt='MongoDB Logo'
		// 		/>
		// 	),
		// 	href: '#',
		// },
		{
			title: 'AWS',
			icon: <IconCloud className='h-full w-full text-orange-500' />,
			href: '#',
		},
		{
			title: 'DynamoDB',
			icon: <IconDatabase className='h-full w-full text-cyan-500' />,
			href: '#',
		},
		{
			title: 'CI/CD',
			icon: <IconGitBranch className='h-full w-full text-gray-400' />,
			href: '#',
		},
		{
			title: 'Django',
			icon: (
				<Image
					src='https://static.djangoproject.com/img/logos/django-logo-negative.svg'
					width={40}
					height={20}
					alt='Django Logo'
				/>
			),
			href: '#',
		},
		{
			title: 'OpenSearch',
			icon: <IconSettings className='h-full w-full text-purple-500' />,
			href: '#',
		},
	];
	return (
		<div className='flex items-center justify-center h-[15rem] w-full '>
			<FloatingDock
				mobileClassName='translate-y-20' // only for demo, remove for production
				items={links}
			/>
		</div>
	);
}
