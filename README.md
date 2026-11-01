# COVID-19 API

This Express backend serves the existing `covid.json` dataset from the project root.

## Install

```sh
npm install
```

## Run

```sh
npm start
```

The API listens on port `3000` by default. Set `PORT` to use a different port.
The `GET /api/covid` endpoint returns the dataset as a JSON array, and allows
requests from the Vite development server at `http://localhost:5173`.

```sh
curl http://localhost:3000/api/covid
```
