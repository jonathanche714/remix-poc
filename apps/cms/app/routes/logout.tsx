import type { LoaderFunction } from 'remix';
import { logout } from '~/utils/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  // doesn't update the header though, maybe because of it being a nested route
  return logout(request);
};
