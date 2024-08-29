import { signOut } from '@/auth';

export default async function Page() {
    return (
    <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          {/* Main content */}
          <h1>WOOOOOO</h1>
        </div>

        <form
            action={async () => {
            'use server';
            await signOut();
            }}
        >
            <button className="flex h-[48px] w-[100px] rounded-md bg-gray-50 p-3 text-sm font-medium text-black hover:bg-sky-100 hover:text-blue-600">
                <div className="hidden md:block">Sign Out</div>
            </button>
        </form>
      </div>
    );
  }