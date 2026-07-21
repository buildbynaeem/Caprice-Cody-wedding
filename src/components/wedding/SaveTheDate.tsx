import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GCAL_URL =
  "https://www.google.com/calendar/render?action=TEMPLATE" +
  "&text=Caprice+%26+Cody+Wedding" +
  "&dates=20280229T160000/20280229T220000" +
  "&details=Join+us+in+celebrating+the+wedding+of+Caprice+%26+Cody!" +
  "&location=Catalina+Island%2C+California" +
  "&sf=true&output=xml";

function downloadICS() {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Caprice & Cody Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "DTSTART:20280229T160000",
    "DTEND:20280229T220000",
    "SUMMARY:Caprice & Cody Wedding",
    "DESCRIPTION:Join us in celebrating the wedding of Caprice & Cody!",
    "LOCATION:Catalina Island, California",
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "caprice-cody-wedding.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true"
      style={{ transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

const rowStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#1A1A1A",
  fontFamily: "'Cinzel', serif",
  fontSize: "0.65rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
};

export function SaveTheDate() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <section style={{ backgroundColor: "#FAF9F7" }} className="py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto max-w-xl flex flex-col items-center gap-6"
      >
        <h2
          className="text-5xl sm:text-6xl leading-tight"
          style={{ fontFamily: "'Alex Brush', cursive", color: "#7A0016", fontWeight: 400 }}
        >
          Save The Date
        </h2>

        <div
          className="h-px"
          style={{
            width: "28%",
            background: "linear-gradient(to right, transparent, rgba(122,0,22,0.3), transparent)",
          }}
        />

        <p
          className="text-xl sm:text-2xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#7A0016",
            letterSpacing: "0.04em",
          }}
        >
          Tuesday, February 29, 2028
        </p>

        {/* Button + dropdown container */}
        <div ref={ref} className="relative mt-2 flex flex-col items-center">
          {/* Main button */}
          <button
            id="add-to-calendar-btn"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300"
            style={{
              border: "1px solid #7A0016",
              color: open ? "#FFFFFF" : "#7A0016",
              backgroundColor: open ? "#7A0016" : "transparent",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            <CalendarIcon />
            Add to Calendar
            <ChevronIcon open={open} />
          </button>

          {/* Dropdown — plain div handles positioning, motion.div handles animation */}
          <AnimatePresence>
            {open && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "220px",
                  zIndex: 50,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(122,0,22,0.15)",
                    borderRadius: "14px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                    overflow: "hidden",
                  }}
                >
                  {/* Google Calendar */}
                  <a
                    href={GCAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-3 px-5 py-3.5 transition-colors duration-200 hover:bg-[#FAF9F7]"
                    style={rowStyle}
                  >
                    <GoogleIcon />
                    Google Calendar
                  </a>

                  <div style={{ height: "1px", backgroundColor: "rgba(122,0,22,0.08)", margin: "0 16px" }} />

                  {/* Apple Calendar */}
                  <button
                    onClick={() => { downloadICS(); setOpen(false); }}
                    className="w-full flex items-center justify-center gap-3 px-5 py-3.5 transition-colors duration-200 hover:bg-[#FAF9F7]"
                    style={{ ...rowStyle, background: "none", border: "none", cursor: "pointer" }}
                  >
                    <AppleIcon />
                    Apple Calendar
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
