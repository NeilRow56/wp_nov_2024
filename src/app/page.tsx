import { ShinyButton } from "@/components/shared/ShinyButton";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-zinc-100 p-24">
      <h1 className="text-5xl font-bold">Home Page</h1>
      <div className="w-full max-w-80">
        <ShinyButton
          href="/sign-up"
          className="relative z-10 h-14 w-full text-blue-500 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          Start For Free Today
        </ShinyButton>
      </div>
    </div>
  );
}
