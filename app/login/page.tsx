import LoginForm from '@/app/ui/login-form';
import '@/global.css'
import Image from 'next/image';
export default function LoginPage() {
  return (
      <main className="flex h-screen items-center justify-center">
       <div className='hidden w-fit bg-blue-500 h-screen md:block'>
       <Image
          src="/hero-desktop.png"
        width={800}
        height={560}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
       </div>
       <div className="w-8/12 flex-col items-center rounded-lg">
          <LoginForm/>
       </div>
      </main>

  );
}