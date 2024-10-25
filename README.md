# Scoutr

Your LinkedIn Headhunter Companion

## About

recruiters to create summaries of candidates they scout on LinkedIn by simply copying and pasting profile links. For a product tour, check out this YouTube video: [https://youtu.be/3I8B2ezOm5k](https://youtu.be/3I8B2ezOm5k)
[![Watch demo](https://img.youtube.com/vi/PvDabjmfyJc/maxresdefault.jpg)](https://youtu.be/3I8B2ezOm5k)

## Table of contents

1. [Installation](#installation)
1. [Project documentation](#project-documentation)
1. [View React Components](#view-react-components)
1. [Improvements](#improvements)

## Installation

To run the project, you need to do two things: compile the project and obtain LinkedIn credentials. The first step creates the project files, and the second step grants permission to scan profiles.

### 1. Compile the project

1. Clone this Git repository to your computer.
2. Install Docker. I recommend using [Docker Desktop](https://www.docker.com/products/docker-desktop/) for an easy setup.
3. Open a terminal in the directory containing this README file and execute:

```
sudo docker compose -f docker-compose.production.yml up --build
```

4. Open this address in your web browser: [http://localhost](http://localhost)

**⚠️ Note:** The Docker build process takes time. Do not open the web browser until you see the following messages in the terminal:

```
🟡 database-1  | (YOUR_CURRENT_DATE) LOG:  database system is ready to accept connections
🟢 frontend-1  | VITE v5.X.XX  ready in (SOME_MILLISECONDS) ms
🔵 backend-1   | Scoutr backend server ready on port 8000
```

### 2. Obtain the LinkedIn credential

1. Once the project is up and running, open a second terminal window in the same directory as before and execute:

```
sudo docker ps
```

2. This command will display a table with columns for Container ID, Image, etc. Copy the ID of the Image named **scoutr_backend**.
3. Run the following command, replacing `CONTAINER_ID` with the copied container ID:

```
sudo docker exec -t CONTAINER_ID /bin/bash
```

4. Inside the container, run:

```
npm run auth
```

5. You will be prompted for a LinkedIn email, password, and a verification code sent to your email.
6. Wait until the message `Saved auth as LoginAuth.json from (some login page)`
7. The first terminal window should repeat this message to confirm the new credentials.

```
🔵 backend-1   | Scoutr browser with the LinkedIn creadential is ready
🔵 backend-1   | Scoutr backend server ready on port 8000
```

## Project documentation

If you are into reading and seeing pretty diagrams, I have the project documentation in this [PDF file](https://github.com/elalienx/scoutr/blob/main/documentation.pdf).

## View React Components

If you'd like to view the React components without needing to install Docker or manage databases, you can use our component gallery built with [React Cosmos](https://reactcosmos.org):

1. Navigate to the frontend folder with `cd frontend`
1. Install dependencies by running `npm clean-install`
1. Start the component gallery with `npm run cosmos`
1. Open your browser and go to `localhost:5001` (or the port specified in the terminal).

⚠️ **Note:** This setup is for viewing the frontend only and does not support profile scraping or data storage.

## Improvements

The project is fully functional but has room for improvement:

1. **Better Developer Experience (DX):** Obtaining LinkedIn auth is cumbersome, requiring Node to run `npm run auth` from `package.json` in the backend folder or running it from the backend container. I'm exploring a more streamlined solution.
1. **Multi-threading:** The scraping process is single-threaded, scanning each profile one by one. This can be accelerated by making the ETL process run in parallel using a Browser Page Pool ([object pool pattern](https://en.wikipedia.org/wiki/Object_pool_pattern)) to scan multiple pages simultaneously. Pages can be returned to the pool after each scan, and additional pages can be created and deleted as needed.
