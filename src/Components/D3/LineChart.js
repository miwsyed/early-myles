import React, { useRef } from "react";
import * as d3 from "d3";
import "./LineChart.css";
import SettingSVGData from "./Charts.CRUD/SettingSVGData";
const LineChart = () => {
  const d3Chart = useRef();
  SettingSVGData(d3Chart);

  return (
    <div id="d3demo">
      <svg ref={d3Chart}></svg>
    </div>
  );
};

export default LineChart;
