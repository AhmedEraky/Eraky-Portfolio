FROM node:current-alpine3.10 as build-stage

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
ARG configuration=prod
RUN npm run build -- --output-path=./dist/out

FROM nginx:1.15
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
