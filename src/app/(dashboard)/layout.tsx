import Navbar from "@/components/dashboard/Navbar";
import { Logo } from "@/components/shared/Logo";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* LEFT */}
      <div className="w-[14%] bg-blue-50 p-4 md:w-[8%] lg:w-[20%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <span className="hidden font-bold lg:block">
            <Logo />
          </span>
        </Link>
        MENU COMPONENT
      </div>
      {/* RIGHT */}
      <div className="flex w-[86%] flex-col overflow-scroll bg-green-50 md:w-[92%] lg:w-[80%] xl:w-[86%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
