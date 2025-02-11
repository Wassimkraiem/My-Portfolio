'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card';
import Link from 'next/link';

export function ThreeDCardDemo({ title, description, image, link }) {
	return (
		<CardContainer className='inter-var'>
			<CardBody className='bg-[#181818] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
				<CardItem
					translateZ='50'
					className='text-xl font-bold text-neutral-200 dark:text-white'
				>
					{title}
				</CardItem>
				<CardItem
					as='p'
					translateZ='60'
					className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
				>
					{description}
				</CardItem>
				<CardItem translateZ='100' className='w-full mt-4'>
					<Image
						src={image}
						height='1000'
						width='1000'
						className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
						alt='thumbnail'
					/>
				</CardItem>
				<div className='flex justify-between items-center mt-20'>
					<CardItem
						translateZ={20}
						as={Link}
						href={`${link}`}
						target='__blank'
						className='px-4 py-2 text-white rounded-xl text-xs font-normal '
					>
						Try now →
					</CardItem>
					<CardItem
						translateZ={20}
						as='button'
						className='px-4 py-2 rounded-xl  bg-primary-400  dark:bg-white dark:text-black text-white text-xs font-bold'
					>
						Use it
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
