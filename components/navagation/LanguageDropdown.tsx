
"use client"

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function LanguageDropDown(): JSX.Element {

  return (
    <Menu as="div" className="relative inline-block text-left  ">
      <div>
        <Menu.Button className="inline-flex justify-between items-center w-full gap-x-1 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <img
            src="/img/flag_en.png" alt="English" loading='lazy'
          />
          <span>English</span>
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item >
              {({ active }) => (
                <Link
                  href="/website/lang/en?r=/selfservice"
                  data-url_code="en"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    ' px-4 py-2 text-sm inline-flex flex-row gap-2'
                  )}
                >
                  <img src="/img/flag_en.png" alt="English" />
                  <span>English</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/website/lang/fr?r=/selfservice"
                  data-url_code="fr"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    ' px-4 py-2 text-sm inline-flex flex-row gap-2'
                  )}
                >
                  <img src="/img/FR.png" alt="Français"  />
                  <span>Français</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/website/lang/tl?r=/selfservice"
                  data-url_code="tl"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    ' px-4 py-2 text-sm inline-flex flex-row gap-2'
                  )}
                >
                  <img
                    src="/img/flag_ph.png" alt="Filipino" />
                  <span>Filipino</span>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}