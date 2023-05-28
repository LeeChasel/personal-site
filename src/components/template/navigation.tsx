import routes from "@/data/routes";
import Link from 'next/link';
import Hamburger from "./hamburger";

const Navigation = () => {
  // Need to rewrite with better way
  // Idea: combine navbar and toggleNavbar together, like
  // <nav>...</nav><nav>...</nav> -> <nav>...</nav>
  return (
    <header className="sticky top-0 w-full bg-slate-200 flex justify-between items-center h-12 px-5 sm:h-16 border-b border-gray-300">
      <h1>
        {routes.filter((route) => route.index).map(route => (
          <Link href={route.path} key={route.label} className="text-xl">{route.label}</Link>
        ))}
      </h1>
      <nav className="hidden sm:block sm:h-full sm:py-2">
        <ul className="flex h-full">
          {routes.filter((route) => !route.index).map(route => (
            <li key={route.label} className="h-full hover:bg-slate-300 active:bg-slate-400 sm:rounded-lg">
                <Link href={route.path} className="flex items-center h-full px-2 text-lg">{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Hamburger/>
    </header>
  )
}

export default Navigation;