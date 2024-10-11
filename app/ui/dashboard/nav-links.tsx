'use client';
import { Link,Flex,Stack } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { RxDashboard } from "react-icons/rx";
import { MdPeopleAlt } from "react-icons/md";
import { RiFolder6Fill } from "react-icons/ri";
import { BsFileBarGraph } from "react-icons/bs";
import { RiSurveyFill } from 'react-icons/ri';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: RxDashboard},
  { name: 'Organisational', href: '/dashboard/social',icon:MdPeopleAlt},
  { name: 'Technical', href: '/dashboard/technical',icon:BsFileBarGraph},
  {name: 'Social', href: '/dashboard/organisational',icon:RiFolder6Fill},
  {name: 'Survey', href: '/dashboard/survey', icon:RiSurveyFill},
];

export function NavLinks() {
  const pathname = usePathname();
  
  return (
    <main className='flex-col justify-items-between'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Flex key={link.name} justifyContent="center" paddingTop="50px">
            <Stack spacing="50px" color="black">
              <Link
               _hover={{
                textDecoration: "none",   // Remove underline on hover
                color: "#1C61FF",        // Change color on hover
              }}
                key={link.name}
                href={link.href}
                color={pathname === link.href ? "#1C61FF" : "black.500"}
              >
                <p className="hidden md:block"><LinkIcon size={"38px"} className="w-6" /></p>
              </Link>
          </Stack>
          </Flex>
        );
      })}
     
    </main>
  );
}

