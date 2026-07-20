import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Target: February 29, 2028 at 4:00 PM local time
const TARGET = new Date("2028-02-29T16:00:00");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const units: { key: "days" | "hours" | "minutes" | "seconds"; label: string }[] = [
  { key: "days",    label: "Days"    },
  { key: "hours",   label: "Hours"   },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="countdown"
      style={{ backgroundColor: "#FFFFFF" }}
      className="scroll-mt-24 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto max-w-3xl px-6"
      >
        {/* Eyebrow */}
        <p
          className="mb-12 text-center text-sm md:text-base tracking-widest uppercase"
          style={{ fontFamily: "'Cinzel', serif", color: "#7A0016" }}
        >
          The Celebration Begins In
        </p>

        {/* Time blocks — always single row */}
        <div className="grid grid-cols-4 w-full">
          {units.map(({ key, label }, i) => (
            <div
              key={key}
              className="flex flex-col items-center py-4 px-2 sm:px-6"
            >
              {/* Number */}
              <span
                className="text-4xl sm:text-5xl md:text-6xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  color: "#7A0016",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {key === "days" ? time.days : pad(time[key])}
              </span>

              {/* Label */}
              <span
                className="mt-3 text-[10px] md:text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "rgba(122, 0, 22, 0.55)",
                  letterSpacing: "0.25em",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div
          className="mx-auto mt-12 h-px w-24"
          style={{
            background:
              "linear-gradient(to right, transparent, #D4AF37, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
