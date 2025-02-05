'use server';

import { cookies } from "next/headers";

export async function authenticate(_currentState: unknown, formData: FormData) {
  // const session = await getSession(); same to route_hanlders

  try {
    let email = '';
    let password = '';

    formData.forEach((value, key, parent) => {
      if (key == 'email') email = value;
      if (key == 'password') password = value;
    });

    if (email != 'email@example.com' || password != 'password') {
      throw { type: 'CredentialSignIn' };
    }

    handleLogin(email);
  } catch (error) {
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

export async function handleLogin(sessionData) {
  cookies().set('session', '{"email": "teste", "oka": "oka" }', {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
    path: '/'
  });
}

export async function getSession() {
  const session = cookies().get('session')?.value;

  return session;
}