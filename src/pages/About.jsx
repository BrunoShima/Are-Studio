import aboutHero from '../assets/aboutHero.jpg'

export default function About() {
  return (
    <main>
      {/* ── Hero ─ 70vh ──────────────────────────────────────── */}
      <section className="h-[40vh] md:h-[70vh] w-full">
        <img src={aboutHero} alt="" className="w-full h-full object-cover object-[center_20%]" />
      </section>

      {/* ── Two-column text ──────────────────────────────────── */}
      <section className="px-6 md:px-20 py-16 md:py-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Left — brand intro */}
          <div className="space-y-6">
            <h2 className="font-light text-[32px] md:text-[48px] leading-tight">
              About Āre Studio
            </h2>
            <p className="font-normal text-[15px] leading-[1.7]">
              Born in Vancouver in 2026, Āre Studio creates garments that carry
              meaning beyond their material. Each piece is designed to tell a
              story — of transformation, connection, and the quiet moments that
              define urban life.
            </p>
            <p className="font-normal text-[15px] leading-[1.7]">
              We believe clothing should be intentional. Every design begins with
              a concept, a feeling, or a message we want to express. The result
              is a collection that speaks to those who value substance and
              subtlety.
            </p>
          </div>

          {/* Right — founder's note */}
          <div className="space-y-6">
            <h2 className="font-light text-[32px] md:text-[48px] leading-tight">
              Founder's Note
            </h2>
            <p className="font-normal text-[15px] leading-[1.7]">
              "I started Āre Studio because I was tired of clothes that didn't
              mean anything. I wanted to create pieces that people could connect
              with — designs that had a reason to exist beyond following trends."
            </p>
            <p className="font-normal text-[15px] leading-[1.7]">
              "Every tee we make starts with an idea, a concept that resonates
              with how we experience the world. From there, it's about finding
              the right balance between visual impact and wearability. The goal
              is always the same: create something worth keeping."
            </p>
          </div>
        </div>
      </section>

      {/* ── Brand values ─────────────────────────────────────── */}
      <section className="px-6 md:px-20 pb-16 md:pb-[120px]">
        <div className="text-center space-y-4">
          <div className="font-light text-[24px] md:text-[32px]">Minimal.</div>
          <div className="font-light text-[24px] md:text-[32px]">Urban.</div>
          <div className="font-light text-[24px] md:text-[32px]">Intentional.</div>
          <div className="font-light text-[24px] md:text-[32px]">Personal.</div>
          <div className="font-light text-[24px] md:text-[32px]">Confident.</div>
        </div>
      </section>
    </main>
  )
}
