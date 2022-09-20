import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.API_URL;

export const getAllFeedbacks = async () => {
  let allPins: AxiosResponse | false = false;
  try {
    allPins = await axios.get(`${baseUrl}/`);
  } catch (err) {
    console.log(err);
  }

  return allPins ? allPins.data : false;
};
