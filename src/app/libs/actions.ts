'use server';

import { signIn } from '@/auth';

export const authenticate = async (_currentState: string | undefined, formData: FormData) => {
  try {
    return await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error;
    }

    console.log('error action', error);

    if (error) {
      switch (error.type) {
        case 'CredentialSignIn':
          return 'Invalid credentials';
        default:
          return 'Something went wrong'; 
      }
    }
    
    throw error;
  }
}