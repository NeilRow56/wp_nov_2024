import Link from "next/link";
import { Menu, LogOut, LogOutIcon, MenuIcon } from "lucide-react";



import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ReactNode } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/dashboard/ThemeToggle";
import { DashboardItems } from "@/components/DashboardItems";
import { Logo } from "@/components/shared/Logo";








export default async function DashboardLayout({ children }: { children: ReactNode }) {
 

  return (
    <>
      <div className="  grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block ">
          <div className="flex h-full max-h-screen flex-col gap-2  ">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                
                <Logo />
              </Link>
            </div>
            <div className="flex-1 ">
              

              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <DashboardItems />
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
              <SheetHeader>
      <SheetTitle className="sr-only">Toggle navigation menu</SheetTitle>
      <SheetDescription className="sr-only">
      Toggle navigation menu
      </SheetDescription>
    </SheetHeader>
                <nav className="mt-10 grid gap-2">
                  <DashboardItems />
                </nav>
              </SheetContent>
            </Sheet>
 {/* SEARCH BAR */}
 <div className="hidden items-center gap-2 rounded-full  px-2 text-xs ring-[1.5px] ring-gray-300 md:flex">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>
     
            <div className="ml-auto  flex items-center gap-x-4">
              
               {/*  USER */}
      <div className="flex flex-col">
          <span className="text-xs font-medium  leading-3 mr-4">John Richardson</span>
          <span className=" text-[10px] text-gray-500">
            User Role
          </span>
        </div>
              <ThemeToggle />
              <Button>Sign In</Button>
              <div className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs text-white">
            1
          </div>
          </div>
          
        
       
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  
                <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <MenuIcon />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                  Sign Out
                  </DropdownMenuItem>
                  
                </DropdownMenuContent>
              </DropdownMenu>
              
            </div>
          </header>
          
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 ">
            {children}
          </main>
        </div>
      </div>
     
    </>
  );
}