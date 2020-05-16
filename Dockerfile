# Use the official image as a parent image.
FROM node:13-alpine

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

#HOW TO RUN IMAGE
#docker run --publish 4201:4201 fentyb <change fentyb to tagname>
#how i was able to get the container to connect to database/backened
#--publish routes traffic from host(ie my app) to image

#TO PUSH TO DOCKER HUB:
#You have to tag it again
#docker tag <tag on local machine> <dockerhub username>/<tagname to refer to when pushing>
#Then push: docker push <dockerhub username>/<tag ypu just set up>


#https://stackabuse.com/deploying-node-js-apps-to-aws-ec2-with-docker/
