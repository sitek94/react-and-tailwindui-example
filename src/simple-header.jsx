import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

export default function SimpleHeader() {
  return (
    <Popover className="fixed z-40 inset-x-0 bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10 px-4 sm:px-6">
              <div className="flex justify-start">
                <Logo />
              </div>

              <div className="-mr-2 -my-2 md:hidden">
                {open ? (
                  <IconButton srLabel="Close menu" Icon={XIcon} />
                ) : (
                  <IconButton srLabel="Open menu" Icon={MenuIcon} />
                )}
              </div>

              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <NavLink to="#" text="Home" />

                <NavLink to="#" text="Pricing" />

                <NavLink to="#" text="Docs" />
              </Popover.Group>

              <div className="hidden md:flex items-center justify-end">
                <FilledNavLink to="#" text="Contact" />
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-100 ease-out"
            enterFrom="opacity-0 scale-85"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-85"
          >
            <Popover.Panel
              focus
              static
              className="transition transform origin-top md:hidden"
            >
              <div className="p-4 shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <nav className="grid gap-y-4">
                  <NavLink to="#" text="Home" />

                  <NavLink to="#" text="Pricing" />

                  <NavLink to="#" text="Docs" />

                  <FilledNavLink to="#" text="Contact" />
                </nav>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

const Logo = () => (
  <a href="#">
    <span className="sr-only">Workflow</span>
    <img
      className="h-8 w-auto sm:h-10"
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      alt=""
    />
  </a>
);

const IconButton = ({ srLabel, Icon, ...props }) => (
  <Popover.Button
    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    {...props}
  >
    <span className="sr-only">{srLabel}</span>
    <Icon className="h-6 w-6" aria-hidden="true" />
  </Popover.Button>
);

const Link = ({ to, text, ...props }) => (
  <a href={to} target="_blank" rel="noreferrer" {...props}>
    {text}
  </a>
);

const NavLink = props => (
  <Link
    className="text-base font-medium text-gray-500 hover:text-gray-900"
    {...props}
  />
);

const FilledNavLink = props => (
  <Link
    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    {...props}
  />
);
