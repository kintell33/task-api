# HOW TO RUN?

## USING DOCKER-COMPOSE
In this case we create a multicontainer docker file (docker-compose) for easy run and test.

### Run redis

We dont need to build this image cause its directly build by the image definition in dockerhub

```
docker-compose up -d redis
```

### Build application

First we need to build the image with the docker-compose file using this command

```
docker-compose build app
```

### Run the application

Now we can run the application using this command

```
docker-compose up -d app
```

--------------------------------------------

## USING NPM

### First install all dependecies

```
npm ci
```
> Better using the `npm ci` command for using the exact version of the dependencies stablished in the package-lock

### Create environment file

You have to create an environment file named `.env` using the `.env.dist` as an example, dont upload the variables in the original `.env` to the repository!

> Important, if you dont have installed a REDIS SERVER use the docker-compose for testing

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

