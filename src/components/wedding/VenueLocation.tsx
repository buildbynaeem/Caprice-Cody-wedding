import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const VENUE_NAME = "Jardin Des Lys";
const VENUE_ADDRESS = "Faitroun, Keserwan District, Mount Lebanon";
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.624881134714!2d35.68211971478215!3d33.8935058400764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f19109f514b9d%3A0x4d636040972107e0!2sJardin%20Des%20Lys!5e0!3m2!1sen!2slb!4v1721070000000!5m2!1sen!2slb";
const MAPS_LINK_URL =
  "https://www.google.com/maps/search/Jardin+Des+Lys+Faitroun+Lebanon";

export function VenueLocation() {
  return (
    <section className="relative pt-10 pb-24 flex flex-col items-center text-center">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Title */}
          <h1
            className="font-serif text-5xl md:text-6xl text-center"
            style={{ color: "#6B2D31" }}
          >
            Venue
          </h1>

          {/* Divider */}
          <div className="mt-6 mb-6 h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#6B2D31] to-transparent" />

          {/* Venue Name with Icon */}
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-5 h-5" style={{ color: "#6B2D31" }} />
            <h2
              className="font-serif text-2xl md:text-3xl font-bold"
              style={{ color: "#6B2D31" }}
            >
              {VENUE_NAME}
            </h2>
          </div>

          {/* Address */}
          <p
            className="font-sans mt-3 mb-10 text-sm uppercase tracking-[0.2em]"
            style={{ color: "rgba(107, 45, 49, 0.7)" }}
          >
            {VENUE_ADDRESS}
          </p>

          {/* Map Container */}
          <div className="w-[90%] max-w-2xl aspect-square mx-auto mb-8 relative">
            {/* Outer Decorative Frame */}
            <div className="border-2 border-[#B38B59] rounded-2xl p-3 w-full h-full relative">
              {/* Corner Accents */}
              <div className="absolute -top-1.5 -left-1.5 rotate-45 w-3 h-3 border border-[#B38B59] bg-[#E3E8E3]" />
              <div className="absolute -top-1.5 -right-1.5 rotate-45 w-3 h-3 border border-[#B38B59] bg-[#E3E8E3]" />
              <div className="absolute -bottom-1.5 -left-1.5 rotate-45 w-3 h-3 border border-[#B38B59] bg-[#E3E8E3]" />
              <div className="absolute -bottom-1.5 -right-1.5 rotate-45 w-3 h-3 border border-[#B38B59] bg-[#E3E8E3]" />

              {/* Inner Map Container */}
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="Venue Map"
                  src="https://maps.google.com/maps?q=Jardin+Des+Lys,+Faitroun,+Lebanon&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <a
            href={MAPS_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="inline-flex items-center gap-2 px-8 py-3 border rounded-md bg-transparent text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 hover:bg-[#6B2D31]/5"
              style={{ borderColor: "rgba(107, 45, 49, 0.4)", color: "#6B2D31" }}
            >
              OPEN IN GOOGLE MAPS
              <ExternalLink className="w-4 h-4" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
