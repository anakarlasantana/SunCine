export interface AUTH {
  status: string;
  payload: {
    token: string;
    user: {
      id: string;
      login: string;
      name: string;
    };
  };
}
