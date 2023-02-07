export interface IConfig{
  API_URL: string;
  USER: string;
}

export const Config: IConfig = {
  API_URL: process.env.API_URL as string,
  USER: 'user'
}