#!/bin/bash

echo "Removing build and packages files..";
rm -rf build;
rm -rf node_modules;

# install nvm and node
source $NVM_DIR/nvm.sh;
nvm use;

# install npm packages
echo "Installing npm packages..";
npm install;

# building the app
echo "Building the app..";
npm run build;

# starting the app
echo "Starting the app..";
npm run start;
