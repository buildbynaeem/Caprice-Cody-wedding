import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#FAF9F7" }}
      className="pt-6 pb-10 px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto max-w-lg flex flex-col items-center gap-6"
      >
        {/* Divider — wider, subtle crimson */}
        <div
          className="h-px"
          style={{
            width: "30%",
            background:
              "linear-gradient(to right, transparent, rgba(122,0,22,0.3), transparent)",
          }}
        />

        {/* Send-off message */}
        <p
          className="text-lg sm:text-xl leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#3D3D3D",
          }}
        >
          We can't wait to celebrate with you.
        </p>

        {/* Couple's names — fine-line calligraphy signature */}
        <p
          className="text-4xl sm:text-5xl"
          style={{
            fontFamily: "'Alex Brush', cursive",
            color: "#7A0016",
            lineHeight: 1.3,
            fontWeight: 400,
          }}
        >
          Caprice &amp; Cody
        </p>

        {/* Agency credit */}
        <a
          href="https://www.instagram.com/zylo.invites"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.45em] transition-opacity duration-300 hover:opacity-60"
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#888880",
            textDecoration: "none",
          }}
        >
          Custom Built by Zylo Invites
        </a>
      </motion.div>
    </footer>
  );
}
