# Portfolio by Sector

## Introduction

Web app that allows users to visualize their stock portfolio by sectors, industries or countries.

## Run This Project

### Live Preview

You can access the live demo [here](http://portfolio-by-sector.herokuapp.com/).

### Run Locally

1. Start Stocks Scraper Api Server

   [Here](https://github.com/Akkisdiary/stocks-scraper) is a Python Flask backend which exposes RESTfull endpoints used by this project. Feel free to clone that project and run it locally.

   > You can always modify the REACT_APP_REMOTE env variable in `.env.development` file to point to the server's hostname and port.

2. Run React App

   Install React Dependencies

   ```bash
   npm install
   ```

   Start Server

   ```bash
   npm start
   ```

## Test

Run tests

```bash
npm run test
```
