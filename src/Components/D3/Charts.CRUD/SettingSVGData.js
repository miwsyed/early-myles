import React, { useEffect } from "react";
import { getChartApi } from "./getChartAPi";
import * as d3 from "d3";

const SettingSVGData = (d3Chart) => {
  useEffect(() => {
    const APIResponse = async () => {
      const data = await getChartApi();
      console.log(data);
    };
    APIResponse();
  }, [d3Chart]);
  return <div></div>;
};

export default SettingSVGData;
