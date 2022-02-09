import { LoaderFunction, redirect } from 'remix';
import { useLoaderData, Link, useCatch } from 'remix';
import { requireUserId } from '~/utils/session.server';

export default function LandingPage() {
  return (
    <div>
      <p>Here's a landing page</p>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <div className="error-container">There are no jokes to display.</div>
    );
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies.</div>;
}
