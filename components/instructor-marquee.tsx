import Image from "next/image"

const BANNER_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e2132-wod9zujsmDcdRougpwfuZhYk8OL3T1.webp"

// Image native ratio: 960 × 90 ≈ 10.67:1
// We render each image at 100vw wide so it fills the screen on any device.
// We duplicate 8 times per set so the track is always much wider than the viewport
// and the loop is perfectly seamless (translateX -50% brings us back to start).
const COPIES = 8

export function InstructorMarquee() {
  return (
    <div className="w-full overflow-hidden">
      <style>{`
        @keyframes jt-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .jt-marquee-track {
          display: flex;
          width: max-content;
          animation: jt-marquee 60s linear infinite;
          will-change: transform;
        }
        .jt-marquee-item {
          /* Each image fills 100vw so it looks full-width as it scrolls past */
          flex-shrink: 0;
          width: 100vw;
        }
        .jt-marquee-item img {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>

      <div className="jt-marquee-track">
        {/* First set */}
        {Array.from({ length: COPIES }).map((_, i) => (
          <div key={`a-${i}`} className="jt-marquee-item">
            <Image
              src={BANNER_URL}
              alt="Fundador da Bravo 2 - Rank 1 Faixa Preta Master 2"
              width={960}
              height={90}
              priority={i === 0}
            />
          </div>
        ))}
        {/* Duplicate set — required for seamless infinite loop */}
        {Array.from({ length: COPIES }).map((_, i) => (
          <div key={`b-${i}`} className="jt-marquee-item">
            <Image
              src={BANNER_URL}
              alt="Fundador da Bravo 2 - Rank 1 Faixa Preta Master 2"
              width={960}
              height={90}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
