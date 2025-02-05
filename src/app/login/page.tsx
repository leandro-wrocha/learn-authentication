'use client';

import { authenticate } from '@/app/libs/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { signIn } from '../libs/auth';

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
      <form action={async (formData) => await signIn('credentials', formData)}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
        <LoginButton />
      </form>
    </div>
  );
}