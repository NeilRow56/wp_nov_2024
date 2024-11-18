import Announcements from "@/components/dashboard/Announcements";
import BigCalendar from "@/components/dashboard/BigCalendar";
import EventCalendar from "@/components/dashboard/EventCalendar";
import React from "react";

const ManagerPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">John Doe - manager</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-8 xl:w-1/3">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default ManagerPage;
