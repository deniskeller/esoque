FROM node:16.13.1

ENV PORT 3002

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

# # Building app
# RUN npm run build
# EXPOSE $PORT

# Running the app
CMD "npm" "run" "serve" "--" "-p" "80"