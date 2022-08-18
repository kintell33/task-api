FROM node:16
WORKDIR /app
COPY . /app
RUN npm ci
EXPOSE 8001
CMD npm start