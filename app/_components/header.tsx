export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 flex-col items-center justify-around border-b bg-white px-6">
      {/* Skip to main content */}
      <a
        href="#skip-nav"
        className="pointer-events-none fixed top-4 left-4 opacity-0 focus:pointer-events-auto focus:opacity-100"
        tabIndex={0}
      >
        Skip to main content
      </a>

      <div className="flex w-full max-w-[1400px] flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          {/* Logo */}
          <div>Logo</div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-row items-center gap-4">
              <li>MENU 1</li>
              <li>MENU 2</li>
              <li>MENU 3</li>
            </ul>
          </nav>
        </div>

        {/* Search */}
        <div>Search</div>
      </div>
    </header>
  );
}
