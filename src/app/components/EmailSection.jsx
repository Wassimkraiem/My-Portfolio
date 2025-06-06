'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedInIcon from '../../../public/linkedin-icon.svg';

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const [error, setError] = useState(null); // For handling error messages
	const [loading, setLoading] = useState(false); // For handling loading state

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};
		const JSONdata = JSON.stringify(data);
		const endpoint = '/api/send';

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		};
		setLoading(true); // Start loading

		try {
			const response = await fetch(endpoint, options);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const resData = await response.json();

			if (resData.success) {
				setEmailSubmitted(true); // Update state to show success message
				e.target.reset(); // Reset form fields
				setTimeout(() => setEmailSubmitted(false), 5000); // Reset after 5 seconds
			} else {
				setError('Failed to send email. Please try again later.');
			}
		} catch (error) {
			console.error('Error sending email:', error);
			setError('Something went wrong. Please try again later.');
		} finally {
			setLoading(false); // End loading
		}
	};

	return (
		<section
			id='contact'
			className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
		>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
			<div className='z-10'>
				<h5 className='text-xl font-bold text-white my-2'>Let s Connect</h5>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>
					I m currently looking for new opportunities, my inbox is always open.
					Whether you have a question or just want to say hi, I ll try my best
					to get back to you!
				</p>
				<div className='socials flex flex-row gap-2'>
					<Link
						href='https://github.com/Wassimkraiem'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image src={GithubIcon} alt='Github Icon' />
					</Link>
					<Link
						href='https://www.linkedin.com/in/kraiem-wassim-0b19b5239'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image src={LinkedInIcon} alt='Linkedin Icon' />
					</Link>
				</div>
			</div>
			<div>
				{emailSubmitted ? (
					<p className='text-3xl text-primary-500 mt-2'>
						Email sent successfully!
					</p>
				) : (
					<form className='flex flex-col' onSubmit={handleSubmit}>
						<div className='mb-6'>
							<label
								htmlFor='email'
								className='text-white block mb-2 text-sm font-medium'
							>
								Your email
							</label>
							<input
								name='email'
								type='email'
								id='email'
								required
								className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
								placeholder='wassim@gmail.com'
							/>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='subject'
								className='text-white block text-sm mb-2 font-medium'
							>
								Subject
							</label>
							<input
								name='subject'
								type='text'
								id='subject'
								required
								className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
								placeholder='Just saying hi'
							/>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='message'
								className='text-white block text-sm mb-2 font-medium'
							>
								Message
							</label>
							<textarea
								name='message'
								id='message'
								required
								className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
								placeholder="Let's talk about..."
							/>
						</div>
						{error && <p className='text-red-500 text-sm'>{error}</p>}{' '}
						{/* Error message */}
						<button
							type='submit'
							className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
							disabled={loading} // Disable button while loading
						>
							{loading ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				)}
			</div>
		</section>
	);
};

export default EmailSection;
