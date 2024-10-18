import userDash from "@/app/ui/dashboard/userDash";
import managerDash from "@/app/ui/dashboard/managerDash";
import "@/global.css";
import { cookies } from "next/headers";
export default async function Page() {
  const role = cookies().get("role")?.value;

  if (role == "manager") {
    return managerDash();
  }
  return userDash();
}

