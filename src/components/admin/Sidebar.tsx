"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { adminSideBarLinks } from "@/constants";
import type { Session } from "@/auth";

interface SidebarProps {
  session: Session;
}

const Sidebar = ({ session }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar w-[264px]">
      <div>
        <div className="logo">
          <Image
            src="/icons/admin/logo.svg"
            alt="BookWise Admin"
            width={40}
            height={40}
          />
          <h1>BookWise</h1>
        </div>

        <nav className="mt-10 space-y-2">
          {adminSideBarLinks.map((link) => {
            const isActive = pathname === link.route;
            
            return (
              <Link
                key={link.route}
                href={link.route}
                className={`link ${
                  isActive
                    ? "bg-primary-admin/10 text-primary-admin"
                    : "text-dark-300 hover:bg-light-300"
                }`}
              >
                <Image
                  src={link.img}
                  alt={link.text}
                  width={20}
                  height={20}
                />
                <p>{link.text}</p>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="user">
        <div className="flex size-10 items-center justify-center rounded-full bg-primary-admin">
          <span className="text-sm font-semibold text-white">
            {session.user.fullName.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1 max-md:hidden">
          <p className="text-sm font-medium text-dark-400 line-clamp-1">
            {session.user.fullName}
          </p>
          <p className="text-xs text-light-500 line-clamp-1">
            {session.user.email}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
