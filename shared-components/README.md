# @aa/child (Package)

This is a custom React package that provides a multiple reusable components. It can be built using Babel and used in another React project.

---

## 🚀 Project Setup

### Install Dependencies

Run the following command in both the parent React project and the package project:

```sh
npm install
```

---

## 🏗 Building the Package

### Development Mode (Watch Mode)

```sh
cd package
npm run build:dev
```

- This will keep watching for changes and automatically rebuild the package.

### Production Build

```sh
npm run build:prod
```

- This will create an optimized build of the package.

---

## 📦 Using the Package in the Parent React App

### 1. Install the Package in the Parent App

```sh
cd ../shared-components
npm install ../package
```

### Start the Parent React App

```sh
npm start
```

---

## 🛠 Troubleshooting

### React Invalid Hook Call Error?

- Ensure React is only in `peerDependencies` in `package/package.json`.
- Run the following command in both `package` and `parent-app` to check React versions:
  ```sh
  npm list react
  ```
- If multiple versions appear, reinstall dependencies:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```

### Package Changes Not Reflecting in Parent App?

- Ensure `npm run build:dev` is running in `package` while developing.
- Reinstall the package in the parent app after building:
  ```sh
  cd ../parent-app
  npm install ../package
  npm start
  ```

---

## 📜 Project Structure

```
micro-frontend/
├── parent-app/          # Main React application
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   ├── node_modules/
│   ├── public/
│
├── package/             # Custom Leaflet package (@aa/child)
│   ├── src/
│   │   ├── components
│   │   ├── index.js
│   │   ├── styles.css
│   │   ├── data.json
│   ├── dist/
│   ├── package.json
│   ├── .babelrc
│
└── README.md            # Project documentation
```

---

## 📌 Notes

- This package is built using Babel.
- The package must be rebuilt (`npm run build:dev` or `npm run build:prod`) before using it in the parent app.

---

🚀 Happy Coding!
