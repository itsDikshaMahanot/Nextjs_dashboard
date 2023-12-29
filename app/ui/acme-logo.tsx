import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { BugAntIcon } from '@heroicons/react/20/solid';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BugAntIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="px-2 text-[40px]"> CIT </p>
    </div>
  );
}
