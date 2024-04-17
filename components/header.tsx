import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const navLinks = [
  {
    text: 'Product',
    href: '#',
  },
  {
    text: 'Solutions',
    href: '#',
  },
  {
    text: 'Players',
    href: '#',
  },
  {
    text: 'Pricing',
    href: '#',
  },
  {
    text: 'Resources',
    href: '#',
  },
  {
    text: 'Partners',
    href: '#',
  },
  {
    text: 'Contact Us',
    href: '#',
  },
];

export function Header() {
  return (
    <header className="grid h-[4.25rem] px-4 desktop:place-content-center">
      <div className="flex items-center justify-between desktop:m-auto">
        <Link
          href="/"
          aria-label="Go to Screenly home page"
          className="mr-[76px]"
        >
          <Image
            src="https://screenly.io/assets/images/site/logo.svg"
            alt="Screenly Logo"
            width="108"
            height="24"
          />
        </Link>
        <nav>
          <ul className="hidden list-none items-center gap-4 desktop:flex">
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link href={link.href} className="px-2 font-normal text-white">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-[76px] hidden items-center gap-6 desktop:flex">
          <Link href="#" className="px-2 font-normal text-white">
            Sign In
          </Link>
          <Button variant="secondary" size="sm" asChild>
            <Link href="#">Free Trial</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
