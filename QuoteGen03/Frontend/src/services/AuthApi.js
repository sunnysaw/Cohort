import axios from "axios";

const server_Url = "http://localhost:5000/";
const AuthApi = async (endpoint , userData) => {
  try {
    const { data } = await axios.post(`${server_Url}${endpoint}`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    if (error.message) {
      throw new Error(error.message.data.message || "Error occur")
    }
    else {
      throw new Error("Network Error")
    }
  }
};
export default AuthApi;
