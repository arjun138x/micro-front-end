# @aa/child (Leaflet Map Package)

This is a custom React package that provides a Leaflet map component. It can be built using Babel and used in another React project.

---

## 🚀 **Project Setup**

### **1. Clone the Repository**

```sh
# Navigate to your project directory
mkdir micro-frontend && cd micro-frontend

git clone <repository-url>
```

### **2. Install Dependencies**

Run the following command in both the parent React project and the package project:

```sh
npm install
```

---

## 🏗 **Building the Package**

### **Development Mode (Watch Mode)**

```sh
cd package
npm run build:dev
```

- This will keep watching for changes and automatically rebuild the package.

### **Production Build**

```sh
npm run build:prod
```

- This will create an optimized build of the package.

---

## 📦 **Using the Package in the Parent React App**

### **1. Install the Package in the Parent App**

```sh
cd ../parent-app
npm install ../package
```

### **2. Import the Map Component**

Modify `App.js` in the parent React project:

```jsx
import React from "react";
import MapComponent from "@aa/child/dist";

function App() {
  return (
    <div>
      <h1>Leaflet Map</h1>
      <MapComponent />
    </div>
  );
}

export default App;
```

### **3. Start the Parent React App**

```sh
npm start
```

---

## 🛠 **Troubleshooting**

### **React Invalid Hook Call Error?**

- Ensure React is **only** in `peerDependencies` in `package/package.json`.
- Run the following command in both `package` and `parent-app` to check React versions:
  ```sh
  npm list react
  ```
- If multiple versions appear, reinstall dependencies:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```

### **Package Changes Not Reflecting in Parent App?**

- Ensure `npm run build:dev` is running in `package` while developing.
- Reinstall the package in the parent app after building:
  ```sh
  cd ../parent-app
  npm install ../package
  npm start
  ```

---

## 📜 **Project Structure**

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
│   │   ├── MapComponent.jsx
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

## 📌 **Notes**

- This package is built using **Babel**.
- Leaflet map uses OpenStreetMap tiles.
- The package must be rebuilt (`npm run build:dev` or `npm run build:prod`) before using it in the parent app.

---

## 📞 **Support**

For any issues, please create an issue on the repository or contact the maintainer.

🚀 Happy Coding!
