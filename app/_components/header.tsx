import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 flex h-15 flex-col items-center justify-around border-b bg-white px-6"
    >
      {/* Skip to main content */}
      <a
        href="#skip-nav"
        className="pointer-events-none fixed top-4.5 left-4.5 bg-white opacity-0 focus:pointer-events-auto focus:opacity-100"
        tabIndex={0}
      >
        Skip to main content
      </a>

      <div className="flex w-full max-w-[1400px] flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          {/* Logo */}
          <Link href="/" className="p-2 font-black">
            Jinu Dev
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-row items-center gap-2">
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/blog">Blog</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Search */}
        <Search />
      </div>
    </header>
  );
}
