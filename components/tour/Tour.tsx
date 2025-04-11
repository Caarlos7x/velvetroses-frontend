"use client";

import React from "react";
import ListNameModal from "@/components/modal/ListNameModal";
import { FaMapMarkedAlt, FaWaze } from "react-icons/fa";

interface Show {
  event: string;
  date: string;
  venue: string;
  location: string;
  deadline: string;
  discount?: number;
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
  // {
  //   date: "26 de Abril, Sábado, 2025",
  //   event: "Hot Pub SA",
  //   venue: "Av. Arthur de Queiroz, 75",
  //   location: "Santo André, SP",
  //   deadline: "2025-04-26T22:00:00",
  //   discount: 0,
  // },
  // {
  //   date: "10 de Maio, Sábado, 2025",
  //   event: "Blackbird Rock Beer",
  //   venue: "Rua Carijós, 131",
  //   location: "Santo André, SP",
  //   deadline: "2025-05-10T22:00:00",
  //   discount: 0,
  // },
];

export default function WorldTourAgenda() {
  return (
    <section className="text-white px-4 py-12 min-h-[300px] w-full">
      <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-6 border-b border-gray-700 pb-2 text-center">
        Shows
      </h2>

      <ul className="flex flex-col space-y-6">
        {shows.map((show, index) => {
          const mapsQuery = encodeURIComponent(`${show.venue}, ${show.location}`);
          const googleMapsLink = `https://www.google.com/maps?q=${mapsQuery}`;
          const wazeLink = `https://waze.com/ul?q=${mapsQuery}`;

          return (
            <li
              key={index}
              className="w-full max-w-md mx-auto flex flex-col gap-4 border-b border-gray-700 pb-4 md:max-w-full md:flex-row md:justify-between md:items-center">
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-400">{show.date}</p>
                <p className="text-lg font-bold whitespace-pre-line">{show.event}</p>
                <p className="font-semibold text-sm text-gray-400">{show.venue}</p>
                <p className="text-yellow-400 text-sm">{show.location}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-xs">
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-300 hover:underline"
                  >
                    <FaMapMarkedAlt className="text-xs" />
                    <span className="text-xs">Google Maps</span>
                  </a>
                  <a
                    href={wazeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-purple-300 hover:underline"
                  >
                    <FaWaze className="text-xs" />
                    <span className="text-xs">Waze</span>
                  </a>
                </div>
              </div>

              <div className="w-full md:w-auto flex justify-center md:justify-end">
                <ListNameModal
                  deadline={show.deadline}
                  discount={show.discount}
                  customButtonClass="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded shadow-md hover:shadow-lg transition"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}