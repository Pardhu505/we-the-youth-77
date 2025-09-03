import React from "react";
import { IndiaMap } from "@vishalvoid/react-india-map";
import type { StateData } from "@vishalvoid/react-india-map";

export const InteractiveMap = () => {
  const stateData: StateData[] = [
    { id: "IN-AP", customData: { value: 10 } },
    { id: "IN-AR", customData: { value: 20 } },
    { id: "IN-AS", customData: { value: 30 } },
    { id: "IN-BR", customData: { value: 40 } },
    { id: "IN-CT", customData: { value: 50 } },
    { id: "IN-GA", customData: { value: 60 } },
    { id: "IN-GJ", customData: { value: 70 } },
    { id: "IN-HR", customData: { value: 80 } },
    { id: "IN-HP", customData: { value: 90 } },
    { id: "IN-JH", customData: { value: 100 } },
    { id: "IN-KA", customData: { value: 110 } },
    { id: "IN-KL", customData: { value: 120 } },
    { id: "IN-MP", customData: { value: 130 } },
    { id: "IN-MH", customData: { value: 140 } },
    { id: "IN-MN", customData: { value: 150 } },
    { id: "IN-ML", customData: { value: 160 } },
    { id: "IN-MZ", customData: { value: 170 } },
    { id: "IN-NL", customData: { value: 180 } },
    { id: "IN-OR", customData: { value: 190 } },
    { id: "IN-PB", customData: { value: 200 } },
    { id: "IN-RJ", customData: { value: 210 } },
    { id: "IN-SK", customData: { value: 220 } },
    { id: "IN-TN", customData: { value: 230 } },
    { id: "IN-TG", customData: { value: 240 } },
    { id: "IN-TR", customData: { value: 250 } },
    { id: "IN-UP", customData: { value: 260 } },
    { id: "IN-UT", customData: { value: 270 } },
    { id: "IN-WB", customData: { value: 280 } },
    { id: "IN-AN", customData: { value: 290 } },
    { id: "IN-CH", customData: { value: 300 } },
    { id: "IN-DN", customData: { value: 310 } },
    { id: "IN-DL", customData: { value: 320 } },
    { id: "IN-JK", customData: { value: 330 } },
    { id: "IN-LA", customData: { value: 340 } },
    { id: "IN-LD", customData: { value: 350 } },
    { id: "IN-PY", customData: { value: 360 } },
  ];

  return (
    <div className="w-full h-full">
      <IndiaMap
        stateData={stateData}
        mapStyle={{
          backgroundColor: "transparent",
          hoverColor: "#a3e635", // a lime green color
          stroke: "#ffffff",
          strokeWidth: 1,
        }}
      />
    </div>
  );
};
