import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function Details() {
  return (
    <section
      id="details"
      className="scroll-mt-24 py-24 sm:py-32"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center"
        >
          <p
            className="text-xs uppercase tracking-[0.45em]"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#7A0016",
              letterSpacing: "0.45em",
            }}
          >
            Mark Your Calendar
          </p>
          <h2
            className="mt-4 text-5xl sm:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              color: "#222222",
              fontStyle: "italic",
            }}
          >
            The Details
          </h2>
          {/* Crimson divider */}
          <div
            className="mx-auto mt-5 h-px w-20"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(122,0,22,0.4), transparent)",
            }}
          />
        </motion.div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* WHEN card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            variants={fadeUp}
            className="flex flex-col items-center px-10 py-14 text-center"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            {/* Icon circle */}
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ border: "1px solid #7A0016" }}
            >
              <Calendar size={22} style={{ color: "#7A0016" }} strokeWidth={1.5} />
            </div>

            <p
              className="mt-7 text-xs uppercase tracking-[0.4em]"
              style={{ fontFamily: "'Cinzel', serif", color: "#7A0016" }}
            >
              When
            </p>

            <h3
              className="mt-4 text-3xl leading-snug"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                color: "#222222",
              }}
            >
              Saturday, February 29, 2028
            </h3>

            <div
              className="mx-auto mt-4 h-px w-12"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(122,0,22,0.4), transparent)",
              }}
            />

            <p
              className="mt-4 text-sm leading-relaxed"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                color: "#555555",
              }}
            >
              Time To Be Announced
            </p>
          </motion.div>

          {/* WHERE card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.25}
            variants={fadeUp}
            className="flex flex-col items-center px-10 py-14 text-center"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            {/* Icon circle */}
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ border: "1px solid #7A0016" }}
            >
              <MapPin size={22} style={{ color: "#7A0016" }} strokeWidth={1.5} />
            </div>

            <p
              className="mt-7 text-xs uppercase tracking-[0.4em]"
              style={{ fontFamily: "'Cinzel', serif", color: "#7A0016" }}
            >
              Where
            </p>

            <h3
              className="mt-4 text-3xl leading-snug"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                color: "#222222",
              }}
            >
              Santa Catalina Island
            </h3>

            <div
              className="mx-auto mt-4 h-px w-12"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(122,0,22,0.4), transparent)",
              }}
            />

            <p
              className="mt-4 text-sm leading-relaxed"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                color: "#555555",
              }}
            >
              California, United States
            </p>

            <a
              href="https://www.google.com/maps/place/Santa+Catalina+Island/@33.3888759,-118.6197532,11z/data=!3m1!4b1!4m6!3m5!1s0x80dd6f237be18b25:0x3e59a3d5c5f50eab!8m2!3d33.3878856!4d-118.4163103!16zL20vMDF3dmM3?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest transition-opacity duration-200 hover:opacity-70"
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#7A0016",
                textDecoration: "none",
              }}
            >
              <MapPin size={11} strokeWidth={1.8} />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
