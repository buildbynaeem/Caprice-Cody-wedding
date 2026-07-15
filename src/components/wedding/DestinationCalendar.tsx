import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, Globe, Download, Mail } from "lucide-react";

const WEDDING_DATE = new Date("2026-08-08T00:00:00");

function generateGoogleCalendarUrl() {
  const start = WEDDING_DATE.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const end = new Date(WEDDING_DATE.getTime() + 24 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const title = encodeURIComponent("Marlene & Hytham's Wedding");
  const details = encodeURIComponent("Join us to celebrate Marlene & Hytham's wedding!");
  const location = encodeURIComponent("Jardin Des Lys, Faitroun");
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}`;
}

function generateICSFile() {
  const formatICSDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  };
  const start = formatICSDate(WEDDING_DATE);
  const end = formatICSDate(new Date(WEDDING_DATE.getTime() + 24 * 60 * 60 * 1000));
  const uid = `${Date.now()}@wedding-website`;
  
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Website//EN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    "SUMMARY:Marlene & Hytham's Wedding",
    "DESCRIPTION:Join us to celebrate Marlene & Hytham's wedding!",
    "LOCATION:Jardin Des Lys, Faitroun",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "marlene-hytham-wedding.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function generateOutlookUrl() {
  return generateGoogleCalendarUrl().replace("calendar.google.com/calendar/render", "outlook.live.com/calendar/0/deeplink/compose");
}

export function DestinationCalendar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (type: "google" | "apple" | "outlook") => {
    setIsOpen(false);
    switch (type) {
      case "google":
        window.open(generateGoogleCalendarUrl(), "_blank");
        break;
      case "apple":
        generateICSFile();
        break;
      case "outlook":
        window.open(generateOutlookUrl(), "_blank");
        break;
    }
  };

  return (
    <section className="relative pt-8 pb-24 px-6 flex flex-col items-center text-center">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.62rem] font-sans font-semibold uppercase tracking-[0.3em] opacity-80 mb-6"
          style={{ color: "#6B2D31" }}
        >
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-script text-[12vw] md:text-8xl font-normal whitespace-nowrap"
          style={{ color: "#6B2D31" }}
        >
       Save The Date
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic text-xl mt-4 mb-12"
          style={{ color: "#6B2D31" }}
        >
          Saturday, August 8, 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 px-8 py-3 rounded-full border border-[#6B2D31] bg-transparent text-[#6B2D31] font-sans transition-all duration-200 hover:bg-[#6B2D31]/10"
          >
            <Calendar className="w-5 h-5" />
            <span>Add to Calendar</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/80 backdrop-blur-md border border-[#6B2D31]/20 rounded-2xl shadow-xl overflow-hidden z-50"
              >
                <div className="py-1 p-1">
                  <button
                    onClick={() => handleOptionClick("google")}
                    className="w-full px-4 py-3 text-left text-[#6B2D31] font-sans rounded-xl flex items-center transition-all duration-300 hover:bg-[#6B2D31]/10 hover:pl-5"
                  >
                    <Globe className="w-4 h-4 mr-3" />
                    Google Calendar
                  </button>
                  <button
                    onClick={() => handleOptionClick("apple")}
                    className="w-full px-4 py-3 text-left text-[#6B2D31] font-sans rounded-xl flex items-center transition-all duration-300 hover:bg-[#6B2D31]/10 hover:pl-5"
                  >
                    <Download className="w-4 h-4 mr-3" />
                    Apple (ICS)
                  </button>
                  <button
                    onClick={() => handleOptionClick("outlook")}
                    className="w-full px-4 py-3 text-left text-[#6B2D31] font-sans rounded-xl flex items-center transition-all duration-300 hover:bg-[#6B2D31]/10 hover:pl-5"
                  >
                    <Mail className="w-4 h-4 mr-3" />
                    Outlook
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
