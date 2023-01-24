export interface IConfig{
  API_URL: string;
  GOOGLE_CLIENT_ID: string;
  STRIPE_PUBLISHABLE_KEY: string;
  TOKEN_NAME: string;
  ACCOUNT_HEADER: string;
}

export const Config: IConfig = {
  API_URL: process.env.API_URL as string,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  TOKEN_NAME: 'authorization',
  ACCOUNT_HEADER: 'account',
  STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY as string,
}