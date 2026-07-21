import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { CountdownTimer } from "@/components/wedding/CountdownTimer";
import { Details } from "@/components/wedding/Details";
import { Gallery } from "@/components/wedding/Gallery";
import { Rsvp } from "@/components/wedding/Rsvp";
import { SaveTheDate } from "@/components/wedding/SaveTheDate";
import { Footer } from "@/components/wedding/Footer";
import { AudioPlayer } from "@/components/wedding/AudioPlayer";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden">
      <Hero />
      <CountdownTimer />
      <Details />
      <SaveTheDate />
      <Gallery />
      <Rsvp />
      <Footer />
      <AudioPlayer />
    </main>
  );
}
