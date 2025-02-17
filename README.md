# sip expressapi sabon

Express based REST API sablon

## Install

```cmd
npm install
```

## Copy config file

Copy **config/default.json.example** to **config/default.json** file.

## APP KEY generation

Run the genkey tools:

```cmd
node tools/genkey.js
```

## Database settings

The database settings can be found at the following location:

* config/default.json

### Database dialect

The default database is an in-memory database. Its contents are cleared after the server is restarted.

One of:

* sqlite
* mariadb

After installing the appropriate dependencies, it can be used:

* mysql
* postgres
* mssql
* db2
* snowflake
* oracle

With the `sqlite` option, the database is stored in the `database.sqlite` file, or you can add :memory:, then the database is stored in memory.

## Starting

For development:

```cmd
npm run dev
```

Run productum:

```cmd
npm start
```

## Licence

May be freely distributed under the MIT license.

Copyright (c) 2023 Sallai András
