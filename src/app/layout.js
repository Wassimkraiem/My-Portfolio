import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { SparklesCore } from '@/components/ui/sparkles';

export const metadata = {
	title: 'My Personal Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='w-full absolute inset-0 h-screen'>
					<SparklesCore
						id='tsparticlesfullpage'
						background='transparent'
						minSize={0.6}
						maxSize={1.4}
						particleDensity={100}
						className='w-full h-full'
						particleColor='#FFFFFF'
					/>
				</div>
				{children}
			</body>
		</html>
	);
}
