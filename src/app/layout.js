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
				{children}
			</body>
		</html>
	);
}
