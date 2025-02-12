import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Use the OAuth2 library provided by Google
const { OAuth2 } = google.auth;

export async function POST(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Only POST requests are allowed' });
	}
	const requestBody = await req.text(); // Get the raw text from the stream
	const parsedBody = JSON.parse(requestBody);
	const { email, subject, message } = parsedBody;

	// Set up OAuth2 client
	const oauth2Client = new OAuth2(
		process.env.CLIENT_ID, // Your OAuth2 Client ID
		process.env.CLIENT_SECRET, // Your OAuth2 Client Secret
		'https://developers.google.com/oauthplayground' // Redirect URL for OAuth2
	);

	// Set the refresh token to get a valid access token
	oauth2Client.setCredentials({
		refresh_token: process.env.REFRESH_TOKEN, // Your Google Refresh Token
	});

	// Get access token using the refresh token
	const accessToken = await oauth2Client.getAccessToken();

	// Create a transporter using OAuth2
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.EMAIL, // Your email address
			clientId: process.env.CLIENT_ID, // Your OAuth2 Client ID
			clientSecret: process.env.CLIENT_SECRET, // Your OAuth2 Client Secret
			refreshToken: process.env.REFRESH_TOKEN, // Your Refresh Token
			accessToken: accessToken.token, // The access token
		},
	});

	const mailOptions = {
		from: process.env.EMAIL, // Sender email address
		to: email, // Recipient email address
		subject: subject,
		text: message, // Plain text message
		html: `<p>${message}</p>`, // HTML message
	};

	try {
		// Send the email
		await transporter.sendMail(mailOptions);
		return new Response(
			JSON.stringify({ success: true, message: 'Email sent!' }),
			{
				status: 200,
			}
		);
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(
			JSON.stringify({ success: false, message: 'Error sending email.' }),
			{
				status: 500,
			}
		);
	}
}
