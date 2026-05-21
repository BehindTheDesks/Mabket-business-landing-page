import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { supabase } from '../../utils/supabase';

export const metadata: Metadata = {
  title: 'Unsubscribed | mabket',
  description: 'You have been removed from the mabket waitlist.',
};

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;

  let success = false;

  if (email) {
    const { error } = await supabase
      .from('waitlist')
      .delete()
      .eq('email', decodeURIComponent(email));

    success = !error;
  }

  return (
    <div className="min-h-screen bg-[var(--color-platinum)] py-12 px-4 sm:px-6 relative overflow-hidden font-sans text-[var(--color-carbon-black)] flex items-center justify-center">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[var(--color-cool-horizon)] blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--color-amber-flame)] blur-3xl opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">
        <div className="w-full bg-white p-8 sm:p-12 rounded-[2rem] border-4 border-[var(--color-carbon-black)] shadow-[8px_8px_0px_rgba(26,26,26,1)] sm:shadow-[16px_16px_0px_rgba(26,26,26,1)]">
          {success ? (
            <>
              <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                You&apos;re out.
              </h1>
              <p className="text-lg font-medium opacity-70 mb-8">
                {email ? decodeURIComponent(email) : 'Your email'} has been removed from the mabket waitlist. No more emails from us.
              </p>
              <p className="text-base font-medium opacity-50 mb-8">
                Changed your mind? You can always rejoin from the homepage.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                Hmm.
              </h1>
              <p className="text-lg font-medium opacity-70 mb-8">
                {email
                  ? "We couldn't find that email on the waitlist. It may have already been removed."
                  : 'No email address was provided.'}
              </p>
            </>
          )}

          <Link
            href="/"
            className="inline-block font-bold text-sm underline decoration-4 decoration-[var(--color-sapphire)] underline-offset-4 hover:text-[var(--color-sapphire)] transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
