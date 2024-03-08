import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

import "./App.css";

import trapC_test3 from "./trapC_test3.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const App = () => {
  return (
    <div className="App">
      <div className="dataCard">
        <Line
          data={{
            labels: trapC_test3.map((data) => data.time),
            datasets: [
              {
                label: "Yaw",
                data: trapC_test3.map((data) => data.legPitch),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Roll",
                data: trapC_test3.map((data) => data.legRoll),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Line Chart",
              },
            },
          }}
        />
      </div>

      <div className="dataCard">
        <Bar
          data={{
            labels: trapC_test3.map((data) => data.time),
            datasets: [
              {
                label: "Yaw",
                data: trapC_test3.map((data) => data.legYaw),
                backgroundColor: [
                  "#064FF0",
                ],
                borderRadius: 5,
              },
              {
                label: "Roll",
                data: trapC_test3.map((data) => data.legRoll),
                backgroundColor: [
                  "#FF3030",
                ],
                borderRadius: 5,
              }
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Bar Chart",
              },
            },
          }}
        />
      </div>
    </div>
  );
};