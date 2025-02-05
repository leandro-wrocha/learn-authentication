'use server';

import { signIn } from '@/app/libs/auth';
import { isRedirectError } from 'next/dist/client/components/redirect';

export const authenticate = async (_currentState: string | undefined, formData: FormData) => {
  try {
    return await signIn('credentials', formData);
  } catch (error) {
    console.log(error.message, error.type);
    if (error) {
      switch (error.type) {
        case 'CredentialSignIn':
          return 'Invalid credentials';
        default:
          return 'Something went wrong'; 
      }
    }
    console.log(error.message, error.type);
    throw error;
  }
}