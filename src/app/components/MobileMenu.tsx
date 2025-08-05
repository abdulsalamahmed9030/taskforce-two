"use client";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  navLinks: NavLink[];
  dropdownLinks: NavLink[];
  closeMenu: () => void;
};

export default function MobileMenu({
  navLinks,
  dropdownLinks,
  closeMenu,
}: MobileMenuProps) {
  return (
    <div className="lg:hidden px-6 py-4 bg-white shadow space-y-2 z-40 relative">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={closeMenu}
          className="block py-2 text-gray-700 hover:text-yellow-600"
        >
          {link.label}
        </a>
      ))}

      <div className="ml-4 space-y-1">
        {dropdownLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={closeMenu}
            className="block py-1 text-sm text-gray-600 hover:text-yellow-600"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
