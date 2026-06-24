"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", path: "/" },
  { name: "Resume", path: "https://drive.google.com/file/d/1rdMddhaK3R7HG0L4jRUTeqDFnrEA8CTo/view?usp=share_link" },
  { name: "Github", path: "https://github.com/dev-kvt" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 w-[220px] h-screen bg-[#fafafa] flex flex-col items-start justify-center pl-12 z-40">
      <div className="flex flex-col">
        {/* Logo */}
          {/* Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="flex flex-col space-y-[20px]">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`text-[18px] font-normal transition-colors duration-200 block ${
                      isActive
                        ? "text-[#2ca24c]"
                        : "text-[#333] hover:text-[#2ca24c]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
