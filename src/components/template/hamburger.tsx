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
          <Disclosure.Panel as="ul" className="flex flex-col gap-4 fixed top-12 right-0 w-1/2 h-full p-5 bg-slate-200">
            {routes.filter((route) => !route.index).map(route => (  
              <li key={route.label} className='w-full flex flex-col gap-3'>
                <Disclosure.Button as={Link} href={route.path} className="w-full text-xl pl-2">
                  {route.label}
                </Disclosure.Button>
                <div className=' border-b-2 border-gray-300'/>
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Hamburger;