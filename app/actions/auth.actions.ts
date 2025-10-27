'use server';

import { signIn } from '@/auth';
import ROUTES from '@/constants/routes';

export async function handleSignIn(provider: 'github' | 'google') {
  try {
    await signIn(provider, {
      redirectTo: ROUTES.HOME,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
