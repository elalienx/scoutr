# Meet Scoutr

Your LinkedIn Headhunter Companion

## About

Scoutr  web app allows recruiters to create summaries of the canddiates they are scouting on LinkedIn by copy and paste their profile links.
To see a product tour check this YouTube video: [https://youtu.be/Da8lH9Z1e-4](https://youtu.be/Da8lH9Z1e-4)

## Installation

1. Clone this Git repository into your computer.
1. Install Docker. I recommend using [Docker Desktop](https://www.docker.com/products/docker-desktop/) to setup everything for you.
1. Open the terminal in the directory containing this README file and execute `docker compose up --build`
1. Open this address in your web browser: [http://localhost:3050](http://localhost:3050)

⚠️ Note: The Docker build proceess takes a lot of time on the initial installation. So don't the web browser until you see these messages in the terminal:

```
🟡 database-1  | (YOUR_CURRENT_DATE) LOG:  database system is ready to accept connections
🟢 frontend-1  | VITE v5.2.11  ready in (SOME_MILLISECONDS) ms
🔵 backend-1   | Scoutr backend server ready on port 8000
```
