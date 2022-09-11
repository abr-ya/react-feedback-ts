export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

export interface IFeedbackItem {
  id: number;
  rating: number;
  text: string;
}
