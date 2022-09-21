import axios, { AxiosResponse } from "axios";
import { INewFeedbackItem } from "interfaces";

const baseUrl = process.env.API_URL;

interface INormalizedResponse {
  data?: any;
  error?: string;
}

export const getAllFeedbacks = async () => {
  let AllFeedbacks: AxiosResponse | false = false;
  try {
    AllFeedbacks = await axios.get(`${baseUrl}/`);
  } catch (err) {
    console.log(err);
  }

  return AllFeedbacks ? AllFeedbacks.data : false;
};

export const addFeedbackRequest = async (item: INewFeedbackItem): Promise<INormalizedResponse> => {
  let answer: AxiosResponse;
  try {
    answer = await axios.post(`${baseUrl}/`, item);
  } catch (err) {
    console.log(err);
    return { error: err?.message };
  }

  return { data: answer.data };
};

export const deleteFeedbackRequest = async (id: string): Promise<INormalizedResponse> => {
  let answer: AxiosResponse;
  try {
    answer = await axios.delete(`${baseUrl}/${id}`);
  } catch (err) {
    return { error: err?.message, data: err?.response?.data };
  }

  return { data: answer.status };
};
