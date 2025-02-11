'use client';

import { authenticate } from '@/app/libs/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { signOut } from 'next-auth/react';

function LoginButton() {
  const { pending } = useFormStatus();

  const handleClick = (event) => {
    if (pending) {
      event.preventDefault();
    }
  }

  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>
      login
    </button>
  );
}

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div>
      <form action={dispatch}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
        <LoginButton />
        <button onClick={() => signOut()}>Logout</button>
      </form>
    </div>
  );
}