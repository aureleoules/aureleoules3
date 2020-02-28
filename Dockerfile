FROM node:slim as builder

WORKDIR /tmp/app

COPY . .

RUN yarn
RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /tmp/app/build /usr/share/nginx/html

EXPOSE 80

