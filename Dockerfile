# Step 1: Build the React app using a Node.js environment
FROM node:20 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build files from the previous step to the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]