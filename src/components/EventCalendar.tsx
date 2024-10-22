"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsuim dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Lorem ipsuim dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Lorem ipsuim dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet",
  },
];
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value}></Calendar>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image
          src={"/moreDark.png"}
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((e) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-SkyNormal even:border-t-PurpleNormal"
            key={e.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{e.title}</h1>
              <span className="text-gray-300 text-xs">{e.time}</span>
            </div>
            <p className="mt-2 text-gray-200 text-sm">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
