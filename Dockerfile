# Stage 1: Build the React application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application for production
RUN npm run build

# ---

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

# Copy the built static files from the "builder" stage
# to the Nginx public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Tell Docker that the container listens on port 80
EXPOSE 80

# The default Nginx command will start the server
# This command keeps the container running
CMD ["nginx", "-g", "daemon off;"]