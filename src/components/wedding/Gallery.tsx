import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import g1 from "@/assets/gallery/1.webp";
import g2 from "@/assets/gallery/2.webp";
import g3 from "@/assets/gallery/3.webp";
import g4 from "@/assets/gallery/4.webp";
import g5 from "@/assets/gallery/5.webp";
import g6 from "@/assets/gallery/6.webp";
import g7 from "@/assets/gallery/7.webp";
import g8 from "@/assets/gallery/8.webp";
import g9 from "@/assets/gallery/9.webp";
import g10 from "@/assets/gallery/10.webp";

const photos = [
  { src: g1,  alt: "Wedding moment 1" },
  { src: g2,  alt: "Wedding moment 2" },
  { src: g3,  alt: "Wedding moment 3" },
  { src: g4,  alt: "Wedding moment 4" },
  { src: g5,  alt: "Wedding moment 5" },
  { src: g6,  alt: "Wedding moment 6" },
  { src: g7,  alt: "Wedding moment 7" },
  { src: g8,  alt: "Wedding moment 8" },
  { src: g9,  alt: "Wedding moment 9" },
  { src: g10, alt: "Wedding moment 10" },
];

const carouselCss = `
  .Gallery_CardSwipe {
    padding-bottom: 60px !important;
  }
  .Gallery_CardSwipe .swiper-pagination-bullet {
    background: rgba(122, 0, 22, 0.25);
    opacity: 1;
    width: 5px;
    height: 5px;
    transition: all 0.3s ease;
  }
  .Gallery_CardSwipe .swiper-pagination-bullet-active {
    background: #7A0016;
    opacity: 1;
    width: 20px;
    border-radius: 3px;
  }
`;

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 py-24 sm:py-32"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #EAEAEA",
        borderBottom: "1px solid #EAEAEA",
      }}
    >
      <style>{carouselCss}</style>

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <p
            className="text-xs uppercase tracking-[0.45em]"
            style={{ fontFamily: "'Cinzel', serif", color: "#7A0016" }}
          >
            Our Vision
          </p>
          <h2
            className="mt-4 text-5xl sm:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              color: "#1A1A1A",
              fontStyle: "italic",
            }}
          >
            Mood &amp; Gallery
          </h2>
          <div
            className="mx-auto mt-5 h-px w-20"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(122,0,22,0.4), transparent)",
            }}
          />
          <p
            className="mx-auto mt-6 max-w-sm text-sm leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#3D3D3D",
            }}
          >
            A glimpse into the world we're creating — sun-drenched, intimate,
            and timeless.
          </p>
        </motion.div>

        {/* Card-swipe carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 flex flex-col items-center"
        >
          <Swiper
            effect="cards"
            grabCursor
            loop
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[EffectCards, Autoplay, Pagination]}
            className="Gallery_CardSwipe"
            style={{ width: 300, height: 400 }}
            cardsEffect={{
              slideShadows: false,
              rotate: true,
              perSlideOffset: 9,
              perSlideRotate: 3,
            }}
          >
            {photos.map((photo, i) => (
              <SwiperSlide
                key={i}
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swipe hint */}
          <p
            className="mt-1 text-xs uppercase tracking-[0.45em]"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#7A0016",
            }}
          >
            Swipe to Explore
          </p>
        </motion.div>
      </div>
    </section>
  );
}
