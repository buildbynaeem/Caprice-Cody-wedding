import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const CRIMSON = "#7A0016";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

// Bottom-border-only input styling with crimson focus
const inputBaseStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #CCCCCC",
  outline: "none",
  padding: "10px 0",
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 300,
  fontSize: "0.9rem",
  color: "#222222",
  transition: "border-color 0.25s",
};

function Field({
  id,
  label,
  optional,
  children,
}: {
  id?: string;
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "0.65rem",
          letterSpacing: "0.35em",
          color: CRIMSON,
          textTransform: "uppercase",
        }}
      >
        {label}
        {optional && (
          <span
            style={{
              marginLeft: "0.5rem",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: "0.65rem",
              color: "#999999",
              textTransform: "none",
              letterSpacing: "0",
            }}
          >
            (Optional)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function FocusInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{
        ...inputBaseStyle,
        borderBottomColor: focused ? CRIMSON : "#CCCCCC",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholder={props.placeholder}
    />
  );
}

function FocusTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      rows={3}
      style={{
        ...inputBaseStyle,
        resize: "none",
        borderBottomColor: focused ? CRIMSON : "#CCCCCC",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

export function Rsvp() {
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="rsvp"
      className="scroll-mt-24 py-24 sm:py-32"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="mx-auto max-w-2xl px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center"
        >
          <p
            className="text-xs uppercase tracking-[0.45em]"
            style={{ fontFamily: "'Cinzel', serif", color: CRIMSON }}
          >
            Kindly Reply Below
          </p>
          <h2
            className="mt-4 text-5xl sm:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              color: "#222222",
              fontStyle: "italic",
            }}
          >
            RSVP
          </h2>
          <div
            className="mx-auto mt-5 h-px w-20"
            style={{
              background: `linear-gradient(to right, transparent, rgba(122,0,22,0.4), transparent)`,
            }}
          />
          <p
            className="mx-auto mt-6 max-w-sm text-sm leading-relaxed"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              color: "#555555",
            }}
          >
            We would be so honored to celebrate with you. Please let us know if you can join us.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.2}
          variants={fadeUp}
          className="mt-14"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            padding: "3rem 2.5rem",
          }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-10 text-center"
              >
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#FFF0F2" }}
                >
                  <Heart size={26} fill={CRIMSON} color={CRIMSON} />
                </div>
                <h3
                  className="mt-6 text-3xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "#222222",
                  }}
                >
                  Thank you
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    color: "#555555",
                  }}
                >
                  Your response has been received. We can't wait to celebrate with you.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -10 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-8"
              >
                {/* Name */}
                <Field id="rsvp-name" label="Full Name">
                  <FocusInput id="rsvp-name" required placeholder="Your name" />
                </Field>

                {/* Email */}
                <Field id="rsvp-email" label="Email Address">
                  <FocusInput
                    id="rsvp-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                  />
                </Field>

                {/* Attendance toggle */}
                <div className="flex flex-col gap-3">
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.35em",
                      color: CRIMSON,
                      textTransform: "uppercase",
                    }}
                  >
                    Attendance
                  </span>
                  <div className="flex gap-3">
                    {(["yes", "no"] as const).map((v) => {
                      const active = attending === v;
                      return (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setAttending(v)}
                          style={{
                            flex: 1,
                            padding: "0.75rem 1rem",
                            fontSize: "0.65rem",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            fontFamily: "'Cinzel', serif",
                            border: `1px solid ${active ? CRIMSON : "#DDDDDD"}`,
                            backgroundColor: active ? CRIMSON : "transparent",
                            color: active ? "#FFFFFF" : "#555555",
                            borderRadius: "4px",
                            cursor: "pointer",
                            transition: "all 0.25s",
                          }}
                          onMouseEnter={(e) => {
                            if (!active) {
                              (e.currentTarget as HTMLButtonElement).style.borderColor =
                                CRIMSON;
                              (e.currentTarget as HTMLButtonElement).style.color = CRIMSON;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!active) {
                              (e.currentTarget as HTMLButtonElement).style.borderColor =
                                "#DDDDDD";
                              (e.currentTarget as HTMLButtonElement).style.color = "#555555";
                            }
                          }}
                        >
                          {v === "yes" ? "Joyfully Attending" : "Regretfully Declining"}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Dietary restrictions */}
                <Field id="rsvp-dietary" label="Dietary Restrictions" optional>
                  <FocusTextarea
                    id="rsvp-dietary"
                    placeholder="e.g. vegetarian, gluten-free, nut allergy…"
                  />
                </Field>

                {/* Song request */}
                <Field id="rsvp-song" label="Song Request">
                  <FocusInput
                    id="rsvp-song"
                    placeholder="Artist – Song title"
                  />
                </Field>

                {/* Submit */}
                <SubmitButton />
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function SubmitButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        padding: "1.1rem 2rem",
        fontFamily: "'Cinzel', serif",
        fontSize: "0.65rem",
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        color: "#FFFFFF",
        backgroundColor: hovered ? CRIMSON : "#222222",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        marginTop: "0.5rem",
      }}
    >
      Send RSVP
    </button>
  );
}
