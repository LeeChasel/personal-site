'use client';

import { Disclosure } from '@headlessui/react'; 
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import routes from "@/data/routes";
import Link from 'next/link';

const Hamburger = () => {
  return (
    <Disclosure as='nav' className="sm:hidden">
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2">
            {!open ? <Bars3Icon className='w-6'/> : <XMarkIcon className='w-6'/>}
          </Disclosure.Button>
          <Disclosure.Panel as="ul">
            {routes.filter((route) => !route.index).map(route => (            
              <li key={route.label}>
                <Disclosure.Button as={Link} href={route.path}>
                  {route.label}
                </Disclosure.Button>
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Hamburger;