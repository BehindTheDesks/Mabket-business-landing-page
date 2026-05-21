import { NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabase';

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  await supabase.from('waitlist').delete().eq('email', decodeURIComponent(email));

  return NextResponse.json({ success: true });
}
