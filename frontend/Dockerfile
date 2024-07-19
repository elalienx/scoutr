FROM node:20-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
 # CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
 # Note: The CMD command runs on the Docker Composer file to handle all the project images and on the GitHub Actions CI pipeline file.