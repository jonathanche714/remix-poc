import { json, LoaderFunction } from 'remix';
import { requireUserId } from '~/utils/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request, '/login');
  return json({ status: 200 });
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return <div>This is the home page, check out the links on the left</div>;
}
