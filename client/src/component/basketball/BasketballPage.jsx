// import React from "react";
// import { Radar } from "react-chartjs-2";

// const options = {
//   plugins: {
//     scrollingBar: { enabled: true }
//   },
//   legend: {
//     position: "top"
//   },
//   title: {
//     display: true,
//     text: "My Player"
//   },
//   scale: {
//     ticks: {
//       min: 0,
//       max: 10,
//       beginAtZero: true
//     }
//   }
// };
// const data = {
//   labels: [
//     ["Eating", "Dinner"],
//     ["Drinking", "Water"],
//     "Sleeping",
//     ["Designing", "Graphics"]
//   ],
//   datasets: [
//     {
//       label: "My Player",
//       data: [0, 1, 2, 3]
//     },
//     {
//       label: "The other Player",
//       data: [0, 1, 2, 3]
//     }
//   ]
// };
// export default class BasketRadar extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <Radar options={options} data={data} />
//       </div>
//     );
//   }
// }
