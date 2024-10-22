"use client";
import React from "react";
import "react-calendar/dist/Calendar.css";

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
const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-sm text-gray-400 cursor-pointer">View all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {events.map((i) => (
          <div className="bg-SkyLight rounded-md p-4" key={i.id}>
            <div className="flex items-center justify-between">
              <h2>{i.title}</h2>
              <span className="text-xs text-gray-400">{i.time}</span>
            </div>
            <p className="text-sm text-gray-400">{i.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
