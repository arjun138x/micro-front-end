- to create micro front app we need webpack and bable.
- install these as dev devDependencies
    - npm i -D @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader webpack
- add .babelrc and webpack.config.js files with 

- add this script to build in local 
    - "build:local": "babel src --out-dir ../parent/node_modules/@aa/child --extensions \".js,.jsx\"",

- we can use link also for local development
  - run this in child repo - npm link
  - run this parent repo npm link <repo-name>
  - npm unlink child - TO UNLINK



Install the necessary dependencies for Webpack, Babel, and React:
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react css-loader style-loader html-webpack-plugin