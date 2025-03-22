# Portfolio Allocation

[![Netlify Status](https://api.netlify.com/api/v1/badges/8e9c4a08-d3fb-4a71-a530-6c778b0b2b08/deploy-status)](https://app.netlify.com/sites/portfolio-allocation/deploys)

Visualize equity allocations by sector, country, and currency with live global market stock prices. Built Using [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/).


![app screenshot](/assets/Screenshot.png "App Screenshot")

## Live Preview
Access the live demo [here](https://portfolio-allocation.netlify.app/).

## Run Locally
- Start Backend Api Server: [Here](https://github.com/Akkisdiary/stocks-scraper) is a Python Flask back-end which exposes RESTfull endpoints used by this project. Feel free to clone that project and run it locally.  You can modify the `REACT_APP_REMOTE` env variable in `.env.development` file to point to the server.
- Install Node Dependencies : `npm install`
- Start Server: `npm start`

OR

- Run in docker: `docker compose up -d`

## Test
```bash
npm run test
```
