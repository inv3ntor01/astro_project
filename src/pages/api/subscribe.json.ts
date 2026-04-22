import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();
		const { email } = body;

		if (!email || !email.includes('@')) {
			return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// Simulate database delay
		await new Promise(resolve => setTimeout(resolve, 800));

		// Here you would typically save to a database or call a newsletter service (e.g., Mailchimp, Resend)
		console.log(`New subscription: ${email}`);

		return new Response(JSON.stringify({ message: 'Success! You are now subscribed.' }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: 'Internal server error.' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
