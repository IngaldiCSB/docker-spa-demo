FROM node:10.12-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY ./src/config/config.json.template ./src/config/config.json 
RUN npm run build

FROM nginx:1.13.12-alpine AS serve
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/run.sh ./run.sh
EXPOSE 80
CMD chmod +x run.sh && ./run.sh