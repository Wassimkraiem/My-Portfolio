import { Link } from 'lucide-react';
import React from 'react';

const Footer = () => {
	return (
		<footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
			<div className=' container p-12 flex justify-between'>
				<span className='mx-20 text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-radial from-primary-400 to-secondary-500 font-semibold'>
					Kr
				</span>
				<p className='text-slate-600'>All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
