# Use the official image as a parent image.
FROM node:current-slim

# Set the working directory.
WORKDIR /client/dist

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 4201

# Run the specified command within the container.
CMD [ "npm", "start" ]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

#docker run --publish 4201:4201 fentyb
#how i was able to get the container to connect to database/backened
#--publish routes traffic from host(ie my app) to image