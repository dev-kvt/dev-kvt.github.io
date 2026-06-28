"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", path: "/" },
  { name: "Resume", path: "https://drive.google.com/file/d/1rdMddhaK3R7HG0L4jRUTeqDFnrEA8CTo/view?usp=share_link" },
  { name: "Github", path: "https://github.com/dev-kvt" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 w-full h-16 md:h-screen md:w-[220px] bg-[#fafafa] flex flex-row md:flex-col items-center md:items-start justify-center px-4 md:px-0 md:pl-12 z-40 border-b md:border-b-0 md:border-r border-gray-100">
      
      {/* Optional Logo/Brand area placeholder */}
      <div className="font-medium text-[#333] hidden md:block md:mb-4">
        {/* Logo content here if needed */}
      </div>

      <nav aria-label="Main Navigation" className="w-full md:w-auto flex justify-center md:justify-start">
        <ul className="flex flex-row md:flex-col space-x-8 md:space-x-0 md:space-y-[20px]">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const isExternal = item.path.startsWith("http");

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`text-[16px] md:text-[18px] font-normal transition-colors duration-200 block ${
                    isActive
                      ? "text-[#2ca24c]"
                      : "text-[#333] hover:text-[#2ca24c]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}