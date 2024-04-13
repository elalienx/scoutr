FROM node:20-bookworm-slim
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

# Development mode
CMD ["npm", "run", "dev"]

# Testing mode
CMD ["npm", "run", "test_once"]
