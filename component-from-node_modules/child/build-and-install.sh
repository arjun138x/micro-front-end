#!/bin/bash

# Define the target app where the package should be installed
DESTINATION_DIR="../parent/node_modules/@aa/child"

# Build the application using Babel
npx babel src --out-dir dist --presets=@babel/preset-env,@babel/preset-react

# Build Tailwind CSS (ensure you have a tailwind.config.js and postcss.config.js)
npx tailwindcss -o dist/styles.css

# Create the destination directory if it doesn't exist
mkdir -p "$DESTINATION_DIR"

# Copy the dist folder (including the generated CSS) to the destination
cp -r dist "$DESTINATION_DIR"

# Find and copy all CSS files within the 'src' directory and its subdirectories
find src -name "*.css" -exec cp -t "$DESTINATION_DIR" {} +

# Copy package.json to the destination
cp package.json "$DESTINATION_DIR"

# Change directory to the destination
cd "$DESTINATION_DIR"

# Install dependencies in the destination directory
npm install 

# Change back to the original directory
cd -