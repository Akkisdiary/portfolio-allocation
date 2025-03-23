FROM node:23.10.0-alpine

ARG REACT_APP_API_ORIGIN

ENV REACT_APP_API_ORIGIN $REACT_APP_API_ORIGIN 

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/

RUN npm install

COPY . .

RUN npx update-browserslist-db@latest && \
    npm run build

RUN npm install --global serve

EXPOSE 5000

CMD ["serve", "-p", "5000", "build"]
