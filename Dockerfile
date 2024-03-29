FROM node:20-bookworm
RUN npx -y playwright@1.42.1 install webkit --with-deps
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]