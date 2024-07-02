# User Service


## Description

User service is written on nodejs. I'm trying to use almost all the required tools for developed backend on nodejs.


## Requirements

- node = 20.15.0
- npm = 10.7.0

## Installation Process

1. Clone this repository to your local machine:

    ```
    git clone https://github.com/NiketanSaini/User-service.git
    ```

2. Install dependencies:

    ```
    npm install
    ```
3. Create a copy of the environment variables:

    ```
    cp .env.example .env
    ```
4. Update the .env file with your configuration values.


Now your environment is set up, and you can proceed with running the application as mentioned in the "Running the API" section. If you want to add some new variables, you also need to add them to interface and config object (Look `src/config/index.ts`)

## Running the API
### Development
To start the application in development mode, run:

```bash
npm install
```

Start the application in dev env:
```
npm run dev:start
```

Start the application in prod env:
```
npm run build
npm run prod
```

Express server listening on http://localhost:PORT_NO/, in development mode
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.