import routes from "@/data/routes";
import Link from 'next/link';
import Hamburger from "./hamburger";

const Navigation = () => {
  // Need to rewrite with better way
  // Idea: combine navbar and toggleNavbar together, like
  // <nav>...</nav><nav>...</nav> -> <nav>...</nav>
  return (
    <header className="bg-slate-200 flex justify-between p-5">
      <h1>
        {routes.filter((route) => route.index).map(route => (
          <Link href={route.path} key={route.label}>{route.label}</Link>
        ))}
      </h1>
      <nav className="hidden sm:block">
        <ul className="flex gap-5">
          {routes.filter((route) => !route.index).map(route => (
            <li key={route.label}>
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Hamburger/>
    </header>
  )
}

export default Navigation;