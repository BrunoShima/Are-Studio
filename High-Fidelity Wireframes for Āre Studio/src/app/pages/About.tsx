export default function About() {
  return (
    <div>
      {/* Full-width image hero - 70vh */}
      <section className="h-[70vh] w-full">
        <div className="w-full h-full bg-[#D9D9D9]" />
      </section>

      {/* Two-column text section */}
      <section className="px-20 py-[120px]">
        <div className="grid grid-cols-2 gap-24">
          {/* Brand intro left */}
          <div className="space-y-6">
            <h2 className="font-light text-[48px] leading-tight">
              About Āre Studio
            </h2>
            <p className="font-normal text-[15px] leading-[1.7]">
              Born in Vancouver in 2026, Āre Studio creates garments that carry meaning beyond their material. Each piece is designed to tell a story—of transformation, connection, and the quiet moments that define urban life.
            </p>
            <p className="font-normal text-[15px] leading-[1.7]">
              We believe clothing should be intentional. Every design begins with a concept, a feeling, or a message we want to express. The result is a collection that speaks to those who value substance and subtlety.
            </p>
          </div>

          {/* Founder's note right */}
          <div className="space-y-6">
            <h2 className="font-light text-[48px] leading-tight">
              Founder's Note
            </h2>
            <p className="font-normal text-[15px] leading-[1.7]">
              "I started Āre Studio because I was tired of clothes that didn't mean anything. I wanted to create pieces that people could connect with—designs that had a reason to exist beyond following trends."
            </p>
            <p className="font-normal text-[15px] leading-[1.7]">
              "Every tee we make starts with an idea, a concept that resonates with how we experience the world. From there, it's about finding the right balance between visual impact and wearability. The goal is always the same: create something worth keeping."
            </p>
          </div>
        </div>
      </section>

      {/* Brand values - centered */}
      <section className="px-20 pb-[120px]">
        <div className="text-center space-y-4">
          <div className="font-light text-[32px]">Minimal.</div>
          <div className="font-light text-[32px]">Urban.</div>
          <div className="font-light text-[32px]">Intentional.</div>
          <div className="font-light text-[32px]">Personal.</div>
          <div className="font-light text-[32px]">Confident.</div>
        </div>
      </section>

      {/* Logo system */}
      <section className="px-20 pb-[120px]">
        <div className="space-y-6">
          <h3 className="font-medium text-[20px]">Brand System</h3>
          <div className="grid grid-cols-5 gap-6">
            <div className="space-y-3">
              <div className="aspect-square bg-[#D9D9D9]" />
              <div className="font-medium text-[10px] tracking-[1.5px] uppercase text-center">
                Primary
              </div>
            </div>
            <div className="space-y-3">
              <div className="aspect-square bg-[#D9D9D9]" />
              <div className="font-medium text-[10px] tracking-[1.5px] uppercase text-center">
                Handwritten
              </div>
            </div>
            <div className="space-y-3">
              <div className="aspect-square bg-[#D9D9D9]" />
              <div className="font-medium text-[10px] tracking-[1.5px] uppercase text-center">
                Logomark
              </div>
            </div>
            <div className="space-y-3">
              <div className="aspect-square bg-[#D9D9D9]" />
              <div className="font-medium text-[10px] tracking-[1.5px] uppercase text-center">
                Secondary
              </div>
            </div>
            <div className="space-y-3">
              <div className="aspect-square bg-[#D9D9D9]" />
              <div className="font-medium text-[10px] tracking-[1.5px] uppercase text-center">
                Icon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color palette */}
      <section className="px-20 pb-[120px]">
        <div className="space-y-6">
          <h3 className="font-medium text-[20px]">Color Palette</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="h-32 bg-black" />
              <div className="space-y-1">
                <div className="font-medium text-[15px]">Black</div>
                <div className="font-normal text-[15px] opacity-60">#000000</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-[#F5F4F0] border border-black" />
              <div className="space-y-1">
                <div className="font-medium text-[15px]">Cream</div>
                <div className="font-normal text-[15px] opacity-60">#F5F4F0</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-32 bg-white border border-black" />
              <div className="space-y-1">
                <div className="font-medium text-[15px]">White</div>
                <div className="font-normal text-[15px] opacity-60">#FFFFFF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography specimen */}
      <section className="px-20 pb-[120px]">
        <div className="space-y-6">
          <h3 className="font-medium text-[20px]">Typography</h3>
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="font-light text-[48px]">Work Sans Light</div>
              <div className="font-normal text-[15px] opacity-60">Light 300</div>
            </div>
            <div className="space-y-2">
              <div className="font-normal text-[48px]">Work Sans Regular</div>
              <div className="font-normal text-[15px] opacity-60">Regular 400</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-[48px]">Work Sans Medium</div>
              <div className="font-normal text-[15px] opacity-60">Medium 500</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[48px]">Work Sans SemiBold</div>
              <div className="font-normal text-[15px] opacity-60">SemiBold 600</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
