import TableSearch from "@/components/dashboard/TableSearch";
import { clientData, role } from "@/lib/data";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { EmptyState } from "@/components/shared/EmptyState";

import StaffDataTable from "@/components/tables/StaffDataTable";
import { columns } from "./clientColumns";
import ClientDataTable from "@/components/tables/ClientDataTable";

const ClientListPage = () => {
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

      {clientData === undefined || clientData.length === 0 ? (
        <div className="container mx-auto mt-8">
          <EmptyState
            title="You don't have any Clients created"
            description="You currently don't have any clients. Once created you can
      see them here!"
            buttonText="Create Client"
            href="/clients/newClient"
          />
        </div>
      ) : (
        <div className="container mx-auto mt-4">
          <div className="">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  Clients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ClientDataTable data={clientData} columns={columns} />
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientListPage;
