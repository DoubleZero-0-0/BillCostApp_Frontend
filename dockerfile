## Step one
FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY Mobile/package*.json ./
RUN npm install
COPY Mobile/ .
RUN npm run build

#### Step 2
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 90
CMD ["nginx", "-g", "daemon off;"]



