require('dotenv').config();
export const environment = {
  name: 'prod',
  googleSecret: process.env.GOOGLE_SECRET
}