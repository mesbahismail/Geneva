import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
	try {
		const { priceId } = await req.json();
		if (!priceId) {
			return NextResponse.json({ error: 'Missing priceId' }, { status: 400 });
		}

		const secretKey = process.env.STRIPE_SECRET_KEY;
		if (!secretKey) {
			return NextResponse.json(
				{ error: 'Stripe is not configured' },
				{ status: 500 }
			);
		}

		const stripe = new Stripe(secretKey);
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'subscription',
			line_items: [
				{
					price: priceId,
					quantity: 1,
				},
			],
			success_url: `${req.nextUrl.origin}/?success=true`,
			cancel_url: `${req.nextUrl.origin}/#pricing?canceled=true`,
		});

		return NextResponse.json({ sessionId: session.id });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return NextResponse.json({ error: message }, { status: 500 });
	}
}
