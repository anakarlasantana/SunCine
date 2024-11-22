export interface Payload {
  id: string;
  login: string;
  name: string;
}

export interface ME {
  status: string;
  payload: Payload;
}
