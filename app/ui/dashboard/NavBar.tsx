import { NavLinks } from "@/app/ui/dashboard/nav-links";
import { signOut } from "@/auth";
import { deleteSession } from "@/app/lib/session";
import { RxExit } from "react-icons/rx";

import { Flex, Stack, Button } from "@chakra-ui/react";

export default function SideNav() {
  return (
    <Flex
      direction="column"
      height="107vh" // Full viewport height
      justifyContent="space-between" // Ensure space between items
      alignItems="center"
    >
      <Stack spacing="50px" color="black" width="100%">
        <NavLinks />
        <div className="hidden  w-full grow rounded-md md:block"></div>
      </Stack>

      {/* Button at the bottom */}
      <form
        action={async () => {
          "use server";
          deleteSession();
          await signOut();
        }}
      >
        <button className="flex h-[55px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">
            ‎<RxExit size={"38px"} />‎
          </div>
        </button>
      </form>
    </Flex>
  );
}
