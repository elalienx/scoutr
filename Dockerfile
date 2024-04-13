FROM node:20-bookworm-slim
RUN npx -y playwright@1.43.0 install webkit --with-deps
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]