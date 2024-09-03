"use client";
import { motion } from "framer-motion";
import Artists from "@/components/organisms/Artists";
import EventList from "@/components/organisms/EventList";
import "../globals.css";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, scale: 1  }}
        className="w-full"
      >
        <section className="min-h-svh w-full flex flex-col gap-4 justify-around items-center">
          <EventList isAdmin={false} showButtons={false} />
        </section>
      </motion.div>
      <section className="h-96 flex flex-col w-10/12 gap-8 p-4 min-h-72a">
        <p className="text-xl text-center text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      <section className="w-10/12 min-h-svh">
        <Artists />
      </section>
    </>
  );
}
