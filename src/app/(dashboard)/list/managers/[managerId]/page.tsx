import Announcements from "@/components/dashboard/Announcements";
import BigCalendar from "@/components/dashboard/BigCalendar";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = async () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* USER INFO CARD */}
          <div className="flex flex-1 gap-4 rounded-md bg-blue-100 px-4 py-6">
            <div className="w-1/3">
              <Image
                src={
                  "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200 || /noAvatar.png"
                }
                alt="teacher profile picture"
                width={144}
                height={144}
                className="h-36 w-36 rounded-full object-cover"
              />
            </div>
            <div className="flex w-2/3 flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">JOHN DOE</h1>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>25 January 1970</span>
                </div>
                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  user@gmail.com
                </div>
                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>07887612523, (ext) 21</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex flex-1 flex-wrap justify-between gap-4">
            {/* CARD */}
            {/* <div className="flex w-full gap-4 rounded-md bg-white p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}

            {/* CARD */}
            {/* <div className="flex w-full gap-4 rounded-md bg-white p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">LESSONS</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div> */}
            {/* CARD */}
            <div className="flex w-full gap-4 rounded-md bg-white p-4">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">CLIENT COUNT:</h1>
                <span className="py-2 font-semibold"> 6 Clients</span>
                <span className="text-sm text-gray-400">
                  {" "}
                  2 Limited company
                </span>
                <span className="text-sm text-gray-400"> 2 Soletrader</span>
                <span className="text-sm text-gray-400"> 1 Partnership</span>
                <span className="text-sm text-gray-400"> 1 Other</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 h-[600px] rounded-md bg-white p-4">
          <h1>Manager&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-4 xl:w-1/3">
        <div className="rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold text-orange-600">Shortcuts</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
            <Link
              className="Light rounded-md bg-blue-100 p-3"
              href={`/list/clients?managerId=${"manager2"}`}
            >
              Manager&apos;s Clients
            </Link>
            <Link
              className="rounded-md bg-purple-100 p-3"
              href={`/list/workingPapersFile?managerId=${"manager2"}`}
            >
              Manager&apos;s Files
            </Link>
            {/* <Link
              className="bg-lamaYellowLight rounded-md p-3"
              href={`/list/lessons?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Lessons
            </Link>
            <Link
              className="rounded-md bg-pink-50 p-3"
              href={`/list/exams?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Exams
            </Link>
            <Link
              className="Light rounded-md bg-blue-100 p-3"
              href={`/list/assignments?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Assignments
            </Link> */}
          </div>
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
