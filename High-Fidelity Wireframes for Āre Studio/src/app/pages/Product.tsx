import { useState } from "react";

export default function Product() {
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div>
      {/* Two-column layout: sticky image left, scrollable info right */}
      <section className="grid grid-cols-[55%_45%]">
        {/* Left column - sticky product image */}
        <div className="sticky top-[73px] h-[calc(100vh-73px)]">
          <div className="w-full h-full bg-[#D9D9D9]" />
        </div>

        {/* Right column - product info */}
        <div className="px-20 py-20 space-y-8">
          {/* Eyebrow */}
          <div className="font-medium text-[10px] tracking-[1.5px] uppercase opacity-60">
            Release 01
          </div>

          {/* Product name */}
          <h1 className="font-light text-[48px] leading-tight">
            Metamorphosis Tee
          </h1>

          {/* Concept description */}
          <div className="space-y-4">
            <p className="font-normal text-[15px] leading-[1.7]">
              Transformation is never linear. It happens in moments we don't notice, in the spaces between who we were and who we're becoming. This tee captures that liminal state—the beautiful uncertainty of change.
            </p>
            <p className="font-normal text-[15px] leading-[1.7]">
              The design features an abstract metamorphosis sequence screen-printed across the chest. Each stage bleeds into the next, reminding us that growth is continuous, not destination-bound.
            </p>
            <p className="font-normal text-[15px] leading-[1.7]">
              Premium heavyweight cotton. Oversized fit. Screen-printed in Vancouver.
            </p>
          </div>

          {/* Size selector */}
          <div className="space-y-3">
            <div className="font-medium text-[15px]">Size</div>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 font-semibold text-[12px] tracking-[1px] uppercase transition-colors ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black border border-black hover:bg-black hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart button */}
          <button className="w-full bg-black text-white py-4 font-semibold text-[12px] tracking-[1px] uppercase hover:opacity-90 transition-opacity">
            Add to Cart
          </button>
        </div>
      </section>

      {/* The Process section - below fold */}
      <section className="px-20 py-[120px]">
        <div className="space-y-8">
          <h2 className="font-light text-[48px] leading-tight">
            The Process
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {/* Poster 01 */}
            <div className="space-y-3">
              <div className="aspect-[3/4] bg-[#D9D9D9]" />
              <div className="space-y-1">
                <div className="font-medium text-[15px]">Poster 01</div>
                <div className="font-normal text-[15px] leading-[1.7] opacity-60">
                  Initial concept sketch exploring transformation themes
                </div>
              </div>
            </div>

            {/* Poster 02 */}
            <div className="space-y-3">
              <div className="aspect-[3/4] bg-[#D9D9D9]" />
              <div className="space-y-1">
                <div className="font-medium text-[15px]">Poster 02</div>
                <div className="font-normal text-[15px] leading-[1.7] opacity-60">
                  Refined design ready for screen printing
                </div>
              </div>
            </div>

            {/* Final Design */}
            <div className="space-y-3">
              <div className="aspect-[3/4] bg-[#D9D9D9]" />
              <div className="space-y-1">
                <div className="font-medium text-[15px]">Final Design</div>
                <div className="font-normal text-[15px] leading-[1.7] opacity-60">
                  Completed garment with screen-printed graphic
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="px-20 pb-[120px]">
        <div className="space-y-8">
          <h2 className="font-light text-[48px] leading-tight">
            Related Products
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Smoke Break Tee */}
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-[#D9D9D9]" />
              <div className="space-y-1">
                <div className="font-medium text-[20px]">Smoke Break Tee</div>
                <div className="font-normal text-[15px] leading-[1.7]">
                  Urban moments of quiet contemplation
                </div>
              </div>
            </div>

            {/* I Love You in Morse Tee */}
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
        </div>
      </section>
    </div>
  );
}
