"use client";
import { count } from "console";
import Image from "next/image";
import React from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#C3EBFA",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};
const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/*Title*/}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Student</h1>
        <Image
          src={"/moreDark.png"}
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      {/*Chart*/}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={30}
            data={data}>
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/maleFemale.png"}
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/*Bottom*/}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-SkyNormal rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-YellowNormal rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
