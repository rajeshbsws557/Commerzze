'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ReactNode } from 'react';

// Using a public test key from Stripe docs
// In a real app, this would be an env variable
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function PaymentProvider({ children }: { children: ReactNode }) {
    const options = {
        mode: 'payment' as const,
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
            theme: 'stripe' as const,
            variables: {
                colorPrimary: '#f85606',
            },
        },
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            {children}
        </Elements>
    );
}
