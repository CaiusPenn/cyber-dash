import { cookies } from 'next/headers';
import adminDashboard from '@/app/ui/dashboard/admindash';
import userDashboard from '@/app/ui/dashboard/userdash';


export default async function Page() {
  const role = cookies().get('role')?.value
  
  if (role=='manager'){
    return adminDashboard();
  }
  return userDashboard();
  


}