# Use an official Node.js image as a base
FROM node:lts-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY Mobile/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY Mobile/ .

# Build the Vite application
RUN npm run build

# Use an official Nginx image as a base
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the built files from the builder stage
COPY --from=builder /app/dist .

# Expose the default port used by Nginx
EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
