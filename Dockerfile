FROM node:17-alpine as builder

RUN mkdir /root/.ssh/

COPY id_rsa /root/.ssh/id_rsa

RUN chmod 600 /root/.ssh/id_rsa

RUN touch /root/.ssh/known_hosts

RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

WORKDIR '/app'
COPY package.json .
RUN npm install 
COPY ./ ./

RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80