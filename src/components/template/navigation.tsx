import routes from "@/data/routes";
import Link from 'next/link';

const Navigation = () => {
  return (
    <header className="bg-slate-200 flex justify-between p-5">
      <h1>
        {/* Rewrite with better way */}
        {routes.filter((route) => route.index).map(route => (
          <Link href={route.path} key={route.label}>{route.label}</Link>
        ))}
      </h1>
      <nav>
        <ul className="flex gap-5 divide-y">
          {routes.filter((route) => !route.index).map(route => (
            <li key={route.label}>
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;