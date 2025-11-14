import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>My Application</h1>
        <nav>{/* Navigation links */}</nav>
      </header>
      <main>
        {/* Child routes will be rendered here */}
        <Outlet />
      </main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
}
