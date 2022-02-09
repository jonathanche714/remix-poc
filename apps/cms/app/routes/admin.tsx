import { LinksFunction, LoaderFunction, Outlet } from 'remix';

import { json } from 'remix';
import stylesUrl from '~/styles/admin.css';
import { requireUserId } from '~/utils/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request, '/login');
  return json({ status: 200 });
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Admin() {
  return (
    <div>
      <p>Admin panel</p>
      <Outlet />
    </div>
  );
}
