export default function Home() {
  return (
    <div>
      {/* Full-width hero - 100vh */}
      <section className="relative h-screen w-full">
        {/* Hero image placeholder */}
        <div className="absolute inset-0 bg-[#D9D9D9]" />

        {/* Hero text - bottom left */}
        <div className="absolute bottom-20 left-20">
          <h1 className="font-light text-[80px] tracking-[-2px] leading-none">
            ĀRE STUDIO
          </h1>
        </div>
      </section>

      {/* Centered tagline */}
      <section className="py-[120px] px-20">
        <h2 className="font-light text-[32px] text-center leading-tight">
          Clothes that mean something.
        </h2>
      </section>

      {/* 3-column release grid */}
      <section className="px-20 pb-[120px]">
        <div className="grid grid-cols-3 gap-6">
          {/* Release 1 */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-[#D9D9D9]" />
            <div className="space-y-1">
              <div className="font-medium text-[20px]">Metamorphosis Tee</div>
              <div className="font-normal text-[15px] leading-[1.7]">
                A reflection on transformation and growth
              </div>
            </div>
          </div>

          {/* Release 2 */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-[#D9D9D9]" />
            <div className="space-y-1">
              <div className="font-medium text-[20px]">Smoke Break Tee</div>
              <div className="font-normal text-[15px] leading-[1.7]">
                Urban moments of quiet contemplation
              </div>
            </div>
          </div>

          {/* Release 3 */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-[#D9D9D9]" />
            <div className="space-y-1">
              <div className="font-medium text-[20px]">I Love You in Morse</div>
              <div className="font-normal text-[15px] leading-[1.7]">
                Hidden messages of connection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width magazine strip */}
      <section className="px-20 pb-[120px]">
        <div className="grid grid-cols-5 gap-6">
          {/* Image left - 60% (3 columns) */}
          <div className="col-span-3">
            <div className="aspect-[4/5] bg-[#D9D9D9]" />
          </div>

          {/* Text right - 40% (2 columns) */}
          <div className="col-span-2 flex flex-col justify-center space-y-6">
            <div className="font-medium text-[10px] tracking-[1.5px] uppercase">
              Issue No.1
            </div>
            <h3 className="font-light text-[48px] leading-tight">
              Vancouver Stories
            </h3>
            <p className="font-normal text-[15px] leading-[1.7]">
              An editorial exploration of the city that shapes our design. Photography, interviews, and insights from the streets we call home.
            </p>
            <a
              href="/magazine"
              className="inline-block font-semibold text-[12px] tracking-[1px] uppercase hover:opacity-60 transition-opacity"
            >
              View Magazine
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
