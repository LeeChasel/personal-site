'use client';

import { Disclosure } from '@headlessui/react'; 
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import routes from "@/data/routes";
import Link from 'next/link';

const Hamburger = () => {
  // Need add animation to icon and panel
  return (
    <Disclosure as='nav' className="sm:hidden">
      {({ open }) => (
        <>
          <Disclosure.Button className="pt-1">
            {!open ? <Bars3Icon className='w-5 h-5'/> : <XMarkIcon className='w-5 h-5'/>}
          </Disclosure.Button>
          <Disclosure.Panel as="ul" className="flex flex-col fixed top-12 right-0 w-1/2 h-full p-3 bg-slate-200 border-l border-gray-300">
            {routes.filter((route) => !route.index).map(route => (  
              <li key={route.label}>
                <Disclosure.Button as={Link} href={route.path} className="flex items-center pl-2 py-3 hover:bg-slate-300 active:bg-slate-400 text-xl">
                  {route.label}
                </Disclosure.Button>
                <div className='border-b border-gray-400'/>
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Hamburger;