import TableSearch from "@/components/dashboard/TableSearch";
import DataTable from "@/components/tables/DataTable";
import { role, managersData, fileSectionsData } from "@/lib/data";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { EmptyState } from "@/components/shared/EmptyState";
import { columns } from "./fileSectionColumns";
import FileSectionTable from "@/components/tables/FileSectionTable";

const FileSectionListPage = () => {
  return (
    <div className="m-4 mt-0 flex-1 rounded-md bg-white p-4">
      {/* TOP */}
      <div className="flex items-center justify-between">
        {/* <h1 className="hidden text-lg font-semibold md:block">All Managers</h1> */}
        <div />
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
                <PlusCircle />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}

      {managersData === undefined || managersData.length === 0 ? (
        <div className="container mx-auto mt-8">
          <EmptyState
            title="You don't have any File Sections created"
            description="You currently don't have any File fileSectionColumns. Once created you can
        see them here!"
            buttonText="Create File Section"
            href="/fileSection/newFileSection"
          />
        </div>
      ) : (
        <div className="container mx-auto mt-4">
          <div className="">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  File Sections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FileSectionTable data={fileSectionsData} columns={columns} />
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileSectionListPage;
