import React, { useState } from "react";
import "./DiagnosisHistory.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import VitalsCards from "../VitalCards/VitalsCards";
import { Line } from "react-chartjs-2"; // Import Line chart from react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosisHistory = () => {
  const [filter, setFilter] = useState("1year"); // State to manage the filter

  // Original data for the graph (Systolic vs Diastolic comparison)
  const fullData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Full year data
    datasets: [
      {
        label: "Systolic BP",
        data: [120, 125, 130, 128, 135, 140, 138, 145, 150, 160, 155, 148], // Systolic BP data for 12 months
        borderColor: "rgba(255, 99, 132, 1)", // Systolic line color
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Systolic line fill color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
      },
      {
        label: "Diastolic BP",
        data: [80, 82, 84, 85, 90, 92, 88, 86, 89, 95, 90, 92], // Diastolic BP data for 12 months
        borderColor: "rgba(54, 162, 235, 1)", // Diastolic line color
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Diastolic line fill color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Function to filter data based on the selected filter (Last 6 months or 1 year)
  const filterData = (filterOption) => {
    const currentMonth = new Date().getMonth(); // Get the current month (0-indexed)
    let labels = [];
    let systolicData = [];
    let diastolicData = [];

    if (filterOption === "6months") {
      // Last 6 months
      labels = fullData.labels.slice(currentMonth - 5, currentMonth + 1);
      systolicData = fullData.datasets[0].data.slice(
        currentMonth - 5,
        currentMonth + 1
      );
      diastolicData = fullData.datasets[1].data.slice(
        currentMonth - 5,
        currentMonth + 1
      );
    } else if (filterOption === "1year") {
      // Last 12 months (Full Year Data)
      labels = fullData.labels;
      systolicData = fullData.datasets[0].data;
      diastolicData = fullData.datasets[1].data;
    }

    return {
      labels,
      datasets: [
        {
          ...fullData.datasets[0],
          data: systolicData,
        },
        {
          ...fullData.datasets[1],
          data: diastolicData,
        },
      ],
    };
  };

  // Get the filtered data based on the selected filter
  const data = filterData(filter);

  // Find the highest values for Systolic and Diastolic
  const highestSystolic = Math.max(...data.datasets[0].data);
  const highestDiastolic = Math.max(...data.datasets[1].data);

  const options = {
    responsive: false,
    plugins: {
      // title: {
      //   display: true,
      //   text: "Systolic vs Diastolic Blood Pressure Over Time",
      // },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="diagnosis-history">
      <div className="Section1">
        <h4>Diagnosis History</h4>
        {/* Filter Buttons */}
        <div className="filter-options">
          {/* <p>Blood Pleasure</p> */}
          {/* <button onClick={() => setFilter("6months")}>Last 6 Months</button>
        <button onClick={() => setFilter("1year")}>Last 1 Year</button> */}
        </div>
        <div className="historySection2">
          <div className="graph">
            <Line data={data} options={options} /> {/* Chart.js Line chart */}
          </div>

          <div className="value-summary">
            <div className="value-item">
              <div className="rowFlex">
                <div
                  className="circle"
                  style={{ backgroundColor: "rgba(255, 99, 132, 1)" }}
                ></div>
                <div>
                  <p> Systolic</p>
                </div>
              </div>
              <p> {highestSystolic} </p>
              <div className="rowFlex">
                <FaAngleUp />
                <p className="smalltext">Higher than Average</p>
              </div>
            </div>
            <div className="horizontalLine"></div>
            <div className="value-item">
              <div className="rowFlex">
                <div
                  className="circle"
                  style={{ backgroundColor: "rgba(54, 162, 235, 1)" }}
                ></div>
                <div>
                  <p> Diastolic</p>
                </div>
              </div>
              <p>100 </p>
              <div className="rowFlex">
                <FaAngleDown />
                <p className="smalltext">Lower than Average</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VitalsCards />
    </div>
  );
};

export default DiagnosisHistory;
