# HOW TO RUN?

## USING NPM

### First install all dependecies

```
npm ci
```
> Better using the `npm ci` command for using the exact version of the dependencies stablished in the package-lock

### Create environment file

You have to create an environment file named `.env` using the `.env.dist` as an example, dont upload the variables in the original `.env` to the repository!

### Run the application

You can run the app with

```
npm start
```

Or if you want to do some work here, better use

```
npm run dev
```

> In this last case the `index.js` will start with nodemon, if a change is detected you will see an auto refresh and you dont have to restart the app for development or testing purposes

-------------------------------------------------

## USING DOCKER

### Create environment file

You have to create an environment file named `.env` using the `.env.dist` as an example, dont upload the variables in the original `.env` to the repository!

### Create the docker image

First you have to create the docker image using the next command

> Feel free to change the tag name `task-api` to any name you prefer

```
docker build -t task-api:latest .
```

### Run the application

Run the application with the next command

> Important! you can change the following: 
> `-d` start as dettached
> `--name` name for the container when you run `docker ps`
> `-p` ports, fist the port in your host and then the port expose by the app

Dont forget the last property is the name of the tag

```
docker run -d --name task-api -p 8001:8001 task-api:latest
```