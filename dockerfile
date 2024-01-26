# Use an official Node.js runtime as a base image
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy the contents of the Mobile folder (assuming it's in the same directory as the Dockerfile)
COPY Mobile .

# Install dependencies
RUN npm install

# Expose the default port used by the Vue CLI development server
EXPOSE 5173

# Start the Vue CLI development server
CMD ["npm", "run", "build"]

# Start the Vue CLI development server
CMD ["npm", "run", "preview"]





