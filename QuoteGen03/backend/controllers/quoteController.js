import axios from "axios";

const quote = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    const { author, content } = response.data.data;
    res.status(200).json({
      message: "Data fetched successfully",
      author,
      content,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error occurred while fetching",
      error: error.message,
    });
  }
};

export default quote;
