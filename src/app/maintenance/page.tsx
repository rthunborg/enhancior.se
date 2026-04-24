import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] px-6 py-20">
      <div className="flex w-full max-w-md flex-col items-center text-center">
        <div className="mb-10 opacity-90">
          <Image
            src="/images/enhancior_logo.webp"
            alt="Enhancior"
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#A1A1A1]">
          Under uppdatering
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[#EDEDED] sm:text-3xl">
          Sidan uppdateras
        </h1>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-[#A1A1A1] sm:text-base">
          Vi håller på att förbereda en ny sida. Under tiden når du oss om det
          är brådskande via samma kanaler som tidigare — tack för ditt
          tålamod.
        </p>
        <div
          className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent"
          aria-hidden
        />
      </div>
    </div>
  );
}
