import { Link } from 'remix';

export const Aside = () => {
  return (
    <aside className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin/landing-page">Landing Page</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </aside>
  );
};
