import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "manager", "staff"],
      },
      {
        icon: "/teacher.png",
        label: "Managers",
        href: "/list/managers",
        visible: ["admin", "manager"],
      },
      {
        icon: "/student.png",
        label: "Team",
        href: "/list/team",
        visible: ["admin", "manager"],
      },

      {
        icon: "/class.png",
        label: "Clients",
        href: "/list/clients",
        visible: ["admin", "manager", "staff"],
      },
      {
        icon: "/lesson.png",
        label: "Working papers",
        href: "/list/workingPapersFile",
        visible: ["admin", "manager", "staff"],
      },
      {
        icon: "/exam.png",
        label: "File sections",
        href: "/list/fileSections",
        visible: ["admin", "manager", "staff"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "manager", "staff"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "manager", "staff"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "manager", "staff"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "manager", "staff"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "manager", "staff"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "manager", "staff"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((navItem) => (
        <div className="flex flex-col gap-2" key={navItem.title}>
          <span className="my-4 hidden font-light text-gray-400 lg:block">
            {navItem.title}
          </span>
          {navItem.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center gap-4 rounded-md py-2 text-gray-500 hover:bg-blue-100 hover:text-green-600 md:px-2 lg:justify-start"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
