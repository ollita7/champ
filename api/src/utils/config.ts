require('dotenv').config();

interface IConfig {
  STRIPE_SECRET_KEY: string;
}

export const config: IConfig = {
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
}