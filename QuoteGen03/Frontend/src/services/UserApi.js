import axios from "axios";

const quote = async (endpoint) => {
  const url = "http://localhost:5000";
  try {
    const response = await axios.get(`${url}/${endpoint}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Error occurred");
    } else {
      throw new Error("Network issue");
    }
  }
};
export default quote;
