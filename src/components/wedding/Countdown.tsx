import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WEDDING_DATE } from "@/lib/wedding";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const units: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

function Digit({ value }: { value: number }) {
  const display = String(value).padStart(2, "0");
  return (
    <motion.span
      key={display}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="font-display block text-6xl sm:text-7xl md:text-8xl leading-none tracking-tight text-foreground"
    >
      {value}
    </motion.span>
  );
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{ backgroundColor: "#FDFCF0" }}
      className="relative overflow-hidden py-20 sm:py-24"
    >
      {/* Top-left floral decoration */}
      <img
        src="/left-flower.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 -left-4 w-52 sm:w-64 md:w-72 select-none"
      />

      {/* Top-right floral decoration */}
      <img
        src="/right-flower.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 -right-4 w-52 sm:w-64 md:w-72 select-none"
      />

      <div className="mx-auto max-w-5xl px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-gold"
        >
          Counting Down to Forever
        </motion.p>

        {/* Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 flex items-start justify-center gap-8 sm:gap-14 md:gap-20"
        >
          {units.map(({ key, label }) => (
            <div key={key} className="flex flex-col items-center gap-3">
              <Digit value={time[key]} />
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-12 h-px w-16 origin-center bg-gold/50"
        />
      </div>
    </section>
  );
}
