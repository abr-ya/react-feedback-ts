export interface IUser {
  userId: string;
  userName: string;
  ava: string;
  email: string;
}

export interface INewFeedbackItem {
  rating: number;
  text: string;
  user?: string;
  userId?: string;
  ava?: string;
}

export interface IFeedbackItem extends INewFeedbackItem {
  id: string;
}

// google answer
interface Wt {
  NT: string;
  Ad: string;
  rV: string;
  uT: string;
  hK: string;
  cu: string;
}

interface ExtraQueryParams {
  authuser: string;
}

interface SessionState {
  extraQueryParams: ExtraQueryParams;
}

interface TokenObj {
  token_type: string;
  access_token: string;
  scope: string;
  login_hint: string;
  expires_in: number;
  id_token: string;
  session_state: SessionState;
  first_issued_at: number;
  expires_at: number;
  idpId: string;
}

interface ProfileObj {
  googleId: string;
  imageUrl: string;
  email: string;
  name: string;
  givenName: string;
  familyName: string;
}

export interface IGoogleRespone {
  googleId: string;
  accessToken: string;
  Ca: string;
  xc: string | null;
  wt: Wt;
  tokenObj: TokenObj;
  tokenId: string;
  profileObj: ProfileObj;
}
