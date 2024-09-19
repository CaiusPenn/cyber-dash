import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';

export default function Logo() {
  return (
    <div
      className={` flex flex-row items-center leading-none text-white`}
    >
      <MagnifyingGlassCircleIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Phishing Phighters</p>
    </div>
  );
}
