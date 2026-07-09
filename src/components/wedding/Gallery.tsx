"use client";

import { motion } from "framer-motion";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Gold wedding rings on silk with rose petals" },
  { src: g2, alt: "Couple dancing under string lights at dusk" },
  { src: g3, alt: "Bridal bouquet of peonies and blush roses" },
  { src: g4, alt: "Couple walking through a golden field at sunset" },
  { src: g5, alt: "Outdoor ceremony arch with white and blush flowers" },
  { src: g6, alt: "Hands intertwined with an engagement ring" },
];

const carouselCss = `
  .Gallery_Carousel {
    padding-bottom: 56px !important;
  }
  .Gallery_Carousel .swiper-pagination-bullet {
    background: #c9a96e;
    opacity: 0.45;
    width: 6px;
    height: 6px;
    transition: all 0.3s ease;
  }
  .Gallery_Carousel .swiper-pagination-bullet-active {
    background: #c9a96e;
    opacity: 1;
    width: 20px;
    border-radius: 4px;
  }
`;

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <style>{carouselCss}</style>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
          Moments we treasure
        </p>
        <h2 className="font-display divider-gold mt-4 text-4xl sm:text-5xl">Gallery</h2>
      </motion.div>

      {/* Card stack carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 flex justify-center"
      >
        <Swiper
          effect="cards"
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCards, Autoplay, Pagination]}
          className="Gallery_Carousel h-[420px] w-[290px] sm:h-[480px] sm:w-[340px]"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index} className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="h-full w-full object-cover"
                src={photo.src}
                alt={photo.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Swipe hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-4 text-center text-xs tracking-widest text-muted-foreground uppercase"
      >
        Swipe to explore
      </motion.p>
    </section>
  );
}
