# Documentation Outline

Inspired by [Writing effective documentation | Beth Aitman](https://www.youtube.com/watch?v=R6zeikbTgVc)

## Tips:

1. Start with what the reader needs
1. Write less (skip implementation details, tradeoffs, benchmarks, etc)
1. Write the outline first

## Start with what the reader needs

### 1. Install the project

To make the project easy to install, Scoutr is setup using Docker, so it can take care of installing all project systems like databases, server, etc. 1. Clone the [Scoutr Git repository]() 1. Inside the project folder run `docker compose up`

⚠️ Note: Bruno is not needed at this stage as the Frontend makes it easy to play around. That's kinda the whole point haha.

⚠️ Note: I must have 2 predefined assignements, so people can start playing around. Its easier to show how an assigment looks like based on an existing example rather than explain the form fields with no previous context.

### 2. Understand the code base

The first file to open is `index.ts` located inside the `src` folder. This is were all the backend code lives.

⚠️ Note: Only write on what exist not what will exist.

- GOOD: Open the file index.ts inside the src folder.
- BAD: the project has the backend folder, frontend folder, nix folder. Start with the backend/src/index.

⚠️ Note: Don't document every single detail. For example the helpers don’t need their own slide, they are short enough to put all in 1 slide divided in columns
