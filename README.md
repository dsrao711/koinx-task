# Koinx Task

## Setup

### Cloning the code

```
git clone koinx-task
cd koinx-task
```

### Setting up the env variables

```
cp .env.example .env
```

    Note: Make sure to add the values to the .env file

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
    
 Please check the screeshots folder to see the output for each task 
 
 -  Task 1 : For `transaction` endpoint , the transactions for specific wallet address are fetched and stored in DB
 -  Task 2 : Ethereum prices are stored in db every minute
 -  Task 3 : For `balance` endpoint , the current balance and ethereum price is displayed

