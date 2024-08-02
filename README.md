# Meet Scoutr

Your LinkedIn Headhunter Companion

## About

The Scoutr web app allows recruiters to create summaries of the canddiates they are scouting on LinkedIn by copy and paste their profile links.
To see a product tour check this YouTube video: [https://youtu.be/Da8lH9Z1e-4](https://youtu.be/Da8lH9Z1e-4)
[![Watch demo](https://img.youtube.com/vi/Da8lH9Z1e-4/maxresdefault.jpg)](https://youtu.be/Da8lH9Z1e-4)

## Installation

1. Clone this Git repository into your computer.
1. Install Docker. I recommend using [Docker Desktop](https://www.docker.com/products/docker-desktop/) to setup everything for you.
1. Open the terminal in the directory containing this README file and execute `docker compose up --build`
1. Open this address in your web browser: [http://localhost](http://localhost)

**⚠️ Note:** The Docker build process takes time on the initial installation. So don't open the web browser until you see these messages in the terminal:

```
🟡 database-1  | (YOUR_CURRENT_DATE) LOG:  database system is ready to accept connections
🟢 frontend-1  | VITE v5.2.11  ready in (SOME_MILLISECONDS) ms
🔵 backend-1   | Scoutr backend server ready on port 8000
```

## Improvements

he project is fully functional but has room for improvement:

1. **Better Developer Experience (DX):** Obtaining LinkedIn auth is cumbersome, requiring Node to run `npm run get_auth` from `package.json` in the backend folder or running it from the backend container. I'm exploring a more streamlined solution.
1. **Multi-threading:** The scraping process is single-threaded, scanning each profile one by one. This can be accelerated by making the ETL process run in parallel using a Browser Page Pool ([pool](https://en.wikipedia.org/wiki/Object_pool_pattern)) to scan multiple pages simultaneously. Pages can be returned to the pool after each scan, and additional pages can be created and deleted as needed.
