import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Gold wedding rings on silk with rose petals",       w: 900,  h: 1200 },
  { src: g2, alt: "Couple dancing under string lights at dusk",        w: 1200, h: 900  },
  { src: g3, alt: "Bridal bouquet of peonies and blush roses",         w: 900,  h: 1100 },
  { src: g4, alt: "Couple walking through a golden field at sunset",   w: 1200, h: 900  },
  { src: g5, alt: "Outdoor ceremony arch with white and blush flowers", w: 900, h: 1200 },
  { src: g6, alt: "Hands intertwined with an engagement ring",         w: 1200, h: 800  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Gallery() {
  const [lightbox, setLightbox] = useState<(typeof photos)[number] | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
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

      {/* Masonry grid */}
      <motion.div
        className="group mt-16 columns-2 gap-4 md:columns-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {photos.map((photo) => (
          <motion.figure
            key={photo.alt}
            variants={itemVariants}
            className="mb-4 cursor-zoom-in overflow-hidden rounded-md shadow-card"
            onClick={() => setLightbox(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              loading="lazy"
              className={[
                "w-full transform-gpu object-cover transition-all duration-500 ease-out",
                "scale-100 opacity-100",
                "hover:scale-[1.02]",
                "group-hover:opacity-80 hover:!opacity-100",
              ].join(" ")}
            />
          </motion.figure>
        ))}
      </motion.div>

      {/* Lightbox */}
      <Dialog
        open={!!lightbox}
        onOpenChange={(open) => { if (!open) setLightbox(null); }}
      >
        <DialogContent
          className="flex max-h-[90vh] max-w-5xl items-center justify-center border-0 bg-black/95 p-2 shadow-2xl sm:rounded-lg"
        >
          {/* Visually-hidden title for accessibility */}
          <DialogTitle className="sr-only">
            {lightbox?.alt ?? "Gallery photo"}
          </DialogTitle>

          {lightbox && (
            <motion.img
              key={lightbox.alt}
              src={lightbox.src}
              alt={lightbox.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="max-h-[85vh] w-auto max-w-full rounded object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
