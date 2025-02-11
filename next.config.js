/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'images.unsplash.com',
			'assets.aceternity.com',
			'www.mongodb.com',
			'upload.wikimedia.org',
			'static.djangoproject.com',
		],
	},
	api: {
		bodyParser: true, // This is default, but explicitly enabling can solve issues
	},
};

module.exports = nextConfig;
