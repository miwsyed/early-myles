import axios from "axios";

export const getChartApi = async () => {
  try {
    const response = await axios.get(
      "https://data.cityofnewyork.us/resource/tg4x-b46p.json"
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
