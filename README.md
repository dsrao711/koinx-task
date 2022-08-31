# Koinx Task

### Setup

-   Cloning the code

```
git clone
cd
```

-   Setting up the env variables

```
cp .env.example .env
```

    Note: Make resure to add the values to the .env file

### Starting the server

-   For debugging

    ```
        npm install
        npm run debug
    ```

    This will start the server in debug mode

-   For production

    ```
        npm install --omit=dev
        npm start
    ```

    This will start the server in production mode
