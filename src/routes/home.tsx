import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";

import { Countdown } from "@/components/wedding/Countdown";
import { DestinationCalendar } from "@/components/wedding/DestinationCalendar";
import { VenueLocation } from "@/components/wedding/VenueLocation";


import { AudioPlayer } from "@/components/wedding/AudioPlayer";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden">
      <Hero />
      <div id="save-the-date" className="w-full min-h-screen bg-noise" style={{ backgroundColor: "#E3E8E3" }}>
        <Countdown />
        <DestinationCalendar />
        <VenueLocation />
      </div>

      <AudioPlayer />
    </main>
  );
}
