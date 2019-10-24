import React from "react";
import { Radar } from "react-chartjs-2";

const options = {
  plugins: {
    scrollingBar: { enabled: true }
  },
  legend: {
    position: "top"
  },
  title: {
    display: true,
    text: "My Player"
  },
  scale: {
    ticks: {
      min: 0,
      max: 10,
      beginAtZero: true
    }
  }
};
const data = {
  labels: [
    ["Shooting"],
    ["Dribbling"],
    ["Defense"],
    ["Grit"],
    ["Work Ethic"],
    ["Rebounds"]
  ],
  datasets: [
    {
      label: "Rodney King OVERALL 83",
      data: [7, 6.9, 6, 8, 6, 8],
      background: "rgb(34,174,195)",
      // background:"radial-gradient(circle, rgba(34,174,195,1) 19% rgba(45,247,253,0.40800070028011204) 100%)",
      borderColor: "blue",
      pointBorderWidth: "40px"
    },
    {
      label: " Will koppenhaver OVERALL 81",
      data: [7, 8, 8, 6, 5, 7],
      background: "rgb(134,14,125)",
      // backgroundColor: "green",
      borderColor: "red",
      FontSize: 18
    },
    {
      label: " Team Overall 90",
      data: [9, 10, 10, 4, 7, 9],
      background: "rgb(134,14,125)",
      // backgroundColor: "green",
      borderColor: "Green",
      FontSize: 18
    }
  ]
};
export default class BasketRadar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Radar options={options} data={data} />
      </div>
    );
  }
}
