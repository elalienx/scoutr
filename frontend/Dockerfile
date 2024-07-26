FROM node:20-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
 # CMD ["npm", "run", "dev"]
 # Note: The CMD command runs on Docker Composer to handle all the project images and on the GitHub Actions for CI