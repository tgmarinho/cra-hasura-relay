# Trying Hasura + Relay and React.

> Experimental project

## Running

Start Postgres Container

```
docker start postgres
```

Before to run, check the information in the file, the credentials is the same for your database.

Pay attention here:
host.docker.internal - For MacOS database local
other SO: more details: https://hasura.io/docs/1.0/graphql/manual/deployment/deployment-guides/docker.html#network-config

```
docker-compose up -d
```

For instance, create the table members, in the [console](http://localhost:8080/console)

Then you can do some queries, using [graphql](http://localhost:8080/v1/graphql) pure and [relay api](http://localhost:8080/v1beta1/relay).

You can use Insomnia to do queries as well.

### Web

install dependencies

```
yarn
```

Grabbing the schema from api

```
yarn update-schema
```

Generate queries

```
yarn relay
```

Start app

```
yarn start
```

## Issues

When I was trying Relay API, I got a problem, I've created two members, but when I was querying members, I received the same person: 2 - Carla, 2 - Carla twice, instead of 1 - Thiago, 2 - Carla. I don't know why yet.

## Reference project

I followed this [repo](https://github.com/renanmav/hasura-relay-example) for learning somethings about relay.
