'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { handleSignIn } from '@/app/actions/auth.actions';

export function SocialAuthForm() {
  const buttonClass =
    'background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 cursor-pointer';

  const onSignIn = async (provider: 'github' | 'google') => {
    console.log('onSignIn', provider);
    try {
      await handleSignIn(provider);
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : 'An error occurred during sign in');
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => onSignIn('github')}>
        <Image
          src="/icons/github.svg"
          alt="GitHub Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className={buttonClass} onClick={() => onSignIn('google')}>
        <Image src="/icons/google.svg" alt="Google Logo" width={20} height={20} className="mr-2.5 object-contain" />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
}
