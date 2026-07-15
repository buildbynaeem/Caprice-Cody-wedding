import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_TARGET = new Date("2026-08-08T00:00:00");

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days",    label: "Days"    },
  { key: "hours",   label: "Hours"   },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

function CountCell({ value, label, index }: { value: number; label: string; index: number }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.08, duration: 0.6 }}
        className="relative overflow-hidden h-[4.5rem] sm:h-[6rem] md:h-[7.5rem] flex items-center justify-center"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="block font-serif text-6xl sm:text-7xl md:text-8xl leading-none tracking-tight select-none"
            style={{ color: "#6B2D31" }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + index * 0.08, duration: 0.6 }}
        className="mt-5 text-[0.58rem] font-sans font-semibold uppercase tracking-[0.35em]"
        style={{ color: "rgba(107,45,49,0.55)" }}
      >
        {label}
      </motion.span>
    </div>
  );
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-24 pb-8">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-serif italic text-3xl md:text-4xl mb-8"
          style={{ color: "#6B2D31" }}
        >
          The Celebration Begins In
        </motion.p>

        <div className="mt-10 grid grid-cols-4 items-start justify-items-center gap-2 sm:gap-8">
          {UNITS.map(({ key, label }, index) => (
            <CountCell key={key} value={time[key]} label={label} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "4rem", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 h-[1px]"
          style={{ backgroundColor: "rgba(107,45,49,0.30)" }}
        />
      </div>
    </section>
  );
}
