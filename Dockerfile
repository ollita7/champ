### STAGE 1: Build ###
FROM node:12.7-alpine AS build
ARG API_URL
ARG GOOGLE_CLIENT_ID

WORKDIR /home
COPY api/ ./api/
COPY web/ ./web/
COPY package*.json ./
COPY setup_env.sh ./

RUN sh setup_env.sh 

RUN npm i -g typescript && \
    npm i -g kiwi-server-cli && \
    npm i -g typeorm && \
    npm run install && \
    npm run compile-api && \
    npm run compile-web-prod
COPY . .

### STAGE 2: Run ###
FROM nginx:1.19.1-alpine
WORKDIR /app
RUN apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/main libuv \
    && apk add nodejs npm \
    && apk add bash \ 
    && npm i -g forever 
COPY package*.json ./
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /home/api ./api
COPY --from=build /home/web/build /usr/share/nginx/html