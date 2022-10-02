import axios, { AxiosResponse } from "axios";
import { IFeedbackItem, INewFeedbackItem } from "interfaces";

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

  // перед возвратом сортируем по убыванию, чтобы последний отзыв был сверху
  return AllFeedbacks ? AllFeedbacks.data.sort((a, b) => (a.id > b.id ? -1 : 1)) : false;
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

export const updateFeedbackRequest = async (item: IFeedbackItem): Promise<INormalizedResponse> => {
  let answer: AxiosResponse;
  try {
    answer = await axios.put(`${baseUrl}/${item.id}`, item);
  } catch (err) {
    console.log(err);
    return { error: err?.message };
  }

  return { data: answer.data };
};

export const deleteFeedbackRequest = async (id: number): Promise<INormalizedResponse> => {
  let answer: AxiosResponse;
  try {
    answer = await axios.delete(`${baseUrl}/${id}`);
  } catch (err) {
    return { error: err?.message, data: err?.response?.data };
  }

  return { data: answer.status };
};
