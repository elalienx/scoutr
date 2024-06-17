FROM ghcr.io/puppeteer/puppeteer:22.11.1
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]