import Image from 'next/image';
import logo from '@/public/images/logo.png';

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <Image height="60" width="60" src={logo} alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </a>
  );
}
