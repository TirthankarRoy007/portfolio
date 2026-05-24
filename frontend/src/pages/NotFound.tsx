import { Link } from "react-router-dom";

export const NotFound = () => (
  <section className="section-shell">
    <div className="rounded-md border border-line bg-white p-8 shadow-soft">
      <p className="section-kicker">404</p>
      <h1 className="section-title mt-2">Page not found</h1>
      <Link className="mt-6 inline-flex rounded bg-brand px-5 py-3 text-sm font-semibold text-white" to="/">
        Go home
      </Link>
    </div>
  </section>
);
