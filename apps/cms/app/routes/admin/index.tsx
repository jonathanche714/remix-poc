import { LoaderFunction, redirect } from 'remix';
import { useLoaderData, Link, useCatch } from 'remix';
import { requireUserId } from '~/utils/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  return await requireUserId(request, '/login');
};

export default function JokesIndexRoute() {
  return (
    <div>
      <p>Index page</p>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div className="error-container">There is nothing to display.</div>;
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies.</div>;
}
