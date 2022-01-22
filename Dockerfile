FROM node:17-alpine as builder

WORKDIR '/app'
COPY package.json .
RUN npm install 
COPY ./ ./

RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80