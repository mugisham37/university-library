"use client";

import Image from "next/image";
import { adminSideBarLinks } from "@/constants";
import Link from "next/link";
import { cn, getInitials } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Session } from "next-auth";

interface SidebarProps {
  session: Session;
}

const Sidebar = ({ session }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="admin-sidebar">
      <div>
        {/* Logo Section */}
        <div className="logo">
          <Image
            src="/icons/admin/logo.svg"
            alt="BookWise Logo"
            height={37}
            width={37}
            priority
          />
          <h1>BookWise</h1>
        </div>

        {/* Navigation Links */}
        <nav className="mt-10 flex flex-col gap-5" role="navigation">
          {adminSideBarLinks.map((link) => {
            const isSelected =
              (link.route !== "/admin" &&
                pathname.includes(link.route) &&
                link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link 
                href={link.route} 
                key={link.route}
                className={cn(
                  "link",
                  isSelected && "bg-primary-admin shadow-sm",
                )}
              >
                <div className="relative size-5">
                  <Image
                    src={link.img}
                    alt={`${link.text} icon`}
                    fill
                    className={cn(
                      "object-contain",
                      isSelected ? "brightness-0 invert" : ""
                    )}
                  />
                </div>

                <p className={cn(
                  "text-base font-medium max-md:hidden",
                  isSelected ? "text-white" : "text-dark"
                )}>
                  {link.text}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Profile Section */}
      <div className="user">
        <Avatar>
          <AvatarFallback className="bg-amber-100 text-amber-800 font-semibold">
            {getInitials(session?.user?.name || "Admin")}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col max-md:hidden">
          <p className="font-semibold text-dark-200 line-clamp-1">
            {session?.user?.name || "Admin User"}
          </p>
          <p className="text-xs text-light-500 line-clamp-1">
            {session?.user?.email || "admin@bookwise.com"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
