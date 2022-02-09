import { useEffect, useRef } from 'react';
import type { LinksFunction, ActionFunction } from 'remix';

import { useActionData, redirect, json } from 'remix';
import { createUserSession } from '~/utils/session.server';
import stylesUrl from '~/styles/login/index.css';

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const user = form.get('username');
  const password = form.get('password');

  if (user !== 'hello' || password !== '123') {
    return json({ formError: 'not the correct user' }, { status: 400 });
  }

  return createUserSession(user, '/admin');
};
// Provide stylesheet for this page.
// - https://remix.run/api/conventions#links
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function LoginIndex() {
  const actionData = useActionData();

  return (
    <div>
      <form method="post">
        <label htmlFor="username-input">Username</label>
        <input name="username" type="text" id="username-input" />
        <label htmlFor="password-input">Password</label>
        <input name="password" type="password" id="password-input" />
        {actionData?.formError ? (
          <p role="alert">{actionData?.formError}</p>
        ) : null}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
