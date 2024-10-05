'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { RxDashboard } from "react-icons/rx";
import { MdPeopleAlt } from "react-icons/md";
import { RiFolder6Fill } from "react-icons/ri";
import { BsFileBarGraph } from "react-icons/bs";
import { Icon } from '@chakra-ui/react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard',icon:RxDashboard},
  { name: 'Organisational', href: '/dashboard/social',icon:MdPeopleAlt},
  { name: 'Technical', href: '/dashboard/technical',icon:RiFolder6Fill},
  {name: 'Social', href: '/dashboard/organisational',icon:BsFileBarGraph},
  
];

export function NavLinks() {
  const pathname = usePathname();
  
  return (
    <main className='flex-col justify-items-between'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block"><LinkIcon className="w-6" /></p>
          </Link>
        );
      })}
     
    </main>
  );
}

export function ProfileLink() {
  const pathname = usePathname();
  return (
    <div>
      <Link 
      key={"Profile"} 
      href={"/dashboard/profile"}
      className={clsx(
        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
        {
          'bg-sky-100 text-blue-600': pathname === "/dashboard/profile",
        },
      )}
      >
        <p className="hidden md:block">Profile</p>
      </Link>
      </div>
  );
}
export function SurveyLink() {
  const pathname = usePathname();
  return (
    <div>
      <Link 
      key={"Profile"} 
      href={"/dashboard/profile"}
      className={clsx(
        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
        {
          'bg-sky-100 text-blue-600': pathname === "/dashboard/survey",
        },
      )}
      >
        <p className="hidden md:block">Survey</p>
      </Link>
      </div>
  );
}