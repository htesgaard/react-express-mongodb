
# Example

## Prerequsite
npm install -g express-mongoose-generator

## Generate code

Generate code using [express-mongoose-generator](https://github.com/DamienP33/express-mongoose-generator)

```bash
cd backend

mongoose-gen -m clients -f clientID:number,firstName:string,lastName:string,streetAddress:string,city:string -r
        create: ./models
        create: ./routes
        create: ./controllers
        create: ./models/clientsModel.js
        create: ./routes/clientsRoutes.js
        create: ./controllers/clientsController.js

mongoose-gen -m reservations -f reservationID:number,clientID:number,date:date,hotelName:string,price:number,balance:number -r
        create: ./models/reservationsModel.js
        create: ./routes/reservationsRoutes.js
        create: ./controllers/reservationsController.js
```

```bash
mongoose-gen -m clients -f reservationID:number,clientID:number,date:date,hotelName:string,price:number,balance:number -r

```


## Start/stop application

### Start

`docker-compose up -d`

### Stop

`docker-compose stop`




