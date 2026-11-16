# Web Limiter is the backend application

### Why build this projects

1. this sites for visual demonstration user request hitting on the backend sites.

### Building the project steps

1. server projects initialization/setup

   ```
   npm init -y
   ```

   or

   ```
   npm init --y
   ```

2. install expessjs
   ```
   npm i express
   ```
3. create a ".gitignore" file.
4. add file/folder into .gitignore like,
   ```
   node_modules/
   .env
   so on...
   ```
5. create `index.js` file.
6. file `type` change for `commonJS`/`moduleJS`, changing the `package.json` file. <br>
   commonJS. short trigger `req`
   ```
   const express = require('express');
   ```
   moduleJs. short trigger `imp`
   ```
   import express from 'express';
   ```
7. create a `express` instance
    ```
    const app = express()
    ```