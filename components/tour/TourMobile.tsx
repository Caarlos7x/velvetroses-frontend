"use client";

import React from "react";
import ListNameModal from "@/components/modal/ListNameModal";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";

interface Show {
  event: string;
  date: string;
  venue: string;
  location: string;
  deadline: string;
  discount?: number;
  price?: number; // ✅ Corrigido para opcional
}

const shows: Show[] = [
  {
    date: "02 de Abril, Quarta-feira, 2025",
    event: "Willi Willie Bar e Arquearia",
    venue: "Alameda dos Pamaris, 30",
    location: "Moema, SP",
    deadline: "2025-04-02T22:00:00",
    discount: 33,
  },
  {
    date: "18 de Maio, Sábado, 2025",
    event: "Blackbird Rock Beer",
    venue: "Rua Carijós, 131",
    location: "Santo André, SP",
    deadline: "2025-05-18T22:00:00",
    discount: 0,
    price: 10,
  },
];

export default function SimpleShowList() {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12 text-white">
      <h2 className="text-2xl font-bold text-center mb-8">Shows</h2>

      <div className="flex flex-col gap-6">
        {shows.map((show, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="flex flex-col border border-gray-700 rounded-lg p-4 bg-black/30 shadow-md"
          >
            <div className="mb-4 space-y-1">
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <FaCalendarAlt className="text-yellow-300" />
                {show.date}
              </p>
              <p className="text-lg font-bold">{show.event}</p>
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <FaMapMarkerAlt className="text-blue-300" />
                {show.venue}
              </p>
              <p className="flex items-center gap-2 text-sm text-yellow-400">
                <FaLocationArrow className="text-yellow-400" />
                {show.location}
              </p>

              {show.discount !== undefined && show.discount > 0 && (
                <p className="text-green-400 text-sm font-semibold pt-1">
                  {show.discount}% de desconto até{" "}
                  {new Date(show.deadline).toLocaleDateString("pt-BR")}
                </p>
              )}
            </div>

            <div className="mt-2 flex justify-center">
              <ListNameModal
                eventName={show.event}
                eventDate="2025-04-02"
                eventTime="22:00"
                eventLocation="Alameda dos Pamaris, 30 - Moema, SP"
                deadline={show.deadline}
                discount={show.discount}
                customButtonClass="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded shadow-md hover:shadow-lg transition"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}