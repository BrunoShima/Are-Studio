export default function Magazine() {
  return (
    <div>
      {/* Full-width hero - 80vh with overlaid text */}
      <section className="relative h-[80vh] w-full">
        {/* Hero image placeholder */}
        <div className="absolute inset-0 bg-[#D9D9D9]" />

        {/* Eyebrow label - top left */}
        <div className="absolute top-20 left-20">
          <div className="font-medium text-[10px] tracking-[1.5px] uppercase">
            Issue No.1 — Vancouver, BC
          </div>
        </div>

        {/* Large "ĀRE" text - centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-light text-[100px] tracking-[-2px] leading-none">
            ĀRE
          </h1>
        </div>
      </section>

      {/* Intro text */}
      <section className="px-20 py-[120px]">
        <div className="max-w-3xl mx-auto">
          <p className="font-normal text-[15px] leading-[1.7]">
            Our first issue explores the city that defines us. Through the lens of photographer Jayden Quilay, we document the textures, moments, and people of Vancouver—the urban landscape that shapes every piece we create. This is not fashion photography. This is documentation of place, mood, and the quiet confidence of those who inhabit it.
          </p>
        </div>
      </section>

      {/* Asymmetric editorial image grid */}
      <section className="space-y-0">
        {/* Full-width image */}
        <div className="w-full">
          <div className="aspect-[21/9] bg-[#D9D9D9]" />
          <div className="px-20 py-3">
            <p className="font-normal text-[15px] opacity-60">
              Granville Street, early morning
            </p>
          </div>
        </div>

        {/* 60-40 split */}
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <div className="aspect-[4/5] bg-[#D9D9D9]" />
            <div className="px-20 py-3">
              <p className="font-normal text-[15px] opacity-60">
                Alston, Gastown
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="aspect-[4/5] bg-[#D9D9D9]" />
            <div className="px-20 py-3">
              <p className="font-normal text-[15px] opacity-60">
                Detail, Metamorphosis Tee
              </p>
            </div>
          </div>
        </div>

        {/* Full-width image */}
        <div className="w-full">
          <div className="aspect-[21/9] bg-[#D9D9D9]" />
          <div className="px-20 py-3">
            <p className="font-normal text-[15px] opacity-60">
              Bruno, Commercial Drive
            </p>
          </div>
        </div>

        {/* Three-column */}
        <div className="grid grid-cols-3">
          <div>
            <div className="aspect-[3/4] bg-[#D9D9D9]" />
            <div className="px-20 py-3">
              <p className="font-normal text-[15px] opacity-60">
                Studio process
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-[3/4] bg-[#D9D9D9]" />
            <div className="px-20 py-3">
              <p className="font-normal text-[15px] opacity-60">
                Screen printing detail
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-[3/4] bg-[#D9D9D9]" />
            <div className="px-20 py-3">
              <p className="font-normal text-[15px] opacity-60">
                Final garment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits block */}
      <section className="px-20 py-[120px]">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <p className="font-normal text-[15px] leading-[1.7]">
            Photography Jayden Quilay / Models Alston, Bruno / Brand Āre Studio
          </p>
        </div>
      </section>
    </div>
  );
}
