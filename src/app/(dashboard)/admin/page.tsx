import Announcements from "@/components/dashboard/Announcements";
import CountChart from "@/components/dashboard/CountChart";
import EventCalendar from "@/components/dashboard/EventCalendar";
import UserCard from "@/components/dashboard/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* LEFT */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="clients" />
          <UserCard type="managers" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* COUNT CHART */}
          <div className="h-[450px] w-full bg-yellow-100">
            <CountChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="h-[500px] w-full bg-green-50">
          <Announcements />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <div className="h-[450px] bg-red-50">
          <EventCalendar />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
