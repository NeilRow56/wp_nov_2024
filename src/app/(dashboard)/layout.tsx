import Menu from "@/components/dashboard/Menu";
import Navbar from "@/components/dashboard/Navbar";
import { Logo } from "@/components/shared/Logo";
import { File } from "lucide-react";
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
          <File className="stroke h-8 w-8 stroke-amber-500 stroke-[1.5] lg:hidden" />
          <span className="hidden font-bold lg:block">
            <Logo />
          </span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="flex w-[86%] flex-col overflow-scroll bg-green-50 md:w-[92%] lg:w-[80%] xl:w-[86%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
