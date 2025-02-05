# React Leaflet Map Package Integration

This project demonstrates how to create a React application that imports a custom Leaflet map component from a separate package. The package is built using Babel and Webpack and is imported into the main React application.

---

## **Project Structure**

```
main-app/                     # Main React application
├── node_modules/             # Dependencies for the main app
├── public/                   # Public assets for the main app
├── src/                      # Source code for the main app
│   └── App.js                # Main app component
├── package.json              # Main app dependencies and scripts
└── leaflet-map-package/      # Custom Leaflet map package
    ├── build/                # Built package files
    ├── src/                  # Source code for the package
    │   ├── LeafletMap.jsx    # Leaflet map component
    │   ├── data/             # JSON configuration files
    │   │   └── config.json   # Map configuration
    │   ├── styles/           # CSS files
    │   │   └── leaflet.css   # Leaflet CSS
    │   └── index.js          # Package entry point
    ├── package.json          # Package dependencies and scripts
    ├── babel.config.json     # Babel configuration
    └── webpack.config.js     # Webpack configuration
```

---

## **Prerequisites**

Before starting, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v7 or higher)

---

## **Setup Instructions**

### **1. Clone the Repository**

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-folder>
```

---

### **2. Set Up the Main React Application**

1. Navigate to the `main-app` folder:

   ```bash
   cd main-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the main application:

   ```bash
   npm start
   ```

4. The application will open in your browser at `http://localhost:3000`.

---

### **3. Set Up the Leaflet Map Package**

1. Navigate to the `leaflet-map-package` folder:

   ```bash
   cd leaflet-map-package
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the package:

   ```bash
   npm run build
   ```

4. Run the package in watch mode (for development):
   ```bash
   npm run watch
   ```

---

### **4. Link the Package to the Main Application**

1. In the `main-app` folder, install the local package:

   ```bash
   npm install ../leaflet-map-package
   ```

2. Import and use the Leaflet map component in `src/App.js`:

   ```jsx
   import React from "react";
   import { LeafletMap } from "leaflet-map-package";

   function App() {
     return (
       <div>
         <h1>Leaflet Map in Main App</h1>
         <LeafletMap />
       </div>
     );
   }

   export default App;
   ```

3. Start the main application again:
   ```bash
   npm start
   ```

---

## **Development Workflow**

### **1. Making Changes to the Package**

- While developing, keep the package in watch mode:

  ```bash
  cd leaflet-map-package
  npm run watch
  ```

- Any changes made to the package will automatically rebuild, and the main application will reflect the updates.

### **2. Rebuilding the Package**

- If you make changes to the package and want to rebuild it:
  ```bash
  cd leaflet-map-package
  npm run build
  ```

---

## **Dependencies**

### **Main Application**

- React
- React DOM
- `leaflet-map-package` (local package)

### **Leaflet Map Package**

- React
- React DOM
- Leaflet
- Babel (for transpiling)
- Webpack (for bundling)

---

## **Troubleshooting**

### **1. Package Not Found**

- Ensure the package is built and linked correctly:
  ```bash
  cd leaflet-map-package
  npm run build
  cd ../main-app
  npm install ../leaflet-map-package
  ```

### **2. CSS Not Loading**

- Ensure the Leaflet CSS file is correctly imported in the package:
  ```jsx
  import "leaflet/dist/leaflet.css";
  ```

### **3. Watch Mode Not Working**

- Ensure Webpack is running in watch mode:
  ```bash
  cd leaflet-map-package
  npm run watch
  ```

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- [Leaflet](https://leafletjs.com/) for the mapping library.
- [Create React App](https://create-react-app.dev/) for the React project setup.
- [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) for bundling and transpiling.
