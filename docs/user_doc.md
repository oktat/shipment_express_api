# User documentation

## Install dependencies

```cmd
pnpm install
```

## Copy config file

Copy **config/default.json.example** to **config/default.json** file.

## App key generation

```cmd
node tools/genkey.js
```

## Database setup

Edit the config/default.json file.

## Endpoints

All endpoint have a /api prefix.

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| /register | POST  | no |  create user |
| /login    | POST  | no |  login  |
| /users    | GET   | yes |  read users |
| /shipments | GET | no | read shipments |
| /shipments | POST | yes | create shipment |
| /shipments | PUT | yes | update shipment |
| /shipments | DELETE | yes | delete shipment |

## The register endpoint

```json
{
    "name": "joe",
    "email": "joe@green.lan",
    "password": "secret",
    "password_confirmation": "secret"
}
```

## The login endpoint

```json
{
    "name": "joe",
    "password": "secret"
}
```

You receive the bearear token with accessToken key.

## The users endpoint

Send the bearer token.

* `Authorization: Bearer <token>`

Endpoint: /api/users

## Get all shipments

Endpoint: /api/shipments

## Create a shipment

Send the bearer token.

* `Authorization: Bearer <token>`

Endpoint: /api/shipments

Data example in JSON:

```json
{
    "shipmentId": 1,
    "sentDate": "2023-01-01",
    "endDate": "2023-01-01",
    "addressee": "joe",
    "targetCity": "Budapest"
}
```

## Update a shipment

Send the bearer token.

* `Authorization: Bearer <token>`

Endpoint: /api/shipments/:id

Example endpoint: /api/shipments/1

Data example in JSON:

```json
{
    "shipmentId": 1,
    "sentDate": "2023-01-01",
    "endDate": "2023-01-01",
    "addressee": "joe",
    "targetCity": "Budapest"
}
```

## Delete a shipment

Send the bearer token.

* `Authorization: Bearer <token>`

Endpoint: /api/shipments/:id

Example endpoint: /api/shipments/1
