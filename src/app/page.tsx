import { TriageSelector } from "@/components/triage/triage-selector";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] px-4">
      <div className="w-full max-w-2xl py-16 md:py-24 lg:py-32 xl:py-40">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
          Var är ert tekniska slukål?
        </h1>
        <TriageSelector />
      </div>
    </div>
  );
}
