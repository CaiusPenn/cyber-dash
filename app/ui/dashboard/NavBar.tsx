import {NavLinks} from '@/app/ui/dashboard/nav-links';
import { signOut } from '@/auth';
import { deleteSession } from '@/app/lib/session';
import { RxExit } from 'react-icons/rx';
import {useState,useEffect} from 'react';

import { Flex,Stack,Button } from '@chakra-ui/react';
import { cookies } from 'next/headers';

export default function SideNav() {
  const role = cookies().get('role')?.value;
  return (
    <div className="flex flex-col px-3 py-4 md:px-2">
      <div className="w-32 text-white md:w-40">
      </div>
      <div className="flex grow flex-row justify-between space-x-80 md:flex-col md:space-x-0 md:space-y-2">
      <Flex justifyContent="center" paddingBottom="50px">
        <Stack spacing="50px" color="black">
        <NavLinks role={role}/>
        <div className="hidden  w-full grow rounded-md md:block"></div>
        <form
          action={async () => {
            'use server';
            deleteSession();
            await signOut();
          }}
        >
          <button className='flex h-[55px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'  >
          <div className="hidden md:block">‎<RxExit size={'38px'} />‎</div>
            
          </button>
        </form>
        </Stack>
        </Flex>
      </div>
    </div>
  );
}
