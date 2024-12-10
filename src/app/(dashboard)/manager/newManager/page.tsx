import { ManagerForm } from "@/components/forms/ManagerForm";
import { Button } from "@/components/ui/button";
import { managersData } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function NewManagerPage() {
  return (
    <div className="px-8 pt-12 lg:px-24 xl:px-48">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/list/managers">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">Managers</h1>
      </div>
      <ManagerForm />
    </div>
  );
}

export default NewManagerPage;
